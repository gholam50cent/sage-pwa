// ========================= TRANSLATIONS =========================
const STR = {
  app_name: ["Sayuri", "سایوری"],
  tab_calendar: ["Calendar", "تقویم"],
  tab_history: ["History", "تاریخچه"],
  tab_insights: ["Insights", "آمار"],
  active: ["NOW", "فعال"],
  cycle_day: ["DAY", "روز سیکل"],
  tap_below: ["tap below to begin", "برای شروع، دکمه را بزنید"],
  start_period: ["Start", "شروع پریود"],
  end_period: ["End", "پایان پریود"],
  phase_menstrual: ["Your Moon", "قاعدگی"],
  phase_follicular: ["Renewal", "فولیکولار"],
  phase_ovulation: ["Bloom", "تخمک‌گذاری"],
  phase_luteal: ["Serenity", "لوتئال"],
  no_records: ["nothing yet", "هنوز چیزی ثبت نشده"],
  tap_plus: ["tap + to start", "روی + بزنید تا اضافه کنید"],
  records: ["records", "مورد"],
  record_single: ["record", "مورد"],
  ongoing: ["ongoing", "در حال انجام"],
  days: ["days", "روز"],
  ended: ["ended", "پایان"],
  delete_record: ["Delete", "حذف رکورد"],
  delete_confirm: ["this cannot be undone. are you sure?", "این عمل قابل بازگشت نیست. مطمئن هستید؟"],
  delete: ["Delete", "حذف"],
  cancel: ["Cancel", "انصراف"],
  new_record: ["New Entry", "افزودن رکورد"],
  edit_record: ["Edit", "ویرایش رکورد"],
  start_date: ["START", "تاریخ شروع"],
  end_date: ["END", "تاریخ پایان"],
  notes: ["Notes", "یادداشت"],
  add_notes: ["add notes...", "یادداشت اضافه کنید..."],
  save: ["Save", "ذخیره"],
  clear: ["Clear", "حذف"],
  next_period: ["NEXT MOON", "پریود بعدی"],
  in_days: ["in", "تا"],
  today: ["today", "امروز"],
  days_ago: ["days ago", "روز پیش"],
  stat_records: ["Records", "تعداد"],
  stat_avg_cycle: ["Avg Cycle", "میانگین سیکل"],
  stat_avg_duration: ["Avg Duration", "میانگین مدت"],
  stat_completed: ["COMPLETED", "تکمیل شده"],
  high: ["High", "بالا"],
  medium_acc: ["Medium", "متوسط"],
  low: ["Low", "پایین"],
  very_low: ["Very Low", "بسیار پایین"],
  day_details: ["Your Day", "جزئیات روز"],
  period_day: ["Moon Day", "روز پریود"],
  flow: ["FLOW", "شدت خونریزی"],
  flow_none: ["None", "ندارد"],
  flow_light: ["Light", "کم"],
  flow_medium: ["Medium", "متوسط"],
  flow_heavy: ["Heavy", "زیاد"],
  pain: ["PAIN", "شدت درد"],
  mood: ["MOOD", "حال و هوا"],
  mood_great: ["Great", "عالی"],
  mood_good: ["Good", "خوب"],
  mood_okay: ["Okay", "معمولی"],
  mood_bad: ["Bad", "بد"],
  mood_awful: ["Awful", "خیلی بد"],
  symptoms: ["SYMPTOMS", "علائم"],
  sym_headache: ["Headache", "سردرد"],
  sym_cramps: ["Cramps", "گرفتگی"],
  sym_fatigue: ["Fatigue", "خستگی"],
  sym_bloating: ["Bloating", "نفخ"],
  sym_nausea: ["Nausea", "تهوع"],
  sym_backache: ["Backache", "کمردرد"],
  sym_breast: ["Tenderness", "حساسیت سینه"],
  sym_acne: ["Acne", "جوش"],
  sym_insomnia: ["Insomnia", "بی‌خوابی"],
  sym_cravings: ["Cravings", "هوس غذا"],
  settings: ["Your Space", "تنظیمات"],
  appearance: ["APPEARANCE", "ظاهر"],
  theme_auto: ["Auto", "خودکار"],
  theme_light: ["Light", "روشن"],
  theme_dark: ["Dark", "تاریک"],
  language: ["LANGUAGE", "زبان"],
  lang_auto: ["Auto", "خودکار"],
  lang_english: ["English", "انگلیسی"],
  lang_persian: ["فارسی", "فارسی"],
  done: ["Done", "تایید"],
  backup_restore: ["BACKUP", "بکاپ و بازیابی"],
  create_backup: ["Download", "دانلود بکاپ"],
  create_backup_desc: ["Save your data", "ذخیره اطلاعات به‌صورت فایل"],
  restore_backup: ["Restore", "بازیابی از فایل"],
  restore_backup_desc: ["Choose a file", "انتخاب فایل بکاپ"],
  restore_confirm_title: ["Restore data?", "بازیابی اطلاعات؟"],
  restore_confirm_desc: ["This will replace all your data.", "این عمل اطلاعات فعلی را جایگزین می‌کند."],
  restore_success: ["Backup restored", "بازیابی موفق بود"],
  restore_failed: ["Restore failed: invalid file", "بازیابی ناموفق: فرمت فایل نامعتبر"],
  cycle_day_short: ["Day", "روز"],
  symptom_overlap_title: ["CONNECTION", "هم‌پوشانی علائم"],
  predictability_title: ["CONSISTENCY", "پیش‌بینی‌پذیری سیکل"],
  less_predictable: ["Variable", "متغیر"],
  more_predictable: ["Steady", "ثابت"],
  cycles: ["cycles", "سیکل"],
  install_app: ["Install App", "نصب اپ"],
  fertility_window: ["YOUR WINDOW", "پنجره باروری"],
  ovulation_day: ["YOUR BLOOM", "روز تخمک‌گذاری"],
  fertile_days: ["fertile days", "روزهای باروری"],
  date_error: ["End date must be after start", "تاریخ پایان باید بعد از شروع باشد"],
  duration_error: ["Max 14 days", "مدت پریود نباید بیشتر از ۱۴ روز باشد"],
  symptom_added: ["Saved", "علامت به لاگ امروز اضافه شد"],
  change_pin: ["Change PIN", "تغییر PIN"],
  set_pin: ["Set PIN", "تنظیم PIN"],
  set_pin_desc: ["Protect your app with a PIN", "اپ را با پین محافظت کنید"],
  pin_set_title: ["Create your PIN", "پین خود را بسازید"],
  pin_set_desc: ["Choose a 4-digit PIN", "یک پین ۴ رقمی انتخاب کنید"],
  pin_confirm_title: ["Confirm your PIN", "پین خود را تأیید کنید"],
  pin_verify_title: ["Enter your PIN", "پین خود را وارد کنید"],
  pin_enter_current: ["Current PIN", "پین فعلی"],
  pin_enter_new: ["New PIN", "پین جدید"],
  pin_confirm_new: ["Confirm new PIN", "تأیید پین جدید"],
  pin_mismatch: ["PINs don't match", "پین‌ها یکسان نیستند"],
  pin_wrong: ["Wrong PIN", "پین اشتباه است"],
  pin_changed: ["PIN updated", "پین تغییر کرد"],
  onboarding_next: ["Next", "بعدی"],
  onboarding_start: ["Begin", "شروع"],
  cal_type: ["CALENDAR", "نوع تقویم"],
  cal_jalali: ["Jalali", "شمسی"],
  cal_gregorian: ["Gregorian", "میلادی"],
  for_you: ["For You", "برای تو"],
  edit_message: ["Personal Message", "پیام شخصی"],
  edit_message_desc: ["A hidden message for her", "یک پیام مخفی"],
  message_placeholder: ["Write something from your heart...", "از قلبت بنویس..."],
  install_desc_ios: ["Tap Share then Add to Home Screen", "Share بزنید و Add to Home Screen را انتخاب کنید"],
  install_desc_android: ["Add to home screen", "اضافه به صفحه اصلی"]
};


let currentLang = 0;
function t(key) { return (STR[key] || [key, key])[currentLang]; }
function numStr(n) {
  if (currentLang === 0) return String(n);
  var map = {'0':'۰','1':'۱','2':'۲','3':'۳','4':'۴','5':'۵','6':'۶','7':'۷','8':'۸','9':'۹'};
  return String(n).split('').map(function(c) { return map[c] !== undefined ? map[c] : c; }).join('');
}

