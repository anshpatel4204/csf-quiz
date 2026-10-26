/**
 * CSF Practice Test backend (Google Apps Script, bound to your Google Sheet)
 *
 * Sheets used (created by setup()):
 *   Roster  : Roll | Name | Email          (OPTIONAL: only used when REQUIRE_ROSTER = true)
 *   Results : one row per submitted attempt (download as Excel from here)
 *   Logins  : audit log of OTP requests and logins
 *
 * Web app actions: requestOtp, verifyOtp, submit
 */

// ---- settings you may change ----
var OTP_VALID_SECONDS = 600;      // OTP expires after 10 minutes
var MAX_OTP_REQUESTS = 3;         // OTP requests per roll number, and per email, per 10 minutes
var REQUIRE_ROSTER = false;       // false = students type their own email (OTP proves they own it)
                                  // true  = typed roll + name + email must match a row in the Roster sheet
var MAX_VERIFY_ATTEMPTS = 5;      // wrong OTP tries before a new OTP is needed
var SESSION_SECONDS = 10800;      // login stays valid for 3 hours
var MAX_ATTEMPTS = 0;             // test attempts per student (0 = unlimited)
var MAIL_SENDER_NAME = 'CSF Practice Test';

// ---- answer key (generated from questions.js, do not edit by hand) ----
var KEY = {q1:'c',q2:'b',q3:'d',q4:'a',q5:'c',q6:'b',q7:'a',q8:'d',q9:'b',q10:'c',q11:'a',q12:'d',q13:'b',q14:'c',q15:'a',q16:'d',q17:'c',q18:'b',q19:'a',q20:'c',q21:'d',q22:'a',q23:'b',q24:'c',q25:'d',q26:'b',q27:'b',q28:'c',q29:'d',q30:'b',q31:'a',q32:'c',q33:'d',q34:'c',q35:'a',q36:'d',q37:'b',q38:'d',q39:'a',q40:'c',q41:'b',q42:'c',q43:'a',q44:'b',q45:'c',q46:'d',q47:'a',q48:'c',q49:'b',q50:'d'};
var UNIT = {q1:1,q2:1,q3:1,q4:1,q5:1,q6:1,q7:1,q8:1,q9:1,q10:1,q11:1,q12:1,q13:1,q14:1,q15:1,q16:1,q17:1,q18:2,q19:2,q20:2,q21:2,q22:2,q23:2,q24:2,q25:2,q26:2,q27:2,q28:2,q29:2,q30:2,q31:2,q32:2,q33:2,q34:3,q35:3,q36:3,q37:3,q38:3,q39:3,q40:3,q41:3,q42:3,q43:3,q44:3,q45:3,q46:3,q47:3,q48:3,q49:3,q50:3};

var TOTAL = Object.keys(KEY).length;
var EH_KEY = {"eh1":"d","eh2":"c","eh3":"b","eh4":"a","eh5":"d","eh6":"c","eh7":"b","eh8":"a","eh9":"d","eh10":"c","eh11":"b","eh12":"a","eh13":"d","eh14":"c","eh15":"b","eh16":"a","eh17":"d","eh18":"c","eh19":"b","eh20":"a","eh21":"d","eh22":"c","eh23":"b","eh24":"a","eh25":"d","eh26":"c","eh27":"b","eh28":"a","eh29":"d","eh30":"c","eh31":"b","eh32":"a","eh33":"d","eh34":"c","eh35":"b","eh36":"a","eh37":"d","eh38":"c","eh39":"b","eh40":"a","eh41":"d","eh42":"c","eh43":"b","eh44":"a","eh45":"d","eh46":"c","eh47":"b","eh48":"a","eh49":"d","eh50":"c"};
var EH_UNIT = {"eh1":1,"eh2":1,"eh3":1,"eh4":1,"eh5":1,"eh6":1,"eh7":1,"eh8":1,"eh9":1,"eh10":1,"eh11":2,"eh12":2,"eh13":2,"eh14":2,"eh15":2,"eh16":2,"eh17":2,"eh18":2,"eh19":2,"eh20":2,"eh21":3,"eh22":3,"eh23":3,"eh24":3,"eh25":3,"eh26":3,"eh27":3,"eh28":3,"eh29":3,"eh30":3,"eh31":4,"eh32":4,"eh33":4,"eh34":4,"eh35":4,"eh36":4,"eh37":4,"eh38":4,"eh39":4,"eh40":4,"eh41":4,"eh42":4,"eh43":4,"eh44":5,"eh45":5,"eh46":5,"eh47":5,"eh48":5,"eh49":5,"eh50":5};
var EH_TOTAL = Object.keys(EH_KEY).length;

