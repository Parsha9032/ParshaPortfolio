module.exports = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
  },
  "next/core-web-vitals",
  "prettier",
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