var MONTH_NAMES_FA = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
var MONTH_NAMES_EN = ["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"];
var MONTH_GREG_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// ========================= JALALI CALENDAR =========================
function gregorianToJalali(gy, gm, gd) {
  var g_d_m = [0,31,59,90,120,151,181,212,243,273,304,334];
  var jy = (gy <= 1600) ? 0 : 979;
  gy -= (gy <= 1600) ? 621 : 1600;
  var gy2 = (gm > 2) ? (gy + 1) : gy;
  var days = (365*gy) + (Math.floor((gy2+3)/4)) - (Math.floor((gy2+99)/100)) + (Math.floor((gy2+399)/400)) - 80 + gd + g_d_m[gm-1];
  jy += 33*Math.floor(days/12053);
  days %= 12053;
  jy += 4*Math.floor(days/1461);
  days %= 1461;
  if (days > 365) { jy += Math.floor((days-1)/365); days = (days-1)%365; }
  var jm, jd;
  if (days < 186) { jm = 1 + Math.floor(days/31); jd = 1 + (days%31); }
  else { jm = 7 + Math.floor((days-186)/30); jd = 1 + ((days-186)%30); }
  return { year: jy, month: jm, day: jd };
}
function formatJalali(millis) {
  var d = new Date(millis);
  var j = gregorianToJalali(d.getFullYear(), d.getMonth()+1, d.getDate());
  var mname = currentLang === 1 ? MONTH_NAMES_FA[j.month-1] : MONTH_NAMES_EN[j.month-1];
  return numStr(j.day) + ' ' + mname + ' ' + numStr(j.year);
}
function formatJalaliShort(millis) {
  var d = new Date(millis);
  var j = gregorianToJalali(d.getFullYear(), d.getMonth()+1, d.getDate());
  return numStr(j.year) + '.' + numStr(String(j.month).padStart(2,'0')) + '.' + numStr(String(j.day).padStart(2,'0'));
}
function formatGregorian(millis) {
  var d = new Date(millis);
  return numStr(d.getDate()) + ' ' + MONTH_GREG_EN[d.getMonth()] + ' ' + numStr(d.getFullYear());
}
function formatGregorianShort(millis) {
  var d = new Date(millis);
  return numStr(d.getFullYear()) + '.' + numStr(String(d.getMonth()+1).padStart(2,'0')) + '.' + numStr(String(d.getDate()).padStart(2,'0'));
}
function formatDate(millis) {
  return (Storage.getSettings().calendarType || 0) === 1 ? formatGregorian(millis) : formatJalali(millis);
}
function formatDateShort(millis) {
  return (Storage.getSettings().calendarType || 0) === 1 ? formatGregorianShort(millis) : formatJalaliShort(millis);
}

// ========================= DATE UTILITIES =========================
var DAY_MS = 24*60*60*1000;
function todayMillis() {
  var d = new Date();
  d.setHours(0,0,0,0);
  return d.getTime();
}
function dayToMillis(year, month, day) {
  var d = new Date(year, month, day, 0, 0, 0, 0);
  return d.getTime();
}

// ========================= STORAGE =========================
var Storage = {
  _safe: function(key, fallback) {
    try {
      var val = localStorage.getItem(key);
      if (val === null) return fallback;
      return JSON.parse(val);
    }
    catch(e) { return fallback; }
  },
  _save: function(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); return true; }
    catch(e) { return false; }
  },
  loadRecords: function() { return this._safe('sage_records', []); },
  saveRecords: function(records) { return this._save('sage_records', records); },
  loadDayLogs: function() { return this._safe('sage_daylogs', {}); },
  saveDayLogs: function(logs) { return this._save('sage_daylogs', logs); },
  getSettings: function() { return this._safe('sage_settings', {}); },
  saveSettings: function(s) { return this._save('sage_settings', s); },
  getHandledSuggestions: function() { return this._safe('sage_suggestions', {}); },
  saveHandledSuggestions: function(obj) { return this._save('sage_suggestions', obj); }
};

// ========================= SIMPLE HASH =========================
function simpleHash(str) {
  var hash = 5381;
  for (var i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & 0x7fffffff;
  }
  return hash;
}

// ========================= HAPTIC =========================
function haptic(light) {
  try { if (navigator.vibrate) navigator.vibrate(light ? 8 : 20); } catch(e) {}
}

// ========================= CYCLE ANALYSIS =========================
function computeWeightedAvg(cycles) {
  if (cycles.length === 0) return null;
  if (cycles.length === 1) return cycles[0];
  var recent = cycles.slice(-6);
  var weightedSum = 0, weightSum = 0;
  recent.forEach(function(c, i) { var w = i+1; weightedSum += c*w; weightSum += w; });
  return Math.round(weightedSum / weightSum);
}
function computeRegularityScore(stdDev, count) {
  if (count < 2) return 0;
  if (stdDev < 1) return 100;
  if (stdDev < 2) return 90;
  if (stdDev < 3) return 80;
  if (stdDev < 4) return 70;
  if (stdDev < 5) return 55;
  if (stdDev < 7) return 40;
  if (stdDev < 10) return 25;
  return 10;
}
function computeAccuracy(count, stdDev) {
  if (count < 2) return 0;
  if (count < 3) return 1;
  if (count < 6 && stdDev > 4) return 1;
  if (count >= 3 && stdDev < 2) return 3;
  if (count >= 6 && stdDev < 4) return 3;
  if (stdDev < 5) return 2;
  return 1;
}
function analyzeCycle(records, dayLogs) {
  var sorted = records.slice().sort(function(a,b) { return a.start - b.start; });
  var completed = records.filter(function(r) { return r.end != null; });

  var cycleLengths = [];
  for (var i = 0; i < sorted.length - 1; i++) {
    var diff = Math.round((sorted[i+1].start - sorted[i].start) / DAY_MS);
    if (diff >= 15 && diff <= 50) cycleLengths.push(diff);
  }
  var periodLengths = completed.map(function(r) { return Math.round((r.end - r.start)/DAY_MS) + 1; });

  var avgCycle = computeWeightedAvg(cycleLengths);
  var recentPeriods = periodLengths.slice(-6);
  var avgPeriod = periodLengths.length ? Math.round(recentPeriods.reduce(function(a,b){return a+b;},0)/recentPeriods.length) : null;

  var stdDev = 0;
  if (cycleLengths.length >= 2 && avgCycle != null) {
    var variance = cycleLengths.reduce(function(s,c) { return s + (c-avgCycle)*(c-avgCycle); }, 0) / cycleLengths.length;
    stdDev = Math.sqrt(variance);
  }
  var regularityScore = computeRegularityScore(stdDev, cycleLengths.length);

  var predictedNext = null, ovulationDay = null, fertilityStart = null, fertilityEnd = null;
  if (avgCycle != null && sorted.length > 0) {
    var lastStart = sorted[sorted.length-1].start;
    predictedNext = lastStart + avgCycle*DAY_MS;
    ovulationDay = predictedNext - 14*DAY_MS;
    fertilityStart = ovulationDay - 5*DAY_MS;
    fertilityEnd = ovulationDay;
  }
  var accuracyLevel = computeAccuracy(cycleLengths.length, stdDev);

  var currentPhase = 'unknown', dayInCycle = null;
  if (sorted.length > 0 && avgCycle != null) {
    var last = sorted[sorted.length-1];
    var today = todayMillis();
    if (last.end == null) {
      dayInCycle = Math.round((today - last.start)/DAY_MS) + 1;
      currentPhase = 'menstrual';
    } else {
      var daysSince = Math.round((today - last.start)/DAY_MS) + 1;
      var periodLen = Math.round((last.end - last.start)/DAY_MS) + 1;
      dayInCycle = daysSince;
      if (daysSince <= periodLen) currentPhase = 'menstrual';
      else if (daysSince < avgCycle - 16) currentPhase = 'follicular';
      else if (daysSince <= avgCycle - 12) currentPhase = 'ovulation';
      else currentPhase = 'luteal';
    }
  }

  return {
    avgCycle: avgCycle, avgPeriod: avgPeriod, regularityScore: regularityScore, predictedNext: predictedNext,
    ovulationDay: ovulationDay, fertilityStart: fertilityStart, fertilityEnd: fertilityEnd, accuracyLevel: accuracyLevel, stdDev: stdDev,
    currentPhase: currentPhase, dayInCycle: dayInCycle, cycleLengths: cycleLengths, periodLengths: periodLengths
  };
}

// ========================= PATTERN DETECTION =========================
function detectSymptomPatterns(records, dayLogs, minRate, minCycles) {
  minRate = minRate || 0.7;
  minCycles = minCycles || 3;
  var sorted = records.slice().sort(function(a,b) { return a.start - b.start; });
  if (sorted.length < minCycles) return [];

  var symptomDayCounts = {};
  var cyclesAnalyzed = 0;

  for (var i = 0; i < sorted.length - 1; i++) {
    var cycleStart = sorted[i].start;
    var cycleEnd = sorted[i+1].start;
    var cycleLength = Math.round((cycleEnd - cycleStart)/DAY_MS);
    if (cycleLength < 15 || cycleLength > 50) continue;
    cyclesAnalyzed++;
    for (var dayOffset = 0; dayOffset < cycleLength; dayOffset++) {
      var dateMillis = cycleStart + dayOffset*DAY_MS;
      var log = dayLogs[dateMillis];
      if (!log) continue;
      var cycleDay = dayOffset + 1;
      (log.symptoms || []).forEach(function(sym) {
        if (!symptomDayCounts[sym]) symptomDayCounts[sym] = {};
        symptomDayCounts[sym][cycleDay] = (symptomDayCounts[sym][cycleDay] || 0) + 1;
      });
    }
  }
  if (cyclesAnalyzed < minCycles) return [];

  var patterns = [];
  Object.keys(symptomDayCounts).forEach(function(sym) {
    Object.keys(symptomDayCounts[sym]).forEach(function(day) {
      var count = symptomDayCounts[sym][day];
      var rate = count / cyclesAnalyzed;
      if (rate >= minRate) {
        patterns.push({ symptomKey: sym, cycleDay: parseInt(day), rate: rate, count: count, total: cyclesAnalyzed });
      }
    });
  });
  return patterns.sort(function(a,b) { return b.rate - a.rate; });
}

