CSF + Ethical Hacking Practice Test Update

Files
- Code.gs: Apps Script backend; CSF remains on existing Results sheet. EH goes to EH Results and EH Unit 1 Results ... EH Unit 5 Results.
- index.html: dashboard with CSF Quiz / Ethical Hacking Quiz. EH runs all 50 questions in one quiz; no unit selection.
- config.js: existing Apps Script API URL retained.
- questions-csf.js: existing CSF question bank, unchanged.
- eh-questions.js: 50 EH questions, answer keys and unit mapping.

Install
1. Back up current repository and spreadsheet.
2. Replace Apps Script contents with Code.gs; run setup() once. Existing sheet data is preserved; missing EH tabs are created.
3. Deploy > Manage deployments > Edit > New version > Deploy. Keep same /exec URL.
4. Publish index.html, config.js, questions-csf.js, eh-questions.js to GitHub Pages.
5. Test CSF and EH submissions separately; verify sheets.

Important source note
The supplied EH results file included 50 question stems and correct answers/explanations but not original A-D options. The EH bank retains those stems and answer text; distractors are reconstructed and should be reviewed before use. EH unit mapping is 10/10/10/13/7.

SHA-256 fix: Utilities.DigestAlgorithm.SHA_256.