/* ======================= setup (run once) ======================= */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ensureSheet_(ss, 'Roster', ['Roll', 'Name', 'Email']);
  ensureSheet_(ss, 'Results', ['Timestamp', 'Roll', 'Name', 'Email', 'Attempt', 'Score', 'Total', 'Percent',
    'Unit 1 score', 'Unit 2 score', 'Unit 3 score', 'Time taken (sec)', 'Answers']);
  ensureSheet_(ss, 'Logins', ['Timestamp', 'Roll', 'Event']);
  ensureSheet_(ss, 'EH Results', ['Timestamp','Roll','Name','Email','Attempt','Score','Total','Percent','Unit 1 score','Unit 2 score','Unit 3 score','Unit 4 score','Unit 5 score','Time taken (sec)','Answers']);
  for (var u = 1; u <= 5; u++) ensureSheet_(ss, 'EH Unit ' + u + ' Results', ['Timestamp','Roll','Name','Email','Attempt','Score','Total','Percent','Time taken (sec)','Answers']);
  var roster = ss.getSheetByName('Roster');
  if (REQUIRE_ROSTER && roster.getLastRow() < 2) roster.appendRow(['23MCA001', 'Sample Student', 'sample@example.com']);
  // force the mail permission prompt now
  MailApp.getRemainingDailyQuota();
  SpreadsheetApp.getUi().alert('Setup done. Now deploy as a Web app.');
}
function ensureSheet_(ss, name, headers) {
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sh.getLastRow() === 0) { sh.appendRow(headers); sh.setFrozenRows(1); sh.getRange(1, 1, 1, headers.length).setFontWeight('bold'); }
  return sh;
}

/* ======================= web app entry ======================= */
function doGet() {
  return json_({ ok: true, service: 'CSF Practice Test API' });
}
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var req = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    switch (req.action) {
      case 'requestOtp': return json_(requestOtp_(req));
      case 'verifyOtp': return json_(verifyOtp_(req));
      case 'submit': return json_(submit_(req));
      default: return json_({ ok: false, error: 'Unknown action.' });
    }
  } catch (err) {
    return json_({ ok: false, error: 'Server busy or error. Please try again.' });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* ======================= helpers ======================= */
function norm_(s) { return String(s || '').trim().replace(/\s+/g, ' ').toLowerCase(); }
function sheet_(name) { return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name); }
function log_(roll, event) { sheet_('Logins').appendRow([new Date(), roll, event]); }
function hash_(roll, otp) {
  var salt = PropertiesService.getScriptProperties().getProperty('SALT');
  if (!salt) { salt = Utilities.getUuid(); PropertiesService.getScriptProperties().setProperty('SALT', salt); }
  var d = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, norm_(roll) + ':' + otp + ':' + salt);
  return Utilities.base64Encode(d);
}
function findStudent_(roll, name) {
  var rows = sheet_('Roster').getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (norm_(rows[i][0]) === norm_(roll) && norm_(rows[i][1]) === norm_(name) && String(rows[i][2]).indexOf('@') > 0) {
      return { roll: String(rows[i][0]).trim(), name: String(rows[i][1]).trim(), email: String(rows[i][2]).trim() };
    }
  }
  return null;
}
function mask_(email) {
  var p = email.split('@'); return p[0].charAt(0) + '***@' + p[1];
}

/* ======================= OTP ======================= */
function clean_(s) { return String(s || '').trim().replace(/\s+/g, ' '); }
function validEmail_(e) { return e.length <= 120 && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(e); }
function ident_(roll, email) { return norm_(roll) + '|' + norm_(email); }