function computeSymptomCorrelations(dayLogs) {
  var allSymptoms = new Set();
  Object.values(dayLogs).forEach(function(log) { (log.symptoms || []).forEach(function(s) { allSymptoms.add(s); }); });
  var keys = Array.from(allSymptoms);
  if (keys.length < 2) return [];

  var correlations = [];
  for (var i = 0; i < keys.length; i++) {
    for (var j = i+1; j < keys.length; j++) {
      var a = keys[i], b = keys[j];
      var daysWithA = Object.values(dayLogs).filter(function(l) { return (l.symptoms||[]).includes(a); }).length;
      var daysWithBoth = Object.values(dayLogs).filter(function(l) { return (l.symptoms||[]).includes(a) && (l.symptoms||[]).includes(b); }).length;
      if (daysWithA === 0) continue;
      correlations.push({ a: a, b: b, rate: daysWithBoth/daysWithA });
    }
  }
  return correlations.sort(function(x,y) { return y.rate - x.rate; });
}

function computePredictabilityTimeline(records, dayLogs) {
  var sorted = records.slice().sort(function(a,b) { return a.start - b.start; });
  if (sorted.length < 3) return [];

  var avgCycleLength = 28;
  var lengths = [];
  for (var i = 0; i < sorted.length-1; i++) {
    var diff = Math.round((sorted[i+1].start - sorted[i].start)/DAY_MS);
    if (diff >= 15 && diff <= 50) lengths.push(diff);
  }
  if (lengths.length) avgCycleLength = Math.round(lengths.reduce(function(a,b){return a+b;},0)/lengths.length);

  var flowByDay = {}, symptomSetByDay = {};
  for (var ci = 0; ci < sorted.length-1; ci++) {
    var cStart = sorted[ci].start;
    var cEnd = sorted[ci+1].start;
    var cLen = Math.round((cEnd - cStart)/DAY_MS);
    if (cLen < 15 || cLen > 50) continue;
    for (var dOff = 0; dOff < Math.min(cLen, avgCycleLength); dOff++) {
      var dMillis = cStart + dOff*DAY_MS;
      var dLog = dayLogs[dMillis];
      var cd = dOff + 1;
      if (dLog) {
        if (!flowByDay[cd]) flowByDay[cd] = [];
        flowByDay[cd].push(dLog.flow || 0);
        if (!symptomSetByDay[cd]) symptomSetByDay[cd] = [];
        symptomSetByDay[cd].push(new Set(dLog.symptoms||[]));
      }
    }
  }

  var points = [];
  for (var day = 1; day <= avgCycleLength; day++) {
    var flows = flowByDay[day];
    if (!flows || flows.length < 2) { points.push({ day: day, score: 0 }); continue; }
    var mean = flows.reduce(function(a,b){return a+b;},0)/flows.length;
    var v = flows.reduce(function(s,f) { return s + (f-mean)*(f-mean); }, 0)/flows.length;
    var sd = Math.sqrt(v);
    var flowCons = Math.max(0, Math.min(1, 1 - sd/1.5));

    var sets = symptomSetByDay[day];
    var symCons = 0.5;
    if (sets && sets.length >= 2) {
      var total = 0, pairs = 0;
      for (var sa = 0; sa < sets.length; sa++) {
        for (var sb = sa+1; sb < sets.length; sb++) {
          var union = new Set([].concat(Array.from(sets[sa]), Array.from(sets[sb]))).size;
          var intersection = Array.from(sets[sa]).filter(function(x) { return sets[sb].has(x); }).length;
          total += union === 0 ? 1 : intersection/union;
          pairs++;
        }
      }
      if (pairs > 0) symCons = total/pairs;
    }
    var score = Math.max(0, Math.min(1, flowCons*0.6 + symCons*0.4));
    points.push({ day: day, score: score });
  }
  return points;
}

// ========================= SUGGESTION MANAGEMENT =========================
function suggestionId(p) { return p.symptomKey + '_day' + p.cycleDay; }
function isHandled(id) { return Storage.getHandledSuggestions()[id] !== undefined; }
function markHandled(id, accepted) {
  var all = Storage.getHandledSuggestions();
  all[id] = accepted;
  Storage.saveHandledSuggestions(all);
}

// ========================= PLATFORM DETECTION =========================
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
var isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

// ========================= APP STATE =========================
var state = {
  records: Storage.loadRecords(),
  dayLogs: Storage.loadDayLogs(),
  currentTab: 0,
  currentMonth: new Date(),
  themeMode: Storage.getSettings().themeMode || 0,
  langMode: Storage.getSettings().langMode || 0,
  modal: null,
  editingRecord: null,
  selectedDay: null,
  _confirmMessage: '',
  _confirmCallback: null,
  _tempFlow: 0,
  _tempPain: 0,
  _tempMood: -1,
  _tempSymptoms: null,
  _tempNote: '',
  _tempStart: null,
  _tempEnd: null,
  _tempNotes: '',
  _tempSecretMsg: '',
  _lastRenderedTab: -1
};

// ========================= THEME & LANGUAGE =========================
function applyThemeAndLang() {
  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = state.themeMode === 2 || (state.themeMode === 0 && systemDark);
  document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

  var systemLang = navigator.language.startsWith('fa') ? 1 : 0;
  currentLang = state.langMode === 1 ? 0 : state.langMode === 2 ? 1 : systemLang;
  document.documentElement.lang = currentLang === 1 ? 'fa' : 'en';
  document.documentElement.dir = currentLang === 1 ? 'rtl' : 'ltr';
}

function saveAndRefresh() {
  Storage.saveRecords(state.records);
  render();
}

function getActivePeriod() {
  return state.records.find(function(r) { return r.end == null; }) || null;
}

// ========================= PIN SYSTEM =========================
var pinState = {
  mode: null,
  currentPin: '',
  pendingPin: ''
};

function showPinOverlay(mode) {
  pinState.mode = mode;
  pinState.currentPin = '';
  pinState.pendingPin = '';
  renderPinOverlay();
}

function removePinOverlay() {
  var el = document.querySelector('.pin-overlay');
  if (el) el.remove();
}

function renderPinOverlay() {
  removePinOverlay();
  var mode = pinState.mode;
  var title = '';
  var subtitle = '';
  if (mode === 'set') { title = t('pin_set_title'); subtitle = t('pin_set_desc'); }
  else if (mode === 'set_confirm') { title = t('pin_confirm_title'); subtitle = ''; }
  else if (mode === 'verify') { title = t('pin_verify_title'); subtitle = ''; }
  else if (mode === 'change_current') { title = t('pin_enter_current'); subtitle = ''; }
  else if (mode === 'change_new') { title = t('pin_enter_new'); subtitle = ''; }
  else if (mode === 'change_confirm') { title = t('pin_confirm_new'); subtitle = ''; }

  var dotsHtml = '';
  for (var i = 0; i < 4; i++) {
    var filled = i < pinState.currentPin.length ? ' filled' : '';
    dotsHtml += '<div class="pin-dot' + filled + '"></div>';
  }

  var keysHtml = '';
  var keyLabels = ['1','2','3','4','5','6','7','8','9','','0','del'];
  for (var k = 0; k < keyLabels.length; k++) {
    var label = keyLabels[k];
    if (label === '') {
      keysHtml += '<div class="pin-key pin-key-empty"></div>';
    } else if (label === 'del') {
      keysHtml += '<div class="pin-key pin-key-del" onclick="handlePinBackspace()">&#9003;</div>';
    } else {
      keysHtml += '<div class="pin-key" onclick="handlePinKey(\'' + label + '\')">' + label + '</div>';
    }
  }

  var html = '<div class="pin-overlay">' +
    '<div class="pin-card">' +
      '<div class="pin-title">' + title + '</div>' +
      (subtitle ? '<div class="pin-subtitle">' + subtitle + '</div>' : '') +
      '<div class="pin-dots">' + dotsHtml + '</div>' +
      '<div class="pin-keypad">' + keysHtml + '</div>' +
    '</div>' +
  '</div>';
  document.body.insertAdjacentHTML('beforeend', html);
}

function handlePinKey(key) {
  if (pinState.currentPin.length >= 4) return;
  pinState.currentPin += key;
  haptic(true);
  renderPinOverlay();
  if (pinState.currentPin.length === 4) {
    setTimeout(function() { processPinEntry(); }, 200);
  }
}

function handlePinBackspace() {
  if (pinState.currentPin.length === 0) return;
  pinState.currentPin = pinState.currentPin.slice(0, -1);
  renderPinOverlay();
}

function shakePinDots() {
  var dots = document.querySelectorAll('.pin-dot');
  dots.forEach(function(d) { d.classList.add('error'); });
  haptic(false);
  setTimeout(function() {
    pinState.currentPin = '';
    renderPinOverlay();
  }, 500);
}

