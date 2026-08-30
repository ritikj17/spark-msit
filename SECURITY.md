# 🔒 SPARK MSIT — Security Policy & Guidelines

The **SPARK MSIT** technical team takes the security and integrity of our web portal and user data seriously.

---

## 1. Reporting a Vulnerability

If you discover a security vulnerability, please do **NOT** open a public GitHub issue.

Instead, please email the technical leadership directly:
- **SPARK Official Technical Team:** `sparkmsit@msit.in` (SPARK MSIT Leadership)

Please include:
1. Description of the vulnerability.
2. Steps to reproduce or proof-of-concept.
3. Potential impact.

We will acknowledge your report within 48 hours and work on a prompt resolution.

---

## 2. Security Best Practices for Contributors

- **No Hardcoded Secrets:** Never commit API keys, personal access tokens, or private URLs.
- **Dependency Auditing:** Always run `npm audit` regularly to verify installed packages are free from known vulnerabilities.
- **Input Sanitization:** Contact forms and join protocols sanitize user input to prevent XSS (Cross-Site Scripting).
- **Content Security:** External assets must use HTTPS protocols.