// Returns {roll, name, email} to use for this student, or {error: '...'}
function resolveStudent_(roll, name, email) {
  if (!roll || !name) return { error: 'Enter roll number and name.' };
  if (roll.length > 30 || name.length > 80) return { error: 'Roll number or name is too long.' };
  if (!validEmail_(email)) return { error: 'Enter a valid email address.' };
  if (REQUIRE_ROSTER) {
    var st = findStudent_(roll, name);
    if (!st || norm_(st.email) !== norm_(email)) return { error: 'Roll number, name and email do not match the class list.' };
    return st;
  }
  return { roll: roll.toUpperCase(), name: name, email: email.toLowerCase() };
}

function requestOtp_(req) {
  var cache = CacheService.getScriptCache();
  var roll = clean_(req.roll), name = clean_(req.name), email = clean_(req.email);
 var st = resolveStudent_(roll, name, email);
if (st.error) {
  log_(roll, 'OTP_REJECTED');
  return { ok: false, error: st.error };
}

if (isDisposableEmail_(st.email)) {
  log_(st.roll, 'DISPOSABLE_EMAIL_REJECTED');
  return {
    ok: false,
    error: 'Temporary email services are not allowed. Use your permanent email address.'
  };
}

  var rk = 'req_r_' + norm_(st.roll), ek = 'req_e_' + norm_(st.email);
  var rc = parseInt(cache.get(rk) || '0', 10), ec = parseInt(cache.get(ek) || '0', 10);
  if (rc >= MAX_OTP_REQUESTS || ec >= MAX_OTP_REQUESTS) {
    log_(st.roll, 'OTP_RATE_LIMITED');
    return { ok: false, error: 'Too many OTP requests. Please wait 10 minutes and try again.' };
  }
  if (MailApp.getRemainingDailyQuota() < 1) {
    log_(st.roll, 'MAIL_QUOTA_EXHAUSTED');
    return { ok: false, error: 'The daily email limit has been reached. Please try again tomorrow.' };
  }

  var id = ident_(st.roll, st.email);
  var otp = String(Math.floor(100000 + Math.random() * 900000));
  cache.put('otp_' + id, hash_(id, otp), OTP_VALID_SECONDS);
  cache.remove('att_' + id);
  cache.put(rk, String(rc + 1), 600);
  cache.put(ek, String(ec + 1), 600);

  MailApp.sendEmail({
    to: st.email,
    subject: 'Your Practice Test OTP: ' + otp,
    name: MAIL_SENDER_NAME,
    htmlBody: '<p>Hi ' + st.name.replace(/[<>&]/g, '') + ',</p>' +
      '<p>Your one-time password for the CSF Practice Test is:</p>' +
      '<p style="font-size:28px;font-weight:bold;letter-spacing:6px">' + otp + '</p>' +
      '<p>It is valid for ' + Math.round(OTP_VALID_SECONDS / 60) + ' minutes. If you did not request it, ignore this email.</p>'
  });
  log_(st.roll, 'OTP_SENT');
  return { ok: true, maskedEmail: mask_(st.email) };
}

function verifyOtp_(req) {
  var cache = CacheService.getScriptCache();
  var roll = clean_(req.roll), name = clean_(req.name), email = clean_(req.email), otp = String(req.otp || '').trim();
  if (!/^\d{6}$/.test(otp)) return { ok: false, error: 'Enter the 6-digit OTP.' };
  var st = resolveStudent_(roll, name, email);
  if (st.error) return { ok: false, error: st.error };

  var id = ident_(st.roll, st.email), ak = 'att_' + id, tries = parseInt(cache.get(ak) || '0', 10);
  var stored = cache.get('otp_' + id);
  if (!stored) return { ok: false, error: 'OTP expired or not requested. Please request a new OTP.' };
  if (tries >= MAX_VERIFY_ATTEMPTS) { cache.remove('otp_' + id); log_(st.roll, 'OTP_TOO_MANY_TRIES'); return { ok: false, error: 'Too many wrong attempts. Please request a new OTP.' }; }

  if (stored !== hash_(id, otp)) { cache.put(ak, String(tries + 1), OTP_VALID_SECONDS); log_(st.roll, 'OTP_WRONG'); return { ok: false, error: 'Incorrect OTP. Try again.' }; }

  cache.remove('otp_' + id); cache.remove(ak);
  var token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  cache.put('tok_' + token, JSON.stringify(st), Math.min(SESSION_SECONDS, 21600));
  log_(st.roll, 'LOGIN_OK');
  return { ok: true, token: token, name: st.name };
}