function processPinEntry() {
  var mode = pinState.mode;
  var entered = pinState.currentPin;
  var enteredHash = simpleHash(entered);

  if (mode === 'set') {
    pinState.pendingPin = entered;
    pinState.mode = 'set_confirm';
    pinState.currentPin = '';
    renderPinOverlay();
  }
  else if (mode === 'set_confirm') {
    if (entered === pinState.pendingPin) {
      Storage._save('sayuri_pin', enteredHash);
      Storage._save('sayuri_has_pin', true);
      removePinOverlay();
      showToast('PIN set');
      var appEl = document.getElementById('app');
      if (appEl) appEl.classList.add('visible');
      render();
    } else {
      shakePinDots();
      setTimeout(function() {
        pinState.mode = 'set';
        pinState.pendingPin = '';
        renderPinOverlay();
      }, 600);
    }
  }
  else if (mode === 'verify') {
    var storedHash = Storage._safe('sayuri_pin', 0);
    if (enteredHash === storedHash) {
      removePinOverlay();
      render();
    } else {
      shakePinDots();
    }
  }
  else if (mode === 'change_current') {
    var curHash = Storage._safe('sayuri_pin', 0);
    if (enteredHash === curHash) {
      pinState.mode = 'change_new';
      pinState.currentPin = '';
      pinState.pendingPin = '';
      renderPinOverlay();
    } else {
      shakePinDots();
    }
  }
  else if (mode === 'change_new') {
    pinState.pendingPin = entered;
    pinState.mode = 'change_confirm';
    pinState.currentPin = '';
    renderPinOverlay();
  }
  else if (mode === 'change_confirm') {
    if (entered === pinState.pendingPin) {
      Storage._save('sayuri_pin', simpleHash(entered));
      removePinOverlay();
      showToast(t('pin_changed'));
      render();
    } else {
      shakePinDots();
      setTimeout(function() {
        pinState.mode = 'change_new';
        pinState.pendingPin = '';
        renderPinOverlay();
      }, 600);
    }
  }
}

// ========================= ONBOARDING =========================
var onboardingSlide = 0;

function showOnboarding() {
  onboardingSlide = 0;
  renderOnboarding();
}

function removeOnboarding() {
  var el = document.querySelector('.onboarding');
  if (el) el.remove();
}

function renderOnboarding() {
  removeOnboarding();
  var slides = [
    {
      icon: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      title: 'Sayuri',
      subtitle: 'your intimate companion',
      desc: 'a personal, intelligent, and private space.'
    },
    {
      icon: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A5.5 5.5 0 0 0 4 7.5c0 3.04 2.46 5.5 5.5 5.5H12v4.5a5.5 5.5 0 0 0 11 0V7.5A5.5 5.5 0 0 0 17.5 2H9.5z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><circle cx="12" cy="16" r="1"/></svg>',
      title: 'Patterns',
      subtitle: 'your body, your rhythm',
      desc: 'learn from your body with adaptive intelligence.'
    },
    {
      icon: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>',
      title: 'Privacy',
      subtitle: 'yours only',
      desc: 'protected with PIN. your data, your space.'
    }
  ];

  var s = slides[onboardingSlide];
  var dotsHtml = '';
  for (var i = 0; i < 3; i++) {
    dotsHtml += '<div class="onboarding-dot' + (i === onboardingSlide ? ' active' : '') + '" onclick="goToOnboardingSlide(' + i + ')"></div>';
  }

  var btnHtml = '';
  if (onboardingSlide < 2) {
    btnHtml = '<button class="onboarding-btn" onclick="nextOnboardingSlide()">' + t('onboarding_next') + '</button>';
  } else {
    btnHtml = '<button class="onboarding-btn onboarding-btn-primary" onclick="completeOnboarding()">' + t('onboarding_start') + '</button>';
  }

  var html = '<div class="onboarding">' +
    '<div class="onboarding-content">' +
      '<div class="onboarding-icon">' + s.icon + '</div>' +
      '<div class="onboarding-title">' + s.title + '</div>' +
      '<div class="onboarding-subtitle">' + s.subtitle + '</div>' +
      '<div class="onboarding-desc">' + s.desc + '</div>' +
    '</div>' +
    '<div class="onboarding-footer">' +
      '<div class="onboarding-dots">' + dotsHtml + '</div>' +
      btnHtml +
    '</div>' +
  '</div>';
  document.body.insertAdjacentHTML('beforeend', html);
}

function nextOnboardingSlide() {
  if (onboardingSlide < 2) {
    onboardingSlide++;
    renderOnboarding();
  }
}

function goToOnboardingSlide(idx) {
  onboardingSlide = idx;
  renderOnboarding();
}

function completeOnboarding() {
  Storage._save('sayuri_onboarded', true);
  removeOnboarding();
  showPinOverlay('set');
}

// ========================= MODAL MANAGEMENT =========================
function removeModal() {
  document.querySelectorAll('.modal-overlay').forEach(function(el) { el.remove(); });
}

function renderModal() {
  var focused = document.activeElement;
  var focusedId = focused ? focused.id : '';
  var focusedTag = focused ? focused.tagName : '';
  var selStart = (focused && focused.selectionStart != null) ? focused.selectionStart : -1;
  var selEnd = (focused && focused.selectionEnd != null) ? focused.selectionEnd : -1;
  var scrollPos = (focused && focused.scrollTop) ? focused.scrollTop : 0;

  removeModal();
  var html = '';
  if (state.modal === 'addEdit') html = renderAddEditModal();
  else if (state.modal === 'dayDetail') html = renderDayDetailModal();
  else if (state.modal === 'settings') html = renderSettingsModal();
  else if (state.modal === 'confirm') html = renderConfirmModal();
  else if (state.modal === 'iosInstall') html = renderIOSInstallModal();
  else if (state.modal === 'secretMessage') html = renderSecretEditModal();
  else if (state.modal === 'secretView') html = renderSecretViewModal();
  if (!html) return;
  var wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  var modalEl = wrapper.firstElementChild;
  document.body.appendChild(modalEl);

  // Restore focus
  if (focusedId) {
    var el = document.getElementById(focusedId);
    if (el) {
      el.focus();
      if (selStart >= 0) {
        try { el.selectionStart = selStart; el.selectionEnd = selEnd; el.scrollTop = scrollPos; } catch(e) {}
      }
    }
  }
}

function renderModalOnly() {
  renderModal();
}

function closeModal() {
  state.modal = null;
  state.editingRecord = null;
  state.selectedDay = null;
  removeModal();
  render();
}

