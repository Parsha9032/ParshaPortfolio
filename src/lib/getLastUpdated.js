import { execSync } from 'child_process';

export function getGitLastUpdated() {
  try {
    const isoDate = execSync('git log -1 --format=%cI', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();

    if (!isoDate) {
      return null;
    }

    return isoDate.slice(0, 10);
  } catch (error) {
    return null;
  }
}