/* ======================= submit ======================= */
function submit_(req) {
  var cache = CacheService.getScriptCache();
  var raw = cache.get('tok_' + String(req.token || ''));
  if (!raw) return { ok: false, error: 'Your session expired. Please sign in again.' };
  var st = JSON.parse(raw), subject = String(req.subject || 'CSF').toUpperCase();
  if (subject !== 'EH') subject = 'CSF';
  var key = subject === 'EH' ? EH_KEY : KEY;
  var unitMap = subject === 'EH' ? EH_UNIT : UNIT;
  var total = Object.keys(key).length;
  var results = sheet_(subject === 'EH' ? 'EH Results' : 'Results');
  var prev = 0;
  if (results.getLastRow() > 1) {
    var rolls = results.getRange(2, 2, results.getLastRow() - 1, 1).getValues();
    for (var i = 0; i < rolls.length; i++) if (norm_(rolls[i][0]) === norm_(st.roll)) prev++;
  }
  if (MAX_ATTEMPTS > 0 && prev >= MAX_ATTEMPTS) return { ok: false, error: 'You have used all ' + MAX_ATTEMPTS + ' allowed attempt(s).' };
  var ans = req.answers || {}, score = 0, per = {}, packed = [];
  var unitCount = subject === 'EH' ? 5 : 3;
  for (var u = 1; u <= unitCount; u++) per[u] = 0;
  Object.keys(key).forEach(function(id) {
    var given = String(ans[id] || '').toLowerCase();
    if (given && 'abcd'.indexOf(given) === -1) given = '';
    if (given === key[id]) { score++; per[unitMap[id]]++; }
    packed.push(id + ':' + (given || '-'));
  });
  var secs = Math.max(0, Math.min(parseInt(req.secondsTaken, 10) || 0, 86400));
  var attempt = prev + 1, pct = Math.round(score / total * 1000) / 10, stamp = new Date();
  if (subject === 'EH') {
    results.appendRow([stamp,st.roll,st.name,st.email,attempt,score,total,pct,per[1],per[2],per[3],per[4],per[5],secs,packed.join(',')]);
    for (var u2 = 1; u2 <= 5; u2++) {
      var unitSheet = sheet_('EH Unit ' + u2 + ' Results');
      var unitIds = Object.keys(key).filter(function(id){ return unitMap[id] === u2; });
      var unitScore = per[u2] || 0;
      unitSheet.appendRow([stamp,st.roll,st.name,st.email,attempt,unitScore,unitIds.length,unitIds.length ? Math.round(unitScore / unitIds.length * 1000) / 10 : 0,secs,unitIds.map(function(id){return id+':'+(String(ans[id]||'-').toLowerCase());}).join(',')]);
    }
  } else {
    results.appendRow([stamp,st.roll,st.name,st.email,attempt,score,total,pct,per[1],per[2],per[3],secs,packed.join(',')]);
  }
  log_(st.roll, subject + '_SUBMITTED_' + score + '/' + total);
  return { ok:true, score:score, total:total, perUnit:per, attempt:attempt };
}

/**
 * Disposable email protection.
 * Server-side validation.
 */
function isDisposableEmail_(email) {
  var normalized = String(email || "").trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return true;
  }

  var domain = normalized.split("@").pop();

  var blockedDomains = [
    "yopmail.com",
    "yopmail.fr",
    "guerrillamail.com",
    "guerrillamail.net",
    "sharklasers.com",
    "grr.la",
    "mailinator.com",
    "10minutemail.com",
    "10minutemail.net",
    "temp-mail.org",
    "temp-mail.io",
    "tempmail.com",
    "tempmail.net",
    "throwawaymail.com",
    "getnada.com",
    "emailondeck.com",
    "dispostable.com",
    "fakeinbox.com",
    "maildrop.cc",
    "mohmal.com",
    "burnermail.io",
    "inboxkitten.com",
    "trashmail.com",
    "trashmail.me",
    "mintemail.com",
    "mytemp.email"
  ];

  return blockedDomains.indexOf(domain) !== -1;
}