// ========================= CUSTOM CONFIRM DIALOG =========================
function showConfirm(message, callback) {
  state._confirmMessage = message;
  state._confirmCallback = callback;
  state.modal = 'confirm';
  renderModal();
}
function confirmOk() {
  var cb = state._confirmCallback;
  state._confirmCallback = null;
  state._confirmMessage = '';
  state.modal = null;
  removeModal();
  if (cb) cb();
}
function confirmCancel() {
  state._confirmCallback = null;
  state._confirmMessage = '';
  state.modal = null;
  removeModal();
}
function renderConfirmModal() {
  return '<div class="modal-overlay" onclick="if(event.target===this)confirmCancel()">' +
    '<div class="modal-card confirm-card">' +
      '<div class="confirm-icon">!</div>' +
      '<p class="confirm-message">' + state._confirmMessage + '</p>' +
      '<div class="modal-actions">' +
        '<button class="modal-btn cancel" onclick="confirmCancel()">' + t('cancel') + '</button>' +
        '<button class="modal-btn danger" onclick="confirmOk()">' + t('delete') + '</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

// ========================= TOAST =========================
function showToast(msg, type) {
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();
  var el = document.createElement('div');
  el.className = 'toast' + (type === 'error' ? ' error' : '');
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(function() { if (el.parentNode) el.remove(); }, 2200);
}

// ========================= ROMANTIC GREETING (cycle-aware) =========================
function getRomanticGreeting() {
  var hour = new Date().getHours();
  var idx = new Date().getDate() % 7;
  var analysis = analyzeCycle(state.records, state.dayLogs);
  var phase = analysis.currentPhase;

  // Phase-aware: during period, be extra gentle
  if (phase === 'menstrual') {
    var periodG = [
      'take it easy, mi vida',
      'rest, preciosa',
      'be gentle, reina',
      'you got this, bebesita',
      'slow down, cari\u00f1o',
      'taking care of you, bonita',
      'rest up, mi cielo'
    ];
    return periodG[idx];
  }
  // Luteal: warm, cozy
  if (phase === 'luteal') {
    var lutealG = [
      'hola, bebesita',
      'hey there, preciosa',
      'almost there, mi vida',
      'stay cozy, reina',
      'hi, bonita',
      'hey, cari\u00f1o',
      'hola, g\u00fcera'
    ];
    return lutealG[idx];
  }
  // Ovulation: radiant, uplifting
  if (phase === 'ovulation') {
    var ovG = [
      'hey, radiant reina',
      'you glow, bebesita',
      'bloom, preciosa',
      'shine, bonita',
      'hola, mi vida',
      'beautiful, cari\u00f1o',
      'hey, mi cielo'
    ];
    return ovG[idx];
  }

  // Default (follicular / unknown) - time-based
  var morning = [
    'buenos d\u00edas, bebesita',
    'good morning, preciosa',
    'rise & shine, mi reina',
    'hola, bonita',
    'buenos d\u00edas, mi vida',
    'morning, cari\u00f1o',
    'despierta, g\u00fcera'
  ];
  var afternoon = [
    'hola, preciosa',
    'hey, bebesita',
    'qu\u00e9 bonita, reina',
    'hola, mi vida',
    'hey, cari\u00f1o',
    'hola, bonita',
    'qu\u00e9 bella, g\u00fcera'
  ];
  var evening = [
    'buenas noches, reina',
    'good night, mi vida',
    'hola, bebesita',
    'buenas noches, preciosa',
    'sweet dreams, cari\u00f1o',
    'buenas noches, bonita',
    'hola, mi cielo'
  ];
  if (hour < 12) return morning[idx];
  if (hour < 18) return afternoon[idx];
  return evening[idx];
}

// ========================= NAV ICONS =========================
var NAV_ICONS = [
  // Calendar
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  // History (clock)
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  // Insights (bar chart)
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
];

// ========================= MAIN RENDER =========================
function render() {
  removeModal();
  // Save scroll position
  var scrollY = window.scrollY || document.documentElement.scrollTop;
  applyThemeAndLang();
  var app = document.getElementById('app');
  var analysis = analyzeCycle(state.records, state.dayLogs);
  var activePeriod = getActivePeriod();

  var tabHtml = '';
  if (state.currentTab === 0) tabHtml = renderCalendarTab(analysis, activePeriod);
  else if (state.currentTab === 1) tabHtml = renderHistoryTab();
  else tabHtml = renderStatsTab(analysis);

  var tabChanged = state.currentTab !== state._lastRenderedTab;
  state._lastRenderedTab = state.currentTab;

  var headerTitle, headerSubtitle;
  if (currentLang === 1) {
    headerTitle = t('app_name');
    headerSubtitle = '\u0647\u0648\u0634 \u0633\u06cc\u06a9\u0644';
  } else {
    headerTitle = getRomanticGreeting();
    headerSubtitle = '';
  }

  app.innerHTML =
    '<div class="header">' +
      '<div id="headerTitle" style="user-select:none;-webkit-user-select:none">' +
        '<h1>' + headerTitle + '</h1>' +
        (headerSubtitle ? '<div class="subtitle">' + headerSubtitle + '</div>' : '') +
      '</div>' +
      '<div class="header-icons">' +
        (state.currentTab === 1 ? '<button class="icon-btn accent" onclick="haptic();openAddEdit(null)">+</button>' : '') +
        '<button class="icon-btn" onclick="haptic();openSettings()">...</button>' +
      '</div>' +
    '</div>' +
    '<div class="tab-content' + (tabChanged ? '' : ' no-anim') + '">' + tabHtml + '</div>' +
    '<div class="bottom-nav">' +
      navItem(0, t('tab_calendar')) +
      navItem(1, t('tab_history')) +
      navItem(2, t('tab_insights')) +
    '</div>';

  // Restore scroll position
  window.scrollTo(0, scrollY);

  // Setup long-press on header for secret message
  setupHeaderLongPress();

  if (state.modal) renderModal();
}

function navItem(idx, label) {
  var active = state.currentTab === idx;
  return '<div class="nav-item ' + (active?'active':'') + '" onclick="switchTab(' + idx + ')">' +
    '<span class="nav-icon">' + NAV_ICONS[idx] + '</span>' +
    '<span>' + label + '</span>' +
    '<div class="nav-bar-indicator"></div>' +
  '</div>';
}
function switchTab(idx) {
  if (state.currentTab === idx) return;
  state.currentTab = idx;
  haptic();
  render();
}

// ========================= LONG PRESS FOR SECRET MESSAGE =========================
var _longPressTimer = null;
function setupHeaderLongPress() {
  var el = document.getElementById('headerTitle');
  if (!el) return;
  el.addEventListener('pointerdown', function(e) {
    _longPressTimer = setTimeout(function() {
      haptic(true);
      showSecretMessage();
    }, 800);
  });
  el.addEventListener('pointerup', function() { clearTimeout(_longPressTimer); });
  el.addEventListener('pointerleave', function() { clearTimeout(_longPressTimer); });
  el.addEventListener('pointercancel', function() { clearTimeout(_longPressTimer); });
}

// ========================= CALENDAR TAB =========================
function renderCalendarTab(analysis, activePeriod) {
  var progress = analysis.dayInCycle ? Math.min(1, analysis.dayInCycle/(analysis.avgCycle||28)) : 0;
  var circumference = 2*Math.PI*120;
  var dashOffset = circumference*(1-progress);

  var heroSvg =
    '<svg width="260" height="260" viewBox="0 0 260 260">' +
      '<circle cx="130" cy="130" r="120" fill="none" stroke="var(--bg-subtle)" stroke-width="14"/>' +
      '<circle cx="130" cy="130" r="120" fill="none" stroke="var(--accent)" stroke-width="14" ' +
        'stroke-dasharray="' + circumference + '" stroke-dashoffset="' + dashOffset + '" ' +
        'stroke-linecap="round" transform="rotate(-90 130 130)"/>' +
    '</svg>';

  var phaseLabel = analysis.currentPhase !== 'unknown' ? t('phase_'+analysis.currentPhase) : '';
  var calendarHtml = renderCalendarGrid(analysis);

  var heroDayHtml = '';
  if (analysis.dayInCycle != null) {
    heroDayHtml = '<div class="hero-day">' + numStr(analysis.dayInCycle) + '</div><div class="hero-phase">' + phaseLabel + '</div>';
  } else {
    heroDayHtml = '<div class="hero-day" style="font-size:48px;color:var(--text-muted)">\u2014</div><div class="hero-phase">' + t('tap_below') + '</div>';
  }

  var actionBtn = '';
  if (activePeriod) {
    actionBtn = '<button class="secondary-btn" onclick="haptic();endPeriod()">' + t('end_period') + '</button>';
  } else {
    actionBtn = '<button class="primary-btn" onclick="haptic();startPeriod()">' + t('start_period') + '</button>';
  }

  return '<div class="hero-circle-wrap">' +
    '<div class="hero-circle">' +
      heroSvg +
      '<div class="hero-inner">' +
        '<div class="hero-label">' + (activePeriod ? t('active') : t('cycle_day')) + '</div>' +
        heroDayHtml +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="card">' + calendarHtml + '</div>' +
  actionBtn;
}

function renderCalendarGrid(analysis) {
  var month = state.currentMonth;
  var y = month.getFullYear(), m = month.getMonth();
  var daysInMonth = new Date(y, m+1, 0).getDate();
  var calType = Storage.getSettings().calendarType || 0;

  var mname, displayYear;
  if (calType === 1) {
    // Gregorian
    mname = MONTH_GREG_EN[m];
    displayYear = y;
  } else {
    // Jalali
    var firstJ = gregorianToJalali(y, m+1, 1);
    var lastJ = gregorianToJalali(y, m+1, daysInMonth);
    var displayJ = (firstJ.month === lastJ.month) ? firstJ : gregorianToJalali(y, m+1, 15);
    mname = currentLang===1 ? MONTH_NAMES_FA[displayJ.month-1] : MONTH_NAMES_EN[displayJ.month-1];
    displayYear = displayJ.year;
  }

  var firstOfMonth = new Date(y, m, 1);
  var firstDayIdx = firstOfMonth.getDay();
  var weekDays;
  if (currentLang === 1) {
    firstDayIdx = (firstDayIdx + 1) % 7;
    weekDays = ['\u0634','\u06cc','\u062f','\u0633','\u0686','\u067e','\u062c'];
  } else {
    weekDays = ['S','M','T','W','T','F','S'];
  }

  var cells = [];
  for (var ci=0; ci<firstDayIdx; ci++) cells.push(null);
  for (var d=1; d<=daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  var today = todayMillis();
  var gridHtml = '';

  cells.forEach(function(d) {
    if (d === null) { gridHtml += '<div class="day-cell"></div>'; return; }
    var millis = dayToMillis(y, m, d);
    var isPeriod = state.records.some(function(r) { return millis >= r.start && millis <= (r.end != null ? r.end : r.start); });
    var isToday = millis === today;
    var isOvulation = analysis.ovulationDay && millis === analysis.ovulationDay;
    var isFertile = analysis.fertilityStart && analysis.fertilityEnd && millis >= analysis.fertilityStart && millis <= analysis.fertilityEnd && !isOvulation;
    var hasLog = state.dayLogs[millis] != null;

    // Day number: Jalali or Gregorian
    var dayNum = calType === 1 ? d : gregorianToJalali(y, m+1, d).day;

    var circleClass = 'day-circle';
    if (isPeriod) circleClass += ' period';
    else if (isOvulation) circleClass += ' ovulation';
    else if (isFertile) circleClass += ' fertile';
    if (isToday) circleClass += ' today';

    gridHtml +=
      '<div class="day-cell" onclick="openDayDetail(' + millis + ')">' +
        '<div class="' + circleClass + '">' + numStr(dayNum) + '</div>' +
        (hasLog ? '<div class="day-dot"></div>' : '<div style="height:6px"></div>') +
      '</div>';
  });

  // Calendar type toggle button
  var calToggle = '<div class="cal-type-toggle" onclick="toggleCalendarType()">' +
    (calType === 0 ? t('cal_jalali') : t('cal_gregorian')) +
  '</div>';

  return '<div class="calendar-header">' +
    '<div class="month-year"><h2>' + mname + '</h2><span>' + numStr(displayYear) + '</span></div>' +
    '<div style="display:flex;gap:8px;align-items:center">' +
      calToggle +
      '<div class="nav-btn" onclick="changeMonth(-1)">&#8249;</div>' +
      '<div class="nav-btn" onclick="changeMonth(1)">&#8250;</div>' +
    '</div>' +
  '</div>' +
  '<div class="weekdays">' + weekDays.map(function(w){return '<div>'+w+'</div>';}).join('') + '</div>' +
  '<div class="days-grid">' + gridHtml + '</div>';
}

function toggleCalendarType() {
  var current = Storage.getSettings().calendarType || 0;
  var next = current === 0 ? 1 : 0;
  Storage.saveSettings(Object.assign({}, Storage.getSettings(), { calendarType: next }));
  haptic(true);
  render();
}

function changeMonth(delta) {
  var d = new Date(state.currentMonth);
  d.setMonth(d.getMonth()+delta);
  state.currentMonth = d;
  haptic(true);
  render();
}

function startPeriod() {
  if (getActivePeriod()) return;
  state.records.push({ start: todayMillis(), end: null, notes: '' });
  saveAndRefresh();
}
function endPeriod() {
  var active = getActivePeriod();
  if (!active) return;
  active.end = todayMillis();
  saveAndRefresh();
}

// ========================= HISTORY TAB =========================
function renderHistoryTab() {
  var records = state.records;
  var activePeriod = getActivePeriod();

  if (records.length === 0) {
    return '<div class="empty-state">' +
      '<div class="title">' + t('no_records') + '</div>' +
      '<div class="desc">' + t('tap_plus') + '</div>' +
    '</div>';
  }

  var sorted = records.slice().sort(function(a,b) { return b.start - a.start; });
  var itemsHtml = sorted.map(function(r) {
    var originalIdx = state.records.indexOf(r);
    var isActive = r.end == null;
    var meta = isActive
      ? t('ongoing')
      : numStr(Math.round((r.end-r.start)/DAY_MS)+1) + ' ' + t('days') + ' &#183; ' + t('ended') + ' ' + formatDateShort(r.end);
    return '<div class="history-card" onclick="openAddEdit(' + originalIdx + ')">' +
      '<div class="history-icon ' + (isActive?'active':'done') + '">' + (isActive?'&#9679;':'&#10003;') + '</div>' +
      '<div class="history-info">' +
        '<div class="history-date">' + formatDate(r.start) + '</div>' +
        '<div class="history-meta">' + meta + '</div>' +
      '</div>' +
      '<div class="history-delete" onclick="event.stopPropagation();deleteRecord(' + originalIdx + ')">&#215;</div>' +
    '</div>';
  }).join('');

  return '<div style="font-size:13px;color:var(--text-muted);margin-bottom:16px">' +
    numStr(records.length) + ' ' + (records.length===1?t('record_single'):t('records')) +
  '</div>' +
  itemsHtml;
}

function deleteRecord(idx) {
  showConfirm(t('delete_confirm'), function() {
    state.records.splice(idx, 1);
    saveAndRefresh();
  });
}

// ========================= INSIGHTS TAB =========================
function renderStatsTab(analysis) {
  var html = '';

  var patterns = detectSymptomPatterns(state.records, state.dayLogs)
    .filter(function(p) { return !isHandled(suggestionId(p)); }).slice(0,3);
  if (patterns.length > 0) {
    html += patterns.map(function(p) {
      return '<div class="suggestion-card">' +
        '<div class="suggestion-dot"></div>' +
        '<div class="suggestion-info">' +
          '<div class="suggestion-title">' + t(p.symptomKey) + ' &#183; ' + t('cycle_day_short') + ' ' + numStr(p.cycleDay) + '</div>' +
          '<div class="suggestion-meta">' + numStr(Math.round(p.rate*100)) + '% &#183; ' + numStr(p.count) + '/' + numStr(p.total) + ' ' + t('cycles') + '</div>' +
        '</div>' +
        '<div class="suggestion-actions">' +
          '<div class="suggestion-action dismiss" onclick="dismissSuggestion(\'' + suggestionId(p) + '\')">&#215;</div>' +
          '<div class="suggestion-action accept" onclick="acceptSuggestion(\'' + suggestionId(p) + '\')">&#10003;</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  if (analysis.predictedNext != null) {
    var daysUntil = Math.round((analysis.predictedNext - todayMillis())/DAY_MS);
    var accColor = analysis.accuracyLevel === 3 ? 'var(--success)' : analysis.accuracyLevel === 2 ? 'var(--warning)' : 'var(--danger)';
    var accLabel = analysis.accuracyLevel === 3 ? t('high') : analysis.accuracyLevel === 2 ? t('medium_acc') : analysis.accuracyLevel === 1 ? t('low') : t('very_low');
    var daysText = daysUntil > 0 ? t('in_days') + ' ' + numStr(daysUntil) + ' ' + t('days') : daysUntil === 0 ? t('today') : numStr(-daysUntil) + ' ' + t('days_ago');
    html +=
      '<div class="prediction-card">' +
        '<div class="prediction-top">' +
          '<span class="prediction-label">' + t('next_period') + '</span>' +
          '<span class="prediction-accuracy"><span class="accuracy-dot" style="background:' + accColor + '"></span>' + accLabel + '</span>' +
        '</div>' +
        '<div class="prediction-days">' + daysText + '</div>' +
        '<div class="prediction-date">' + formatDate(analysis.predictedNext) + '</div>' +
      '</div>';
  }

  var completed = state.records.filter(function(r) { return r.end != null; }).length;
  html +=
    '<div class="stat-grid">' +
      '<div class="stat-box"><div class="label">' + t('stat_records') + '</div><div class="value">' + numStr(state.records.length) + '</div></div>' +
      '<div class="stat-box"><div class="label">' + t('stat_avg_cycle') + '</div><div class="value">' + (analysis.avgCycle?numStr(analysis.avgCycle):'\u2014') + '<span class="suffix">' + (analysis.avgCycle?' '+t('days'):'') + '</span></div></div>' +
    '</div>' +
    '<div class="stat-grid">' +
      '<div class="stat-box"><div class="label">' + t('stat_avg_duration') + '</div><div class="value">' + (analysis.avgPeriod?numStr(analysis.avgPeriod):'\u2014') + '<span class="suffix">' + (analysis.avgPeriod?' '+t('days'):'') + '</span></div></div>' +
      '<div class="stat-box"><div class="label">' + t('stat_completed') + '</div><div class="value">' + numStr(completed) + '</div></div>' +
    '</div>';

  var predictability = computePredictabilityTimeline(state.records, state.dayLogs);
  if (predictability.length >= 5) {
    var segs = predictability.map(function(p) { return '<div class="timeline-seg" style="background:rgba(143,166,142,' + (0.15+p.score*0.85) + ')"></div>'; }).join('');
    html +=
      '<div class="card">' +
        '<div class="card-label">' + t('predictability_title') + '</div>' +
        '<div class="timeline-bar">' + segs + '</div>' +
        '<div class="timeline-legend"><span>' + t('less_predictable') + '</span><span>' + t('more_predictable') + '</span></div>' +
      '</div>';
  }

  var correlations = computeSymptomCorrelations(state.dayLogs).slice(0,6);
  if (correlations.length > 0) {
    var rows = correlations.map(function(c) {
      return '<div class="heatmap-row">' +
        '<div class="heatmap-labels">' + t(c.a) + ' \u00d7 ' + t(c.b) + '</div>' +
        '<div class="heatmap-bar-bg"><div class="heatmap-bar-fill" style="width:' + (c.rate*100) + '%;opacity:' + (0.4+c.rate*0.6) + '"></div></div>' +
      '</div>';
    }).join('');
    html += '<div class="card"><div class="card-label">' + t('symptom_overlap_title') + '</div>' + rows + '</div>';
  }

  if (analysis.fertilityStart && analysis.ovulationDay) {
    html +=
      '<div class="card">' +
        '<div class="card-label" style="color:var(--fertility)">' + t('fertility_window') + '</div>' +
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
          '<div style="width:10px;height:10px;border-radius:50%;background:var(--ovulation)"></div>' +
          '<div>' +
            '<div style="font-size:10px;color:var(--text-muted)">' + t('ovulation_day') + '</div>' +
            '<div style="font-size:14px;font-weight:600">' + formatDate(analysis.ovulationDay) + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:10px">' +
          '<div style="width:10px;height:10px;border-radius:50%;background:rgba(181,165,116,0.5)"></div>' +
          '<div>' +
            '<div style="font-size:10px;color:var(--text-muted)">' + t('fertile_days') + '</div>' +
            '<div style="font-size:14px;font-weight:600">' + formatDateShort(analysis.fertilityStart) + ' \u2014 ' + formatDateShort(analysis.fertilityEnd) + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  if (state.records.length === 0) {
    html = '<div class="empty-state"><div class="title">' + t('no_records') + '</div><div class="desc">' + t('tap_plus') + '</div></div>';
  }

  return html;
}

function dismissSuggestion(id) { markHandled(id, false); render(); }
function acceptSuggestion(id) {
  markHandled(id, true);
  var patterns = detectSymptomPatterns(state.records, state.dayLogs);
  var pattern = patterns.find(function(p) { return suggestionId(p) === id; });
  if (pattern) {
    var today = todayMillis();
    var log = state.dayLogs[today] || { flow: 0, pain: 0, mood: -1, symptoms: [], note: '' };
    if (log.symptoms.indexOf(pattern.symptomKey) === -1) {
      log.symptoms.push(pattern.symptomKey);
      state.dayLogs[today] = log;
      Storage.saveDayLogs(state.dayLogs);
      showToast(t('symptom_added'));
    } else {
      showToast(t('done'));
    }
  } else {
    showToast(t('done'));
  }
  render();
}

// ========================= ADD/EDIT MODAL =========================
function openAddEdit(idx) {
  state.editingRecord = idx;
  state.modal = 'addEdit';
  state._tempStart = idx != null ? state.records[idx].start : todayMillis();
  state._tempEnd = idx != null ? state.records[idx].end : null;
  state._tempNotes = idx != null ? (state.records[idx].notes || '') : '';
  renderModal();
}

function renderAddEditModal() {
  var isEdit = state.editingRecord != null;
  var endVal = state._tempEnd ? toDateInputValue(state._tempEnd) : '';
  var clearBtn = state._tempEnd ? '<button onclick="state._tempEnd=null;renderModalOnly()" style="color:var(--accent);font-size:12px;white-space:nowrap">' + t('clear') + '</button>' : '';

  return '<div class="modal-overlay" onclick="if(event.target===this)closeModal()">' +
    '<div class="modal-card">' +
      '<div class="modal-title">' + (isEdit?t('edit_record'):t('new_record')) + '</div>' +
      '<label class="field-label">' + t('start_date') + '</label>' +
      '<input type="date" class="field-box" id="startDateInput" value="' + toDateInputValue(state._tempStart) + '" onchange="state._tempStart=fromDateInputValue(this.value)">' +
      '<label class="field-label">' + t('end_date') + '</label>' +
      '<div style="display:flex;gap:8px;align-items:center;margin-bottom:16px">' +
        '<input type="date" class="field-box" style="margin-bottom:0" id="endDateInput" value="' + endVal + '" onchange="state._tempEnd=this.value?fromDateInputValue(this.value):null">' +
        clearBtn +
      '</div>' +
      '<label class="field-label">' + t('notes') + '</label>' +
      '<textarea class="field-box" rows="3" id="notesArea" placeholder="' + t('add_notes') + '" onchange="state._tempNotes=this.value">' + (state._tempNotes||'') + '</textarea>' +
      '<div class="modal-actions">' +
        '<button class="modal-btn cancel" onclick="closeModal()">' + t('cancel') + '</button>' +
        '<button class="modal-btn save" onclick="saveAddEdit()">' + t('save') + '</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function toDateInputValue(millis) {
  var d = new Date(millis);
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}
function fromDateInputValue(str) {
  var parts = str.split('-').map(Number);
  return new Date(parts[0], parts[1]-1, parts[2], 0,0,0,0).getTime();
}
function saveAddEdit() {
  if (state._tempEnd != null && state._tempEnd < state._tempStart) {
    showToast(t('date_error'), 'error');
    return;
  }
  if (state._tempEnd != null) {
    var duration = Math.round((state._tempEnd - state._tempStart) / DAY_MS) + 1;
    if (duration > 14) {
      showToast(t('duration_error'), 'error');
      return;
    }
  }

  var rec = { start: state._tempStart, end: state._tempEnd, notes: state._tempNotes || '' };
  if (state.editingRecord != null) state.records[state.editingRecord] = rec;
  else state.records.push(rec);
  state.modal = null;
  saveAndRefresh();
}

// ========================= DAY DETAIL MODAL =========================
var SYMPTOM_KEYS = ['sym_headache','sym_cramps','sym_fatigue','sym_bloating','sym_nausea','sym_backache','sym_breast','sym_acne','sym_insomnia','sym_cravings'];
var MOOD_KEYS = ['mood_great','mood_good','mood_okay','mood_bad','mood_awful'];
var MOOD_SYMBOLS = ['\u25C9','\u25CE','\u25CB','\u25D0','\u25CF'];

function openDayDetail(millis) {
  state.selectedDay = millis;
  var log = state.dayLogs[millis] || {};
  state._tempFlow = log.flow || 0;
  state._tempPain = log.pain || 0;
  state._tempMood = log.mood != null ? log.mood : -1;
  state._tempSymptoms = new Set(log.symptoms || []);
  state._tempNote = log.note || '';
  state.modal = 'dayDetail';
  renderModal();
}

function renderDayDetailModal() {
  var millis = state.selectedDay;
  var isPeriodDay = state.records.some(function(r) { return millis >= r.start && millis <= (r.end != null ? r.end : r.start); });
  var flowLabels = [t('flow_none'),t('flow_light'),t('flow_medium'),t('flow_heavy')];

  var flowChips = flowLabels.map(function(lbl, i) {
    return '<div class="chip ' + (state._tempFlow===i?'selected':'') + '" onclick="haptic(true);state._tempFlow=' + i + ';renderModalOnly()">' + lbl + '</div>';
  }).join('');

  var painCells = '';
  for (var i=0;i<=10;i++) {
    var isCurrent = state._tempPain === i;
    painCells += '<div class="pain-cell ' + (isCurrent?'selected':'') + '" onclick="haptic(true);state._tempPain=' + i + ';renderModalOnly()">' + numStr(i) + '</div>';
  }

  var moodRow = MOOD_KEYS.map(function(k, i) {
    return '<div class="mood-item ' + (state._tempMood===i?'selected':'') + '" onclick="haptic(true);state._tempMood=state._tempMood===' + i + '?-1:' + i + ';renderModalOnly()">' +
      '<span class="sym">' + MOOD_SYMBOLS[i] + '</span><span class="lbl">' + t(k) + '</span>' +
    '</div>';
  }).join('');

  var symptomGrid = SYMPTOM_KEYS.map(function(k) {
    return '<div class="symptom-chip ' + (state._tempSymptoms.has(k)?'selected':'') + '" onclick="haptic(true);toggleSymptom(\'' + k + '\')">' + t(k) + '</div>';
  }).join('');

  var periodBadge = '';
  if (isPeriodDay) {
    periodBadge = '<div style="background:var(--accent-soft);color:var(--accent-dark);padding:6px 12px;border-radius:10px;font-size:11px;font-weight:600">' + t('period_day') + '</div>';
  }

  var painFloatDir = currentLang === 1 ? 'left' : 'right';

  return '<div class="modal-overlay" onclick="if(event.target===this)closeModal()">' +
    '<div class="modal-card">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">' +
        '<div>' +
          '<div style="font-size:11px;color:var(--text-muted)">' + t('day_details') + '</div>' +
          '<div style="font-size:20px;font-weight:700;margin-top:4px">' + formatDate(millis) + '</div>' +
        '</div>' +
        periodBadge +
      '</div>' +
      '<label class="field-label">' + t('flow') + '</label>' +
      '<div class="chip-row">' + flowChips + '</div>' +
      '<label class="field-label">' + t('pain') + ' <span style="float:' + painFloatDir + ';color:var(--accent);font-weight:700">' + numStr(state._tempPain) + '/' + numStr(10) + '</span></label>' +
      '<div class="pain-scale">' + painCells + '</div>' +
      '<label class="field-label">' + t('mood') + '</label>' +
      '<div class="mood-row">' + moodRow + '</div>' +
      '<label class="field-label">' + t('symptoms') + '</label>' +
      '<div class="symptom-grid">' + symptomGrid + '</div>' +
      '<label class="field-label">' + t('notes') + '</label>' +
      '<textarea class="field-box" rows="2" id="dayNoteInput" placeholder="' + t('add_notes') + '" onchange="state._tempNote=this.value">' + (state._tempNote||'') + '</textarea>' +
      '<div class="modal-actions">' +
        '<button class="modal-btn cancel" onclick="closeModal()">' + t('cancel') + '</button>' +
        '<button class="modal-btn save" onclick="saveDayDetail()">' + t('save') + '</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function toggleSymptom(key) {
  if (state._tempSymptoms.has(key)) state._tempSymptoms.delete(key);
  else state._tempSymptoms.add(key);
  renderModalOnly();
}
function saveDayDetail() {
  var millis = state.selectedDay;
  var log = {
    flow: state._tempFlow, pain: state._tempPain, mood: state._tempMood,
    symptoms: Array.from(state._tempSymptoms), note: state._tempNote || ''
  };
  var isEmpty = log.flow===0 && log.pain===0 && log.mood===-1 && log.symptoms.length===0 && !log.note;
  if (isEmpty) delete state.dayLogs[millis];
  else state.dayLogs[millis] = log;
  Storage.saveDayLogs(state.dayLogs);
  state.modal = null;
  removeModal();
  render();
}

// ========================= SETTINGS MODAL =========================
function openSettings() {
  state.modal = 'settings';
  renderModal();
}

function renderSettingsModal() {
  var langs = [t('lang_auto'), t('lang_english'), t('lang_persian')];
  var themes = [t('theme_auto'), t('theme_light'), t('theme_dark')];
  var hasPin = Storage._safe('sayuri_has_pin', false);
  var calType = Storage.getSettings().calendarType || 0;

  var langOptions = langs.map(function(l,i) {
    return '<div class="settings-option ' + (state.langMode===i?'selected':'') + '" onclick="setLangMode(' + i + ')">' + l + '</div>';
  }).join('');

  var themeOptions = themes.map(function(l,i) {
    return '<div class="settings-option ' + (state.themeMode===i?'selected':'') + '" onclick="setThemeMode(' + i + ')">' + l + '</div>';
  }).join('');

  var calOptions = [t('cal_jalali'), t('cal_gregorian')].map(function(c,i) {
    return '<div class="settings-option ' + (calType===i?'selected':'') + '" onclick="setCalendarType(' + i + ')">' + c + '</div>';
  }).join('');

  var pinBtn;
  if (hasPin) {
    pinBtn = '<div class="action-row" onclick="startChangePin()">' +
      '<div class="t">' + t('change_pin') + '</div>' +
      '<div class="d"></div>' +
    '</div>';
  } else {
    pinBtn = '<div class="action-row" onclick="showPinOverlay(\'set\')">' +
      '<div class="t">' + t('set_pin') + '</div>' +
      '<div class="d">' + t('set_pin_desc') + '</div>' +
    '</div>';
  }

  // Install button: always show if not already installed as PWA
  var installBtn = '';
  if (!isStandalone) {
    var installDesc = isIOS ? t('install_desc_ios') : t('install_desc_android');
    installBtn = '<div class="action-row" onclick="installPWA()"><div class="t">' + t('install_app') + '</div><div class="d">' + installDesc + '</div></div>';
  }

  // Secret message button
  var secretBtn = '<div class="action-row" onclick="openSecretEdit()">' +
    '<div class="t">' + t('edit_message') + '</div>' +
    '<div class="d">' + t('edit_message_desc') + '</div>' +
  '</div>';

  return '<div class="modal-overlay" onclick="if(event.target===this)closeModal()">' +
    '<div class="modal-card">' +
      '<div class="modal-title">' + t('settings') + '</div>' +
      '<div class="settings-section-label">' + t('language') + '</div>' +
      '<div class="settings-option-row">' + langOptions + '</div>' +
      '<div class="settings-section-label">' + t('cal_type') + '</div>' +
      '<div class="settings-option-row">' + calOptions + '</div>' +
      '<div class="settings-section-label">' + t('appearance') + '</div>' +
      '<div class="settings-option-row">' + themeOptions + '</div>' +
      '<div class="settings-section-label">SECURITY</div>' +
      pinBtn +
      '<div class="settings-section-label">' + t('for_you') + '</div>' +
      secretBtn +
      '<div class="settings-section-label">' + t('backup_restore') + '</div>' +
      '<div class="action-row" onclick="downloadBackup()">' +
        '<div class="t">' + t('create_backup') + '</div>' +
        '<div class="d">' + t('create_backup_desc') + '</div>' +
      '</div>' +
      '<div class="action-row" onclick="document.getElementById(\'restoreFileInput\').click()">' +
        '<div class="t">' + t('restore_backup') + '</div>' +
        '<div class="d">' + t('restore_backup_desc') + '</div>' +
      '</div>' +
      '<input type="file" id="restoreFileInput" accept="application/json" style="display:none" onchange="handleRestoreFile(event)">' +
      installBtn +
      '<div class="modal-actions" style="margin-top:20px">' +
        '<button class="modal-btn save" style="width:100%" onclick="closeModal()">' + t('done') + '</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function startChangePin() {
  state.modal = null;
  removeModal();
  showPinOverlay('change_current');
}

function setLangMode(mode) {
  state.langMode = mode;
  Storage.saveSettings(Object.assign({}, Storage.getSettings(), { langMode: mode }));
  closeModal();
}
function setThemeMode(mode) {
  state.themeMode = mode;
  Storage.saveSettings(Object.assign({}, Storage.getSettings(), { themeMode: mode }));
  renderModalOnly();
}
function setCalendarType(type) {
  Storage.saveSettings(Object.assign({}, Storage.getSettings(), { calendarType: type }));
  haptic(true);
  renderModalOnly();
}

// ========================= BACKUP & RESTORE =========================
function downloadBackup() {
  var data = {
    backup_version: 1,
    exported_at: Date.now(),
    app: 'Sayuri',
    records: state.records,
    day_logs: state.dayLogs
  };
  var blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  var dateStr = new Date().toISOString().slice(0,16).replace(/[-:T]/g,'').slice(0,12);
  a.href = url;
  a.download = 'Sayuri_Backup_' + dateStr + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function handleRestoreFile(event) {
  var file = event.target.files[0];
  if (!file) return;

  showConfirm(t('restore_confirm_desc'), function() {
    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var data = JSON.parse(e.target.result);
        if (!data.records || !data.day_logs) {
          showToast(t('restore_failed'), 'error');
          return;
        }
        state.records = data.records;
        state.dayLogs = data.day_logs;
        Storage.saveRecords(state.records);
        Storage.saveDayLogs(state.dayLogs);
        state.modal = null;
        removeModal();
        showToast(t('restore_success'));
        render();
      } catch (err) {
        showToast(t('restore_failed'), 'error');
      }
    };
    reader.onerror = function() {
      showToast(t('restore_failed'), 'error');
    };
    reader.readAsText(file);
  });
  event.target.value = '';
}

// ========================= PWA INSTALL (iOS + Android) =========================
var deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
});

function installPWA() {
  if (isIOS || !deferredPrompt) {
    state.modal = 'iosInstall';
    renderModal();
    return;
  }
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function(choiceResult) {
    if (choiceResult.outcome === 'accepted') {
      showToast('Installed!');
    }
    deferredPrompt = null;
  });
}

function renderIOSInstallModal() {
  var stepsHtml = '';
  if (isIOS) {
    stepsHtml =
      '<div style="display:flex;flex-direction:column;gap:20px;margin:28px 0;text-align:center">' +
        '<div>' +
          '<div style="font-size:40px;margin-bottom:8px">\uD83D\uDD17</div>' +
          '<div style="font-size:13px;color:var(--text-secondary);line-height:1.8">' +
            t('install_desc_ios') +
          '</div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:center;gap:8px;color:var(--text-muted);font-size:12px">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>' +
          '<span>Share</span>' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' +
          '<span style="color:var(--accent);font-weight:600">Add to Home Screen</span>' +
        '</div>' +
      '</div>';
  } else {
    stepsHtml =
      '<div style="margin:28px 0;text-align:center">' +
        '<div style="font-size:40px;margin-bottom:12px">\uD83C\uDF10</div>' +
        '<div style="font-size:13px;color:var(--text-secondary);line-height:2">Open this page in Chrome or Edge browser<br>then tap the install icon in the address bar</div>' +
      '</div>';
  }

  return '<div class="modal-overlay" onclick="if(event.target===this)closeModal()">' +
    '<div class="modal-card" style="text-align:center">' +
      '<div class="modal-title">' + t('install_app') + '</div>' +
      stepsHtml +
      '<div class="modal-actions">' +
        '<button class="modal-btn save" style="width:100%" onclick="closeModal()">' + t('done') + '</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

// ========================= SECRET MESSAGE =========================
function openSecretEdit() {
  state.modal = 'secretMessage';
  state._tempSecretMsg = Storage._safe('sayuri_secret_msg', '');
  renderModal();
}

function renderSecretEditModal() {
  var currentMsg = Storage._safe('sayuri_secret_msg', '');
  return '<div class="modal-overlay" onclick="if(event.target===this)closeModal()">' +
    '<div class="modal-card">' +
      '<div class="modal-title">' + t('for_you') + '</div>' +
      '<div style="font-size:11px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">' +
        'Long-press the header greeting to reveal this message.' +
        (currentLang === 1 ? '<br>برای نمایش پیام، روی عنوان بالای صفحه لمس طولانی کنید.' : '') +
      '</div>' +
      '<textarea class="field-box" id="secretMsgInput" rows="5" placeholder="' + t('message_placeholder') + '" onchange="state._tempSecretMsg=this.value" style="text-align:center;font-style:italic;font-size:15px;line-height:2">' + (currentMsg||'') + '</textarea>' +
      '<div class="modal-actions">' +
        '<button class="modal-btn cancel" onclick="closeModal()">' + t('cancel') + '</button>' +
        '<button class="modal-btn save" onclick="saveSecretMessage()">' + t('save') + '</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function saveSecretMessage() {
  Storage._save('sayuri_secret_msg', state._tempSecretMsg || '');
  showToast(t('done'));
  closeModal();
}

function showSecretMessage() {
  var msg = Storage._safe('sayuri_secret_msg', '');
  if (!msg) return;
  state.modal = 'secretView';
  haptic(true);
  renderModal();
}

function renderSecretViewModal() {
  var msg = Storage._safe('sayuri_secret_msg', '');
  return '<div class="modal-overlay" onclick="closeModal()" style="background:rgba(0,0,0,0.75)">' +
    '<div class="modal-card secret-reveal" style="text-align:center;max-width:340px">' +
      '<div style="font-family:var(--font-display);font-size:22px;font-weight:300;margin-bottom:24px;color:var(--accent);letter-spacing:2px">FOR YOU</div>' +
      '<div style="font-size:15px;line-height:2.4;color:var(--text-primary);white-space:pre-wrap;font-style:italic">' + msg.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>' +
    '</div>' +
  '</div>';
}

// ========================= INITIALIZATION =========================
function initApp() {
  setTimeout(function() {
    var splash = document.getElementById('splash');
    if (splash) splash.classList.add('hide');
    setTimeout(function() {
      if (splash && splash.parentNode) splash.remove();

      var onboarded = Storage._safe('sayuri_onboarded', false);
      if (!onboarded) {
        showOnboarding();
      } else {
        var hasPin = Storage._safe('sayuri_has_pin', false);
        document.getElementById('app').classList.add('visible');
        if (hasPin) {
          showPinOverlay('verify');
        } else {
          render();
        }
      }
    }, 600);
  }, 1800);
}

initApp();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').catch(function() {});
  });
}