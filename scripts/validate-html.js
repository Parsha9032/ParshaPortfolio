/**
 * Lightweight sanity checks over the exported `out/` directory.
 * Not a full HTML validator, but catches common accessibility and
 * build regressions (missing lang/title/meta, empty files, etc.)
 * without adding a heavy dependency.
 *
 * Usage: npm run build && npm run validate:html
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

function findHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(fullPath);
    return entry.name.endsWith('.html') ? [fullPath] : [];
  });
}

function validateFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const errors = [];

  if (html.trim().length === 0) errors.push('File is empty.');
  if (!/<html[^>]*\slang=/.test(html)) errors.push('Missing <html lang="...">.');
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push('Missing or empty <title>.');
  if (!/<meta\s+name="description"/.test(html)) errors.push('Missing meta description.');
  if (!/<meta\s+name="viewport"/.test(html)) errors.push('Missing viewport meta tag.');

  return errors;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('The "out" directory does not exist. Run `npm run build` first.');
    process.exit(1);
  }

  const files = findHtmlFiles(OUT_DIR);
  if (files.length === 0) {
    console.error('No HTML files found in "out".');
    process.exit(1);
  }

  let hasErrors = false;
  for (const file of files) {
    const errors = validateFile(file);
    if (errors.length > 0) {
      hasErrors = true;
      console.error(`\n✗ ${path.relative(OUT_DIR, file)}`);
      errors.forEach((e) => console.error(`  - ${e}`));
    }
  }

  if (hasErrors) {
    console.error('\nHTML validation failed.');
    process.exit(1);
  }

  console.log(`✓ Validated ${files.length} HTML file(s). No issues found.`);
}

main();
