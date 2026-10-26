// EH question bank: 50 questions. Original source supplied stems, correct answers and explanations; A-D distractors reconstructed.
window.EH_UNITS = {
  "1": "Ethical Hacking Fundamentals & IT Act 2000",
  "2": "Reconnaissance, Scanning & Enumeration",
  "3": "Exploitation & Post-Exploitation",
  "4": "Web Application Security & OWASP",
  "5": "Reporting & Professional Practice"
};
window.EH_QUESTIONS = [
  {
    "id": "eh1",
    "unit": 1,
    "q": "A cybersecurity enthusiast notices a company's admin login page is exposed to the internet and, without any permission, tests it. They steal nothing and email the company about the weakness. Which classification and legal position is most accurate?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Section 66F applies to every unauthorised login.",
      "c": "Clearing Tracks; leave persistence installed for evidence.",
      "d": "Grey hat; good intent does not replace written authorisation, so unauthorised testing can still attract action under Sections 43/66 of the IT Act."
    },
    "a": "d",
    "e": "Grey hat; good intent does not replace written authorisation, so unauthorised testing can still attract action under Sections 43/66 of the IT Act."
  },
  {
    "id": "eh2",
    "unit": 1,
    "q": "A client's manager says on a phone call, \"Go ahead and test our servers whenever you like.\" What should the tester do before touching any system?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Section 66F applies to every unauthorised login.",
      "c": "Obtain signed written authorisation fixing scope and Rules of Engagement, alongside the NDA.",
      "d": "Clearing Tracks; leave persistence installed for evidence."
    },
    "a": "c",
    "e": "Obtain signed written authorisation fixing scope and Rules of Engagement, alongside the NDA."
  },
  {
    "id": "eh3",
    "unit": 1,
    "q": "An intern, without the owner's permission, copies files from a company server out of curiosity. No dishonest or fraudulent intent is proven. Which statement best describes the position under the IT Act 2000?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Section 43 applies: civil liability to pay compensation regardless of intent; Section 66 needs dishonest or fraudulent intent.",
      "c": "Section 66F applies to every unauthorised login.",
      "d": "Clearing Tracks; leave persistence installed for evidence."
    },
    "a": "b",
    "e": "Section 43 applies: civil liability to pay compensation regardless of intent; Section 66 needs dishonest or fraudulent intent."
  },
  {
    "id": "eh4",
    "unit": 1,
    "q": "A freelancer knowingly buys a stolen laptop and then uses the previous owner's saved password to log in to the employer's portal. Which two sections of the IT Act 2000 are most directly involved?",
    "o": {
      "a": "Section 66B (receiving a stolen computer resource) and Section 66C (identity theft).",
      "b": "Obtain verbal permission only; written scope is unnecessary.",
      "c": "Section 66F applies to every unauthorised login.",
      "d": "Clearing Tracks; leave persistence installed for evidence."
    },
    "a": "a",
    "e": "Section 66B (receiving a stolen computer resource) and Section 66C (identity theft)."
  },
  {
    "id": "eh5",
    "unit": 1,
    "q": "Attackers deliberately take down the control systems of a state power grid to threaten India's security and create terror among the public. Which provision applies and what is the maximum punishment?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Section 66F applies to every unauthorised login.",
      "c": "Clearing Tracks; leave persistence installed for evidence.",
      "d": "Section 66F (cyber terrorism), imprisonment which may extend to life."
    },
    "a": "d",
    "e": "Section 66F (cyber terrorism), imprisonment which may extend to life."
  },
  {
    "id": "eh6",
    "unit": 1,
    "q": "A bank developer who has just been dismissed alters the banking software's source code, which the law requires to be maintained, and edits the software logs to hide the change. Which section most directly covers this?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Section 66F applies to every unauthorised login.",
      "c": "Section 65, tampering with computer source documents (up to 3 years and fine up to Rs 2 lakh).",
      "d": "Clearing Tracks; leave persistence installed for evidence."
    },
    "a": "c",
    "e": "Section 65, tampering with computer source documents (up to 3 years and fine up to Rs 2 lakh)."
  },
  {
    "id": "eh7",
    "unit": 1,
    "q": "During an authorised test, a tester installs a web shell and creates a scheduled task so that access survives a reboot. Which phase of ethical hacking is this, and how should the tester handle it afterwards?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Maintaining Access; document the persistence method and remove it after the test.",
      "c": "Section 66F applies to every unauthorised login.",
      "d": "Clearing Tracks; leave persistence installed for evidence."
    },
    "a": "b",
    "e": "Maintaining Access; document the persistence method and remove it after the test."
  },
  {
    "id": "eh8",
    "unit": 1,
    "q": "A SOC finds an infected host regularly calling out to an unknown external server for instructions. Using the Kill Chain mapping, which defender control best targets this stage?",
    "o": {
      "a": "Network egress filtering and DNS monitoring.",
      "b": "Obtain verbal permission only; written scope is unnecessary.",
      "c": "Section 66F applies to every unauthorised login.",
      "d": "Clearing Tracks; leave persistence installed for evidence."
    },
    "a": "a",
    "e": "Network egress filtering and DNS monitoring."
  },
  {
    "id": "eh9",
    "unit": 1,
    "q": "After a red-team engagement, the report lists several attacks the SOC missed, but the blue team only learns of them weeks later. Management wants detection gaps closed in real time in future exercises. Which approach fits best?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Section 66F applies to every unauthorised login.",
      "c": "Clearing Tracks; leave persistence installed for evidence.",
      "d": "A purple-team exercise where red executes a stage and blue validates detection immediately."
    },
    "a": "d",
    "e": "A purple-team exercise where red executes a stage and blue validates detection immediately."
  },
  {
    "id": "eh10",
    "unit": 1,
    "q": "A small company wants a fast, low-cost, mostly automated review that lists known weaknesses with risk scores in about a day, without anyone exploiting them. Which engagement fits?",
    "o": {
      "a": "Obtain verbal permission only; written scope is unnecessary.",
      "b": "Section 66F applies to every unauthorised login.",
      "c": "Vulnerability assessment.",
      "d": "Clearing Tracks; leave persistence installed for evidence."
    },
    "a": "c",
    "e": "Vulnerability assessment."
  },
  {
    "id": "eh11",
    "unit": 2,
    "q": "A tester wants to find directory listings accidentally exposed on target.com, using only Google. Which dork is the best fit?",
    "o": {
      "a": "Use active scanning tools against the target network.",
      "b": "intitle:\"index of\" \"parent directory\" site:target.com.",
      "c": "Use -sT to avoid completing the TCP handshake.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "b",
    "e": "intitle:\"index of\" \"parent directory\" site:target.com."
  },
  {
    "id": "eh12",
    "unit": 2,
    "q": "During passive reconnaissance, a tester must find the organisation's exposed RDP and database services without sending a single packet to its network. What should be used?",
    "o": {
      "a": "Shodan, for example org:\"Target Corp\" port:3389.",
      "b": "Use active scanning tools against the target network.",
      "c": "Use -sT to avoid completing the TCP handshake.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "a",
    "e": "Shodan, for example org:\"Target Corp\" port:3389."
  },
  {
    "id": "eh13",
    "unit": 2,
    "q": "Running dig axfr target.com @ns1.target.com returns every hostname and internal record in the zone. How should this be reported and fixed?",
    "o": {
      "a": "Use active scanning tools against the target network.",
      "b": "Use -sT to avoid completing the TCP handshake.",
      "c": "Treat all high CVSS findings as highest priority without context.",
      "d": "Information-disclosure/security misconfiguration; allow AXFR/IXFR only to authorised secondary servers and authenticate with TSIG."
    },
    "a": "d",
    "e": "Information-disclosure/security misconfiguration; allow AXFR/IXFR only to authorised secondary servers and authenticate with TSIG."
  },
  {
    "id": "eh14",
    "unit": 2,
    "q": "A tester needs a list of employee emails and subdomains for a phishing-simulation target list, without a single packet touching the target network. Which tool and command fit best?",
    "o": {
      "a": "Use active scanning tools against the target network.",
      "b": "Use -sT to avoid completing the TCP handshake.",
      "c": "theHarvester -d target.com -b google,crtsh.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "c",
    "e": "theHarvester -d target.com -b google,crtsh."
  },
  {
    "id": "eh15",
    "unit": 2,
    "q": "A tester wants to find open ports on a lab server while avoiding completing the TCP three-way handshake, accepting that raw-socket (root) privileges are needed. Which Nmap flag fits?",
    "o": {
      "a": "Use active scanning tools against the target network.",
      "b": "-sS.",
      "c": "Use -sT to avoid completing the TCP handshake.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "b",
    "e": "-sS."
  },
  {
    "id": "eh16",
    "unit": 2,
    "q": "Nmap shows port 80 open, but the report needs the exact web-server version (for example Apache 2.4.41) so it can be mapped to known CVEs. Which option provides this?",
    "o": {
      "a": "-sV.",
      "b": "Use active scanning tools against the target network.",
      "c": "Use -sT to avoid completing the TCP handshake.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "a",
    "e": "-sV."
  },
  {
    "id": "eh17",
    "unit": 2,
    "q": "A tester wants a first-pass sweep that actively checks discovered services against known-vulnerability signatures, accepting that it is more intrusive and needs explicit authorisation. Which Nmap option fits?",
    "o": {
      "a": "Use active scanning tools against the target network.",
      "b": "Use -sT to avoid completing the TCP handshake.",
      "c": "Treat all high CVSS findings as highest priority without context.",
      "d": "--script=vuln."
    },
    "a": "d",
    "e": "--script=vuln."
  },
  {
    "id": "eh18",
    "unit": 2,
    "q": "Port 445 is open on a Windows server in an authorised lab. The tester wants to automate SMB enumeration of users, groups, shares, password policy and OS information in one pass. Which command fits best?",
    "o": {
      "a": "Use active scanning tools against the target network.",
      "b": "Use -sT to avoid completing the TCP handshake.",
      "c": "enum4linux -a <IP>.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "c",
    "e": "enum4linux -a <IP>."
  },
  {
    "id": "eh19",
    "unit": 2,
    "q": "Nessus gives a finding a CVSS score of 9.8 on a host in an isolated lab VLAN with no route to the Internet and holding no sensitive data. Does that automatically make it the top remediation priority?",
    "o": {
      "a": "Use active scanning tools against the target network.",
      "b": "No; assess exploitability and business context, not numeric score alone.",
      "c": "Use -sT to avoid completing the TCP handshake.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "b",
    "e": "No; assess exploitability and business context, not numeric score alone."
  },
  {
    "id": "eh20",
    "unit": 2,
    "q": "Nessus flags a server as vulnerable to an old Apache flaw purely because the banner shows an old version string, but the vendor has back-ported the security fix. What is this, and what should the tester do?",
    "o": {
      "a": "A false positive; confirm via banner grabbing, changelog review or safe manual testing.",
      "b": "Use active scanning tools against the target network.",
      "c": "Use -sT to avoid completing the TCP handshake.",
      "d": "Treat all high CVSS findings as highest priority without context."
    },
    "a": "a",
    "e": "A false positive; confirm via banner grabbing, changelog review or safe manual testing."
  },
  {
    "id": "eh21",
    "unit": 3,
    "q": "A generated payload keeps being flagged by antivirus because its signature is known. Which Metasploit module type is designed to help evade signature-based detection?",
    "o": {
      "a": "auxiliary",
      "b": "LHOST is the target and RHOST is the tester.",
      "c": "Use a single large payload with no staging.",
      "d": "encoder."
    },
    "a": "d",
    "e": "encoder."
  },
  {
    "id": "eh22",
    "unit": 3,
    "q": "A tester configures a reverse-shell exploit against 192.168.56.10 (the target) from Kali at 192.168.56.20, but sets LHOST to 192.168.56.10 and RHOST to 192.168.56.20. No session opens. What went wrong?",
    "o": {
      "a": "auxiliary",
      "b": "LHOST is the target and RHOST is the tester.",
      "c": "Values are swapped: RHOST is the target; LHOST is the attacker IP the target connects back to.",
      "d": "Use a single large payload with no staging."
    },
    "a": "c",
    "e": "Values are swapped: RHOST is the target; LHOST is the attacker IP the target connects back to."
  },
  {
    "id": "eh23",
    "unit": 3,
    "q": "An exploit has only a very small space in memory for injected code, but the full Meterpreter payload is large. Which payload approach fits best?",
    "o": {
      "a": "auxiliary",
      "b": "A staged payload such as windows/meterpreter/reverse_tcp.",
      "c": "LHOST is the target and RHOST is the tester.",
      "d": "Use a single large payload with no staging."
    },
    "a": "b",
    "e": "A staged payload such as windows/meterpreter/reverse_tcp."
  },
  {
    "id": "eh24",
    "unit": 3,
    "q": "A tester builds update.exe with msfvenom (windows/meterpreter/reverse_tcp, LHOST=10.10.1.5, LPORT=4444). The target runs it, but no session appears on the attacker machine. What is the most likely missing step?",
    "o": {
      "a": "Start exploit/multi/handler with the same PAYLOAD, LHOST and LPORT before the file executes.",
      "b": "auxiliary",
      "c": "LHOST is the target and RHOST is the tester.",
      "d": "Use a single large payload with no staging."
    },
    "a": "a",
    "e": "Start exploit/multi/handler with the same PAYLOAD, LHOST and LPORT before the file executes."
  },
  {
    "id": "eh25",
    "unit": 3,
    "q": "A Meterpreter session opens. The tester wants to confirm which account the session runs as, to decide whether privilege escalation is needed. Which command should be used?",
    "o": {
      "a": "auxiliary",
      "b": "LHOST is the target and RHOST is the tester.",
      "c": "Use a single large payload with no staging.",
      "d": "getuid."
    },
    "a": "d",
    "e": "getuid."
  },
  {
    "id": "eh26",
    "unit": 3,
    "q": "After compromising many hosts, a tester wants to quickly learn which local privilege-escalation exploits are likely to work on each, instead of trying them one by one. Which is the best choice?",
    "o": {
      "a": "auxiliary",
      "b": "LHOST is the target and RHOST is the tester.",
      "c": "run post/multi/recon/local_exploit_suggester.",
      "d": "Use a single large payload with no staging."
    },
    "a": "c",
    "e": "run post/multi/recon/local_exploit_suggester."
  },
  {
    "id": "eh27",
    "unit": 3,
    "q": "On a Linux target, a low-privileged shell shows this from sudo -l: (root) NOPASSWD: /usr/bin/vim. Why is this a critical misconfiguration, and what should the tester do?",
    "o": {
      "a": "auxiliary",
      "b": "vim can spawn a shell, so sudo can yield root; document it and recommend removing the sudo right.",
      "c": "LHOST is the target and RHOST is the tester.",
      "d": "Use a single large payload with no staging."
    },
    "a": "b",
    "e": "vim can spawn a shell, so sudo can yield root; document it and recommend removing the sudo right."
  },
  {
    "id": "eh28",
    "unit": 3,
    "q": "A Windows service runs from C:\\Program Files\\Acme Backup\\service.exe with the path not enclosed in quotes, and a low-privileged user can write to C:\\. Which weakness could let that user get code running with the service privileges?",
    "o": {
      "a": "An unquoted service path.",
      "b": "auxiliary",
      "c": "LHOST is the target and RHOST is the tester.",
      "d": "Use a single large payload with no staging."
    },
    "a": "a",
    "e": "An unquoted service path."
  },
  {
    "id": "eh29",
    "unit": 3,
    "q": "A tester runs hashdump on a Windows host and obtains 32-character hex hashes. MD5 and NTLM hashes are both 32 hex characters. Which hashcat mode should be used first?",
    "o": {
      "a": "auxiliary",
      "b": "LHOST is the target and RHOST is the tester.",
      "c": "Use a single large payload with no staging.",
      "d": "-m 1000 (NTLM), because hashes came from a Windows SAM dump."
    },
    "a": "d",
    "e": "-m 1000 (NTLM), because hashes came from a Windows SAM dump."
  },
  {
    "id": "eh30",
    "unit": 3,
    "q": "A tester has only a username and a reachable SSH service, with no password hashes. Which approach fits, and what is its main drawback?",
    "o": {
      "a": "auxiliary",
      "b": "LHOST is the target and RHOST is the tester.",
      "c": "Hydra online brute force; slower and noisy, and can trigger account lockouts or IDS/IPS alerts.",
      "d": "Use a single large payload with no staging."
    },
    "a": "c",
    "e": "Hydra online brute force; slower and noisy, and can trigger account lockouts or IDS/IPS alerts."
  },
  {
    "id": "eh31",
    "unit": 4,
    "q": "In an authorised test of a university portal, Student A changes /marks?id=1001 to id=1002 and sees Student B's marks. Which OWASP 2021 category is this and what is the best fix?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A01 Broken Access Control; enforce server-side authorisation and ownership checks, denying by default.",
      "c": "A05 Security Misconfiguration; use unsalted MD5.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "b",
    "e": "A01 Broken Access Control; enforce server-side authorisation and ownership checks, denying by default."
  },
  {
    "id": "eh32",
    "unit": 4,
    "q": "A tester finds the application stores user passwords as unsalted MD5 hashes. Which OWASP category and recommendation fit best?",
    "o": {
      "a": "A02 Cryptographic Failures; use strong, salted, adaptive hashing such as bcrypt, argon2 or scrypt.",
      "b": "A03 Injection; use only a WAF.",
      "c": "A05 Security Misconfiguration; use unsalted MD5.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "a",
    "e": "A02 Cryptographic Failures; use strong, salted, adaptive hashing such as bcrypt, argon2 or scrypt."
  },
  {
    "id": "eh33",
    "unit": 4,
    "q": "On a deliberately vulnerable DVWA lab page, a tester enters ' ORDER BY 3-- and it works, but ORDER BY 4 returns an error. What does this reveal and what comes next?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A05 Security Misconfiguration; use unsalted MD5.",
      "c": "Reflected XSS; use innerHTML for safe rendering.",
      "d": "Query returns 3 columns; UNION SELECT must use 3 columns, for example UNION SELECT null,null,null."
    },
    "a": "d",
    "e": "Query returns 3 columns; UNION SELECT must use 3 columns, for example UNION SELECT null,null,null."
  },
  {
    "id": "eh34",
    "unit": 4,
    "q": "A developer builds SQL queries by concatenating user input into strings. Which fix is best, and what is the right role for a WAF?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A05 Security Misconfiguration; use unsalted MD5.",
      "c": "Parameterised queries/prepared statements, server-side allow-list validation and least-privilege DB account; WAF only as defence in depth.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "c",
    "e": "Parameterised queries/prepared statements, server-side allow-list validation and least-privilege DB account; WAF only as defence in depth."
  },
  {
    "id": "eh35",
    "unit": 4,
    "q": "A shop's limited-edition sale is emptied in seconds by a bot buying unlimited quantities. The code has no bug; the workflow simply never limited purchases. Which category fits, and what helps most?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A04 Insecure Design; threat modelling, abuse-case analysis, rate limits and server-side business-logic limits.",
      "c": "A05 Security Misconfiguration; use unsalted MD5.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "b",
    "e": "A04 Insecure Design; threat modelling, abuse-case analysis, rate limits and server-side business-logic limits."
  },
  {
    "id": "eh36",
    "unit": 4,
    "q": "A pentester finds the admin console reachable with admin/admin, debug mode on showing stack traces, and directory listing enabled. Which category and fix fit best?",
    "o": {
      "a": "A05 Security Misconfiguration; remove default credentials, disable debug and directory listing, apply secure configuration baselines.",
      "b": "A03 Injection; use only a WAF.",
      "c": "A05 Security Misconfiguration; use unsalted MD5.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "a",
    "e": "A05 Security Misconfiguration; remove default credentials, disable debug and directory listing, apply secure configuration baselines."
  },
  {
    "id": "eh37",
    "unit": 4,
    "q": "The company's own code is secure, but the app runs a framework version with a publicly known remote-code-execution CVE. Which category and defence fit best?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A05 Security Misconfiguration; use unsalted MD5.",
      "c": "Reflected XSS; use innerHTML for safe rendering.",
      "d": "A06 Vulnerable and Outdated Components; maintain an SBOM, scan dependencies and patch promptly."
    },
    "a": "d",
    "e": "A06 Vulnerable and Outdated Components; maintain an SBOM, scan dependencies and patch promptly."
  },
  {
    "id": "eh38",
    "unit": 4,
    "q": "A login page allows unlimited attempts and accepts weak passwords, and attackers try leaked username/password pairs from other breaches. Which category and controls fit best?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A05 Security Misconfiguration; use unsalted MD5.",
      "c": "A07 Identification and Authentication Failures; MFA, strong password policy and rate limiting/lockout.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "c",
    "e": "A07 Identification and Authentication Failures; MFA, strong password policy and rate limiting/lockout."
  },
  {
    "id": "eh39",
    "unit": 4,
    "q": "A CI/CD pipeline automatically downloads a dependency from an external repository and deploys it to production without checking its authenticity. If the repository is compromised, malicious code ships. Which category and control fit best?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A08 Software and Data Integrity Failures; verify signatures/checksums, use trusted repositories and secure the pipeline.",
      "c": "A05 Security Misconfiguration; use unsalted MD5.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "b",
    "e": "A08 Software and Data Integrity Failures; verify signatures/checksums, use trusted repositories and secure the pipeline."
  },
  {
    "id": "eh40",
    "unit": 4,
    "q": "Attackers repeatedly guess passwords against an online bank. Failed logins are not logged, nothing alerts the security team, and the only logs sit on the web server. Which category and fix fit best?",
    "o": {
      "a": "A09 Security Logging and Monitoring Failures; log authentication failures, centralise in a SIEM, alert, and protect log integrity.",
      "b": "A03 Injection; use only a WAF.",
      "c": "A05 Security Misconfiguration; use unsalted MD5.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "a",
    "e": "A09 Security Logging and Monitoring Failures; log authentication failures, centralise in a SIEM, alert, and protect log integrity."
  },
  {
    "id": "eh41",
    "unit": 4,
    "q": "A 'Fetch document from URL' feature accepts any URL. A tester submits an internal admin URL and the server returns the internal page. Which category and best defence?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A05 Security Misconfiguration; use unsalted MD5.",
      "c": "Reflected XSS; use innerHTML for safe rendering.",
      "d": "A10 SSRF; allow-list approved destinations, schemes and ports, validate redirects and apply deny-by-default egress rules."
    },
    "a": "d",
    "e": "A10 SSRF; allow-list approved destinations, schemes and ports, validate redirects and apply deny-by-default egress rules."
  },
  {
    "id": "eh42",
    "unit": 4,
    "q": "A comment box saves <script> content that then runs for every visitor who opens the page. Which XSS type is this, and why is it generally the most severe?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "A05 Security Misconfiguration; use unsalted MD5.",
      "c": "Stored (persistent) XSS; payload sits in the database and fires automatically for many users.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "c",
    "e": "Stored (persistent) XSS; payload sits in the database and fires automatically for many users."
  },
  {
    "id": "eh43",
    "unit": 4,
    "q": "Page JavaScript reads location.hash and writes it using element.innerHTML = data. The server never receives the payload. Which XSS type is this, and what is the best fix?",
    "o": {
      "a": "A03 Injection; use only a WAF.",
      "b": "DOM-based XSS; use textContent instead of innerHTML and sanitise or encode untrusted data.",
      "c": "A05 Security Misconfiguration; use unsalted MD5.",
      "d": "Reflected XSS; use innerHTML for safe rendering."
    },
    "a": "b",
    "e": "DOM-based XSS; use textContent instead of innerHTML and sanitise or encode untrusted data."
  },
  {
    "id": "eh44",
    "unit": 5,
    "q": "The client's CEO will read only one page of the penetration test report. Which Executive Summary serves them best?",
    "o": {
      "a": "A one-page, non-technical summary of findings, overall risk and top 3 recommendations.",
      "b": "Choose only by CVSS score; ignore business context.",
      "c": "Publish the issue publicly before notifying the owner.",
      "d": "Continue testing and investigate the live compromise independently."
    },
    "a": "a",
    "e": "A one-page, non-technical summary of findings, overall risk and top 3 recommendations."
  },
  {
    "id": "eh45",
    "unit": 5,
    "q": "A tester's finding lists only a title, severity rating and remediation advice. Which fields is it missing to be a complete technical finding?",
    "o": {
      "a": "Choose only by CVSS score; ignore business context.",
      "b": "Publish the issue publicly before notifying the owner.",
      "c": "Continue testing and investigate the live compromise independently.",
      "d": "Affected system/component, vulnerability description, proof of concept/evidence, business impact and a reference (CVE or CWE where applicable)."
    },
    "a": "d",
    "e": "Affected system/component, vulnerability description, proof of concept/evidence, business impact and a reference (CVE or CWE where applicable)."
  },
  {
    "id": "eh46",
    "unit": 5,
    "q": "A tester finds a backdoor reachable over the network that needs no authentication and no user interaction and gives full control (high confidentiality, integrity and availability impact). Which CVSS v3.1 rating fits?",
    "o": {
      "a": "Choose only by CVSS score; ignore business context.",
      "b": "Publish the issue publicly before notifying the owner.",
      "c": "Critical, about 9.8.",
      "d": "Continue testing and investigate the live compromise independently."
    },
    "a": "c",
    "e": "Critical, about 9.8."
  },
  {
    "id": "eh47",
    "unit": 5,
    "q": "A tester has 12 findings, but the client can fix only 3 this month. How should the 3 be chosen?",
    "o": {
      "a": "Choose only by CVSS score; ignore business context.",
      "b": "Rank by likelihood against impact, considering exploitability, exposure and business criticality as well as CVSS.",
      "c": "Publish the issue publicly before notifying the owner.",
      "d": "Continue testing and investigate the live compromise independently."
    },
    "a": "b",
    "e": "Rank by likelihood against impact, considering exploitability, exposure and business criticality as well as CVSS."
  },
  {
    "id": "eh48",
    "unit": 5,
    "q": "A researcher finds a flaw on a website that is listed on a bug bounty platform such as HackerOne or Bugcrowd. What is the most professional course of action?",
    "o": {
      "a": "Stay in scope, avoid accessing other people's data beyond proof, report privately through the programme, and allow time for a fix before disclosure.",
      "b": "Choose only by CVSS score; ignore business context.",
      "c": "Publish the issue publicly before notifying the owner.",
      "d": "Continue testing and investigate the live compromise independently."
    },
    "a": "a",
    "e": "Stay in scope, avoid accessing other people's data beyond proof, report privately through the programme, and allow time for a fix before disclosure."
  },
  {
    "id": "eh49",
    "unit": 5,
    "q": "During an authorised test, the tester finds clear signs that a real attacker has already compromised the client's server. What is the best action, and why does timing matter?",
    "o": {
      "a": "Choose only by CVSS score; ignore business context.",
      "b": "Publish the issue publicly before notifying the owner.",
      "c": "Continue testing and investigate the live compromise independently.",
      "d": "Pause and notify the client contact at once through the RoE escalation procedure; client may need to report to CERT-In within 6 hours."
    },
    "a": "d",
    "e": "Pause and notify the client contact at once through the RoE escalation procedure; client may need to report to CERT-In within 6 hours."
  },
  {
    "id": "eh50",
    "unit": 5,
    "q": "A student who has finished this course wants a certification path from entry level to advanced hands-on penetration testing. Which sequence matches the course pathway?",
    "o": {
      "a": "Choose only by CVSS score; ignore business context.",
      "b": "Publish the issue publicly before notifying the owner.",
      "c": "CompTIA Security+ (entry), then eJPT (beginner pentest), then OSCP (advanced); CEH is another recognised option.",
      "d": "Continue testing and investigate the live compromise independently."
    },
    "a": "c",
    "e": "CompTIA Security+ (entry), then eJPT (beginner pentest), then OSCP (advanced); CEH is another recognised option."
  }
];
