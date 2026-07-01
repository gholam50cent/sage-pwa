// ========================= ترجمه =========================
const STR = {
  app_name: ["Sage", "سیج"],
  tab_calendar: ["Calendar", "تقویم"],
  tab_history: ["History", "تاریخچه"],
  tab_insights: ["Insights", "آمار"],
  active: ["ACTIVE", "فعال"],
  cycle_day: ["CYCLE DAY", "روز سیکل"],
  tap_below: ["Tap below to begin", "برای شروع، دکمه را بزنید"],
  start_period: ["Start period", "شروع پریود"],
  end_period: ["End period", "پایان پریود"],
  phase_menstrual: ["Menstrual", "قاعدگی"],
  phase_follicular: ["Follicular", "فولیکولار"],
  phase_ovulation: ["Ovulation", "تخمک‌گذاری"],
  phase_luteal: ["Luteal", "لوتئال"],
  no_records: ["No records yet", "هنوز چیزی ثبت نشده"],
  tap_plus: ["Tap + to add your first entry", "روی + بزنید تا اضافه کنید"],
  records: ["records", "مورد"],
  record_single: ["record", "مورد"],
  ongoing: ["Ongoing", "در حال انجام"],
  days: ["days", "روز"],
  ended: ["ended", "پایان"],
  delete_record: ["Delete record", "حذف رکورد"],
  delete_confirm: ["This action cannot be undone.", "این عمل قابل بازگشت نیست."],
  delete: ["Delete", "حذف"],
  cancel: ["Cancel", "انصراف"],
  new_record: ["New record", "افزودن رکورد"],
  edit_record: ["Edit record", "ویرایش رکورد"],
  start_date: ["START DATE", "تاریخ شروع"],
  end_date: ["END DATE", "تاریخ پایان"],
  notes: ["NOTES", "یادداشت"],
  add_notes: ["Add notes...", "یادداشت اضافه کنید..."],
  save: ["Save", "ذخیره"],
  clear: ["Clear", "حذف"],
  next_period: ["NEXT PERIOD", "پریود بعدی"],
  in_days: ["in", "تا"],
  today: ["today", "امروز"],
  days_ago: ["days ago", "روز پیش"],
  stat_records: ["Records", "تعداد"],
  stat_avg_cycle: ["Avg cycle", "میانگین سیکل"],
  stat_avg_duration: ["Avg duration", "میانگین مدت"],
  stat_completed: ["Completed", "تکمیل شده"],
  high: ["High", "بالا"],
  medium_acc: ["Medium", "متوسط"],
  low: ["Low", "پایین"],
  very_low: ["Very low", "بسیار پایین"],
  day_details: ["Day details", "جزئیات روز"],
  period_day: ["Period day", "روز پریود"],
  flow: ["FLOW", "شدت خونریزی"],
  flow_none: ["None", "ندارد"],
  flow_light: ["Light", "کم"],
  flow_medium: ["Medium", "متوسط"],
  flow_heavy: ["Heavy", "زیاد"],
  pain: ["PAIN LEVEL", "شدت درد"],
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
  sym_backache: ["Back pain", "کمردرد"],
  sym_breast: ["Breast tenderness", "حساسیت سینه"],
  sym_acne: ["Acne", "جوش"],
  sym_insomnia: ["Insomnia", "بی‌خوابی"],
  sym_cravings: ["Cravings", "هوس غذا"],
  settings: ["Settings", "تنظیمات"],
  appearance: ["APPEARANCE", "ظاهر"],
  theme_auto: ["Auto", "خودکار"],
  theme_light: ["Light", "روشن"],
  theme_dark: ["Dark", "تاریک"],
  language: ["LANGUAGE", "زبان"],
  lang_auto: ["Auto", "خودکار"],
  lang_english: ["English", "انگلیسی"],
  lang_persian: ["فارسی", "فارسی"],
  done: ["Done", "تایید"],
  backup_restore: ["BACKUP & RESTORE", "بکاپ و بازیابی"],
  create_backup: ["Download backup", "دانلود بکاپ"],
  create_backup_desc: ["Save all data as a file", "ذخیره اطلاعات به‌صورت فایل"],
  restore_backup: ["Restore from file", "بازیابی از فایل"],
  restore_backup_desc: ["Choose a backup file", "انتخاب فایل بکاپ"],
  restore_confirm_title: ["Restore data?", "بازیابی اطلاعات؟"],
  restore_confirm_desc: ["This replaces all current data.", "این عمل اطلاعات فعلی را جایگزین می‌کند."],
  restore_success: ["Restored successfully", "بازیابی موفق بود"],
  restore_failed: ["Restore failed", "بازیابی ناموفق بود"],
  cycle_day_short: ["Day", "روز"],
  symptom_overlap_title: ["SYMPTOM OVERLAP", "هم‌پوشانی علائم"],
  predictability_title: ["CYCLE PREDICTABILITY", "پیش‌بینی‌پذیری سیکل"],
  less_predictable: ["Variable", "متغیر"],
  more_predictable: ["Consistent", "ثابت"],
  cycles: ["cycles", "سیکل"],
  install_app: ["Install app", "نصب اپ"],
  fertility_window: ["FERTILITY WINDOW", "پنجره باروری"],
  ovulation_day: ["Ovulation day", "روز تخمک‌گذاری"],
  fertile_days: ["Fertile days", "روزهای باروری"]
};

let currentLang = 0; // 0 = en, 1 = fa
function t(key) { return (STR[key] || [key, key])[currentLang]; }
function numStr(n) {
  if (currentLang === 0) return String(n);
  const map = {'0':'۰','1':'۱','2':'۲','3':'۳','4':'۴','5':'۵','6':'۶','7':'۷','8':'۸','9':'۹'};
  return String(n).split('').map(c => map[c] !== undefined ? map[c] : c).join('');
}

const MONTH_NAMES_FA = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
const MONTH_NAMES_EN = ["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"];

// ========================= تقویم شمسی =========================
function gregorianToJalali(gy, gm, gd) {
  const g_d_m = [0,31,59,90,120,151,181,212,243,273,304,334];
  let jy = (gy <= 1600) ? 0 : 979;
  gy -= (gy <= 1600) ? 621 : 1600;
  const gy2 = (gm > 2) ? (gy + 1) : gy;
  let days = (365*gy) + (Math.floor((gy2+3)/4)) - (Math.floor((gy2+99)/100)) + (Math.floor((gy2+399)/400)) - 80 + gd + g_d_m[gm-1];
  jy += 33*Math.floor(days/12053);
  days %= 12053;
  jy += 4*Math.floor(days/1461);
  days %= 1461;
  if (days > 365) { jy += Math.floor((days-1)/365); days = (days-1)%365; }
  let jm, jd;
  if (days < 186) { jm = 1 + Math.floor(days/31); jd = 1 + (days%31); }
  else { jm = 7 + Math.floor((days-186)/30); jd = 1 + ((days-186)%30); }
  return { year: jy, month: jm, day: jd };
}
function formatJalali(millis) {
  const d = new Date(millis);
  const j = gregorianToJalali(d.getFullYear(), d.getMonth()+1, d.getDate());
  const mname = currentLang === 1 ? MONTH_NAMES_FA[j.month-1] : MONTH_NAMES_EN[j.month-1];
  return `${numStr(j.day)} ${mname} ${numStr(j.year)}`;
}
function formatJalaliShort(millis) {
  const d = new Date(millis);
  const j = gregorianToJalali(d.getFullYear(), d.getMonth()+1, d.getDate());
  return `${numStr(j.year)}.${numStr(String(j.month).padStart(2,'0'))}.${numStr(String(j.day).padStart(2,'0'))}`;
}

// ========================= ابزار تاریخ =========================
const DAY_MS = 24*60*60*1000;
function todayMillis() {
  const d = new Date();
  d.setHours(0,0,0,0);
  return d.getTime();
}
function dayToMillis(year, month, day) {
  const d = new Date(year, month, day, 0, 0, 0, 0);
  return d.getTime();
}

// ========================= ذخیره‌سازی (localStorage) =========================
const Storage = {
  loadRecords() {
    try { return JSON.parse(localStorage.getItem('sage_records') || '[]'); }
    catch(e) { return []; }
  },
  saveRecords(records) {
    localStorage.setItem('sage_records', JSON.stringify(records));
  },
  loadDayLogs() {
    try { return JSON.parse(localStorage.getItem('sage_daylogs') || '{}'); }
    catch(e) { return {}; }
  },
  saveDayLogs(logs) {
    localStorage.setItem('sage_daylogs', JSON.stringify(logs));
  },
  getSettings() {
    try { return JSON.parse(localStorage.getItem('sage_settings') || '{}'); }
    catch(e) { return {}; }
  },
  saveSettings(s) {
    localStorage.setItem('sage_settings', JSON.stringify(s));
  },
  getHandledSuggestions() {
    try { return JSON.parse(localStorage.getItem('sage_suggestions') || '{}'); }
    catch(e) { return {}; }
  },
  saveHandledSuggestions(obj) {
    localStorage.setItem('sage_suggestions', JSON.stringify(obj));
  }
};

// ========================= تحلیل سیکل =========================
function computeWeightedAvg(cycles) {
  if (cycles.length === 0) return null;
  if (cycles.length === 1) return cycles[0];
  const recent = cycles.slice(-6);
  let weightedSum = 0, weightSum = 0;
  recent.forEach((c, i) => { const w = i+1; weightedSum += c*w; weightSum += w; });
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
  const sorted = [...records].sort((a,b) => a.start - b.start);
  const completed = records.filter(r => r.end != null);

  const cycleLengths = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    const diff = Math.round((sorted[i+1].start - sorted[i].start) / DAY_MS);
    if (diff >= 15 && diff <= 50) cycleLengths.push(diff);
  }
  const periodLengths = completed.map(r => Math.round((r.end - r.start)/DAY_MS) + 1);

  const avgCycle = computeWeightedAvg(cycleLengths);
  const avgPeriod = periodLengths.length ? Math.round(periodLengths.slice(-6).reduce((a,b)=>a+b,0)/periodLengths.slice(-6).length) : null;

  let stdDev = 0;
  if (cycleLengths.length >= 2 && avgCycle != null) {
    const variance = cycleLengths.reduce((s,c) => s + (c-avgCycle)*(c-avgCycle), 0) / cycleLengths.length;
    stdDev = Math.sqrt(variance);
  }
  const regularityScore = computeRegularityScore(stdDev, cycleLengths.length);
  let regularityLevel = 0;
  if (cycleLengths.length >= 2) {
    if (stdDev < 2) regularityLevel = 3;
    else if (stdDev < 4) regularityLevel = 2;
    else if (stdDev < 7) regularityLevel = 1;
  }

  let predictedNext = null, ovulationDay = null, fertilityStart = null, fertilityEnd = null;
  if (avgCycle != null && sorted.length > 0) {
    const lastStart = sorted[sorted.length-1].start;
    predictedNext = lastStart + avgCycle*DAY_MS;
    ovulationDay = predictedNext - 14*DAY_MS;
    fertilityStart = ovulationDay - 5*DAY_MS;
    fertilityEnd = ovulationDay;
  }
  const accuracyLevel = computeAccuracy(cycleLengths.length, stdDev);

  // فاز فعلی
  let currentPhase = 'unknown', dayInCycle = null;
  if (sorted.length > 0 && avgCycle != null) {
    const last = sorted[sorted.length-1];
    const today = todayMillis();
    if (last.end == null) {
      dayInCycle = Math.round((today - last.start)/DAY_MS) + 1;
      currentPhase = 'menstrual';
    } else {
      const daysSince = Math.round((today - last.start)/DAY_MS) + 1;
      const periodLen = Math.round((last.end - last.start)/DAY_MS) + 1;
      dayInCycle = daysSince;
      if (daysSince <= periodLen) currentPhase = 'menstrual';
      else if (daysSince < avgCycle - 16) currentPhase = 'follicular';
      else if (daysSince <= avgCycle - 12) currentPhase = 'ovulation';
      else currentPhase = 'luteal';
    }
  }

  return {
    avgCycle, avgPeriod, regularityScore, regularityLevel, predictedNext,
    ovulationDay, fertilityStart, fertilityEnd, accuracyLevel, stdDev,
    currentPhase, dayInCycle, cycleLengths, periodLengths
  };
}

// ========================= تشخیص الگو (هوش) =========================
function detectSymptomPatterns(records, dayLogs, minRate = 0.7, minCycles = 3) {
  const sorted = [...records].sort((a,b) => a.start - b.start);
  if (sorted.length < minCycles) return [];

  const symptomDayCounts = {};
  let cyclesAnalyzed = 0;

  for (let i = 0; i < sorted.length - 1; i++) {
    const cycleStart = sorted[i].start;
    const cycleEnd = sorted[i+1].start;
    const cycleLength = Math.round((cycleEnd - cycleStart)/DAY_MS);
    if (cycleLength < 15 || cycleLength > 50) continue;
    cyclesAnalyzed++;
    for (let dayOffset = 0; dayOffset < cycleLength; dayOffset++) {
      const dateMillis = cycleStart + dayOffset*DAY_MS;
      const log = dayLogs[dateMillis];
      if (!log) continue;
      const cycleDay = dayOffset + 1;
      (log.symptoms || []).forEach(sym => {
        if (!symptomDayCounts[sym]) symptomDayCounts[sym] = {};
        symptomDayCounts[sym][cycleDay] = (symptomDayCounts[sym][cycleDay] || 0) + 1;
      });
    }
  }
  if (cyclesAnalyzed < minCycles) return [];

  const patterns = [];
  Object.keys(symptomDayCounts).forEach(sym => {
    Object.keys(symptomDayCounts[sym]).forEach(day => {
      const count = symptomDayCounts[sym][day];
      const rate = count / cyclesAnalyzed;
      if (rate >= minRate) {
        patterns.push({ symptomKey: sym, cycleDay: parseInt(day), rate, count, total: cyclesAnalyzed });
      }
    });
  });
  return patterns.sort((a,b) => b.rate - a.rate);
}

function computeSymptomCorrelations(dayLogs) {
  const allSymptoms = new Set();
  Object.values(dayLogs).forEach(log => (log.symptoms || []).forEach(s => allSymptoms.add(s)));
  const keys = Array.from(allSymptoms);
  if (keys.length < 2) return [];

  const correlations = [];
  for (let i = 0; i < keys.length; i++) {
    for (let j = i+1; j < keys.length; j++) {
      const a = keys[i], b = keys[j];
      const daysWithA = Object.values(dayLogs).filter(l => (l.symptoms||[]).includes(a)).length;
      const daysWithBoth = Object.values(dayLogs).filter(l => (l.symptoms||[]).includes(a) && (l.symptoms||[]).includes(b)).length;
      if (daysWithA === 0) continue;
      correlations.push({ a, b, rate: daysWithBoth/daysWithA });
    }
  }
  return correlations.sort((x,y) => y.rate - x.rate);
}

function computePredictabilityTimeline(records, dayLogs) {
  const sorted = [...records].sort((a,b) => a.start - b.start);
  if (sorted.length < 3) return [];

  let avgCycleLength = 28;
  const lengths = [];
  for (let i = 0; i < sorted.length-1; i++) {
    const diff = Math.round((sorted[i+1].start - sorted[i].start)/DAY_MS);
    if (diff >= 15 && diff <= 50) lengths.push(diff);
  }
  if (lengths.length) avgCycleLength = Math.round(lengths.reduce((a,b)=>a+b,0)/lengths.length);

  const flowByDay = {}, symptomSetByDay = {};
  for (let i = 0; i < sorted.length-1; i++) {
    const cycleStart = sorted[i].start;
    const cycleEnd = sorted[i+1].start;
    const cycleLength = Math.round((cycleEnd-cycleStart)/DAY_MS);
    if (cycleLength < 15 || cycleLength > 50) continue;
    for (let dayOffset = 0; dayOffset < Math.min(cycleLength, avgCycleLength); dayOffset++) {
      const dateMillis = cycleStart + dayOffset*DAY_MS;
      const log = dayLogs[dateMillis];
      const cycleDay = dayOffset + 1;
      if (log) {
        if (!flowByDay[cycleDay]) flowByDay[cycleDay] = [];
        flowByDay[cycleDay].push(log.flow || 0);
        if (!symptomSetByDay[cycleDay]) symptomSetByDay[cycleDay] = [];
        symptomSetByDay[cycleDay].push(new Set(log.symptoms||[]));
      }
    }
  }

  const points = [];
  for (let day = 1; day <= avgCycleLength; day++) {
    const flows = flowByDay[day];
    if (!flows || flows.length < 2) { points.push({ day, score: 0 }); continue; }
    const mean = flows.reduce((a,b)=>a+b,0)/flows.length;
    const variance = flows.reduce((s,f) => s + (f-mean)*(f-mean), 0)/flows.length;
    const stdDev = Math.sqrt(variance);
    const flowConsistency = Math.max(0, Math.min(1, 1 - stdDev/1.5));

    const sets = symptomSetByDay[day];
    let symptomConsistency = 0.5;
    if (sets && sets.length >= 2) {
      let total = 0, pairs = 0;
      for (let a = 0; a < sets.length; a++) {
        for (let b = a+1; b < sets.length; b++) {
          const union = new Set([...sets[a], ...sets[b]]).size;
          const intersection = [...sets[a]].filter(x => sets[b].has(x)).length;
          total += union === 0 ? 1 : intersection/union;
          pairs++;
        }
      }
      if (pairs > 0) symptomConsistency = total/pairs;
    }
    const score = Math.max(0, Math.min(1, flowConsistency*0.6 + symptomConsistency*0.4));
    points.push({ day, score });
  }
  return points;
}

// ========================= مدیریت پیشنهادهای هوشمند =========================
function suggestionId(p) { return `${p.symptomKey}_day${p.cycleDay}`; }
function isHandled(id) { return Storage.getHandledSuggestions()[id] !== undefined; }
function markHandled(id, accepted) {
  const all = Storage.getHandledSuggestions();
  all[id] = accepted;
  Storage.saveHandledSuggestions(all);
}

// ========================= وضعیت کلی اپ =========================
const state = {
  records: Storage.loadRecords(),
  dayLogs: Storage.loadDayLogs(),
  currentTab: 0,
  currentMonth: new Date(),
  themeMode: Storage.getSettings().themeMode || 0,
  langMode: Storage.getSettings().langMode || 0,
  modal: null,
  editingRecord: null,
  selectedDay: null
};

function applyThemeAndLang() {
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = state.themeMode === 2 || (state.themeMode === 0 && systemDark);
  document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

  const systemLang = navigator.language.startsWith('fa') ? 1 : 0;
  currentLang = state.langMode === 1 ? 0 : state.langMode === 2 ? 1 : systemLang;
  document.documentElement.lang = currentLang === 1 ? 'fa' : 'en';
  document.documentElement.dir = currentLang === 1 ? 'rtl' : 'ltr';
}

function saveAndRefresh() {
  Storage.saveRecords(state.records);
  render();
}

function getActivePeriod() {
  return state.records.find(r => r.end == null) || null;
}

// ========================= رندر اصلی =========================
function render() {
  applyThemeAndLang();
  const app = document.getElementById('app');
  const analysis = analyzeCycle(state.records, state.dayLogs);
  const activePeriod = getActivePeriod();

  let tabHtml = '';
  if (state.currentTab === 0) tabHtml = renderCalendarTab(analysis, activePeriod);
  else if (state.currentTab === 1) tabHtml = renderHistoryTab();
  else tabHtml = renderStatsTab(analysis);

  app.innerHTML = `
    <div class="header">
      <div>
        <h1>${t('app_name')}</h1>
        <div class="subtitle">${currentLang===1?'هوش سیکل':'Cycle Intelligence'}</div>
      </div>
      <div class="header-icons">
        ${state.currentTab === 1 ? `<button class="icon-btn accent" onclick="openAddEdit(null)">+</button>` : ''}
        <button class="icon-btn" onclick="openSettings()">⋯</button>
      </div>
    </div>
    <div class="tab-content">${tabHtml}</div>
    <div class="bottom-nav">
      ${navItem(0, t('tab_calendar'))}
      ${navItem(1, t('tab_history'))}
      ${navItem(2, t('tab_insights'))}
    </div>
  `;

  if (state.modal) renderModal();
}

function navItem(idx, label) {
  const active = state.currentTab === idx;
  return `<div class="nav-item ${active?'active':''}" onclick="switchTab(${idx})">
    <span>${label}</span>
    <div class="nav-bar-indicator"></div>
  </div>`;
}
function switchTab(idx) { state.currentTab = idx; render(); }

// ========================= تب تقویم =========================
function renderCalendarTab(analysis, activePeriod) {
  const progress = analysis.dayInCycle ? Math.min(1, analysis.dayInCycle/(analysis.avgCycle||28)) : 0;
  const circumference = 2*Math.PI*120;
  const dashOffset = circumference*(1-progress);

  const heroSvg = `
    <svg width="260" height="260" viewBox="0 0 260 260">
      <circle cx="130" cy="130" r="120" fill="none" stroke="var(--bg-subtle)" stroke-width="14"/>
      <circle cx="130" cy="130" r="120" fill="none" stroke="var(--accent)" stroke-width="14"
        stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}"
        stroke-linecap="round" transform="rotate(-90 130 130)"/>
    </svg>`;

  const phaseLabel = analysis.currentPhase !== 'unknown' ? t('phase_'+analysis.currentPhase) : '';

  let calendarHtml = renderCalendarGrid(analysis);

  return `
    <div class="hero-circle-wrap">
      <div class="hero-circle">
        ${heroSvg}
        <div class="hero-inner">
          <div class="hero-label">${activePeriod ? t('active') : t('cycle_day')}</div>
          ${analysis.dayInCycle != null
            ? `<div class="hero-day">${numStr(analysis.dayInCycle)}</div><div class="hero-phase">${phaseLabel}</div>`
            : `<div class="hero-day" style="font-size:48px;color:var(--text-muted)">—</div><div class="hero-phase">${t('tap_below')}</div>`
          }
        </div>
      </div>
    </div>
    <div class="card">${calendarHtml}</div>
    ${activePeriod
      ? `<button class="secondary-btn" onclick="endPeriod()">${t('end_period')}</button>`
      : `<button class="primary-btn" onclick="startPeriod()">${t('start_period')}</button>`
    }
  `;
}

function renderCalendarGrid(analysis) {
  const month = state.currentMonth;
  const y = month.getFullYear(), m = month.getMonth();
  const jDate = gregorianToJalali(y, m+1, 15);
  const mname = currentLang===1 ? MONTH_NAMES_FA[jDate.month-1] : MONTH_NAMES_EN[jDate.month-1];

  const weekDays = currentLang===1 ? ['ش','ی','د','س','چ','پ','ج'] : ['S','S','M','T','W','T','F'];

  const firstOfMonth = new Date(y, m, 1);
  let firstDayIdx = firstOfMonth.getDay(); // 0=Sun
  firstDayIdx = (firstDayIdx + 1) % 7; // shift so Saturday=0
  const daysInMonth = new Date(y, m+1, 0).getDate();

  let cells = [];
  for (let i=0;i<firstDayIdx;i++) cells.push(null);
  for (let d=1; d<=daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const today = todayMillis();

  let gridHtml = '';
  cells.forEach(d => {
    if (d === null) { gridHtml += `<div class="day-cell"></div>`; return; }
    const millis = dayToMillis(y, m, d);
    const isPeriod = state.records.some(r => millis >= r.start && millis <= (r.end ?? r.start));
    const isToday = millis === today;
    const isOvulation = analysis.ovulationDay && millis === analysis.ovulationDay;
    const isFertile = analysis.fertilityStart && analysis.fertilityEnd && millis >= analysis.fertilityStart && millis <= analysis.fertilityEnd && !isOvulation;
    const hasLog = state.dayLogs[millis] != null;
    const jDay = gregorianToJalali(y, m+1, d).day;

    let circleClass = 'day-circle';
    if (isPeriod) circleClass += ' period';
    else if (isOvulation) circleClass += ' ovulation';
    else if (isFertile) circleClass += ' fertile';
    if (isToday) circleClass += ' today';

    gridHtml += `
      <div class="day-cell" onclick="openDayDetail(${millis})">
        <div class="${circleClass}">${numStr(jDay)}</div>
        ${hasLog ? '<div class="day-dot"></div>' : '<div style="height:6px"></div>'}
      </div>`;
  });

  return `
    <div class="calendar-header">
      <div class="month-year"><h2>${mname}</h2><span>${numStr(jDate.year)}</span></div>
      <div style="display:flex;gap:8px">
        <div class="nav-btn" onclick="changeMonth(-1)">‹</div>
        <div class="nav-btn" onclick="changeMonth(1)">›</div>
      </div>
    </div>
    <div class="weekdays">${weekDays.map(w=>`<div>${w}</div>`).join('')}</div>
    <div class="days-grid">${gridHtml}</div>
  `;
}

function changeMonth(delta) {
  const d = new Date(state.currentMonth);
  d.setMonth(d.getMonth()+delta);
  state.currentMonth = d;
  render();
}

function startPeriod() {
  if (getActivePeriod()) return;
  state.records.push({ start: todayMillis(), end: null, notes: '' });
  saveAndRefresh();
}
function endPeriod() {
  const active = getActivePeriod();
  if (!active) return;
  active.end = todayMillis();
  saveAndRefresh();
}

// ========================= تب تاریخچه =========================
function renderHistoryTab() {
  const records = state.records;
  const activePeriod = getActivePeriod();

  if (records.length === 0) {
    return `<div class="empty-state">
      <div class="title">${t('no_records')}</div>
      <div class="desc">${t('tap_plus')}</div>
    </div>`;
  }

  const sorted = [...records].sort((a,b) => b.start - a.start);
  const itemsHtml = sorted.map((r, idx) => {
    const originalIdx = state.records.indexOf(r);
    const isActive = r.end == null;
    const meta = isActive
      ? t('ongoing')
      : `${numStr(Math.round((r.end-r.start)/DAY_MS)+1)} ${t('days')} · ${t('ended')} ${formatJalaliShort(r.end)}`;
    return `
      <div class="history-card" onclick="openAddEdit(${originalIdx})">
        <div class="history-icon ${isActive?'active':'done'}">${isActive?'●':'✓'}</div>
        <div class="history-info">
          <div class="history-date">${formatJalali(r.start)}</div>
          <div class="history-meta">${meta}</div>
        </div>
        <div class="history-delete" onclick="event.stopPropagation();confirmDelete(${originalIdx})">×</div>
      </div>`;
  }).join('');

  return `
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:16px">
      ${numStr(records.length)} ${records.length===1?t('record_single'):t('records')}
    </div>
    ${itemsHtml}
  `;
}

function confirmDelete(idx) {
  if (confirm(t('delete_confirm'))) {
    state.records.splice(idx, 1);
    saveAndRefresh();
  }
}

// ========================= تب آمار =========================
function renderStatsTab(analysis) {
  let html = '';

  // پیشنهادهای هوشمند
  const patterns = detectSymptomPatterns(state.records, state.dayLogs)
    .filter(p => !isHandled(suggestionId(p))).slice(0,3);
  if (patterns.length > 0) {
    html += patterns.map(p => `
      <div class="suggestion-card">
        <div class="suggestion-dot"></div>
        <div class="suggestion-info">
          <div class="suggestion-title">${t(p.symptomKey)} · ${t('cycle_day_short')} ${numStr(p.cycleDay)}</div>
          <div class="suggestion-meta">${numStr(Math.round(p.rate*100))}٪ · ${numStr(p.count)}/${numStr(p.total)} ${t('cycles')}</div>
        </div>
        <div class="suggestion-actions">
          <div class="suggestion-action dismiss" onclick="dismissSuggestion('${suggestionId(p)}')">×</div>
          <div class="suggestion-action accept" onclick="acceptSuggestion('${suggestionId(p)}')">✓</div>
        </div>
      </div>
    `).join('');
  }

  // کارت پیش‌بینی
  if (analysis.predictedNext != null) {
    const daysUntil = Math.round((analysis.predictedNext - todayMillis())/DAY_MS);
    const accColor = analysis.accuracyLevel === 3 ? 'var(--success)' : analysis.accuracyLevel === 2 ? 'var(--warning)' : 'var(--danger)';
    const accLabel = analysis.accuracyLevel === 3 ? t('high') : analysis.accuracyLevel === 2 ? t('medium_acc') : analysis.accuracyLevel === 1 ? t('low') : t('very_low');
    const daysText = daysUntil > 0 ? `${t('in_days')} ${numStr(daysUntil)} ${t('days')}` : daysUntil === 0 ? t('today') : `${numStr(-daysUntil)} ${t('days_ago')}`;
    html += `
      <div class="prediction-card">
        <div class="prediction-top">
          <span class="prediction-label">${t('next_period')}</span>
          <span class="prediction-accuracy"><span class="accuracy-dot" style="background:${accColor}"></span>${accLabel}</span>
        </div>
        <div class="prediction-days">${daysText}</div>
        <div class="prediction-date">${formatJalali(analysis.predictedNext)}</div>
      </div>
    `;
  }

  // آمار کلی
  const completed = state.records.filter(r => r.end != null).length;
  html += `
    <div class="stat-grid">
      <div class="stat-box"><div class="label">${t('stat_records')}</div><div class="value">${numStr(state.records.length)}</div></div>
      <div class="stat-box"><div class="label">${t('stat_avg_cycle')}</div><div class="value">${analysis.avgCycle?numStr(analysis.avgCycle):'—'}<span class="suffix">${analysis.avgCycle?t('days'):''}</span></div></div>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="label">${t('stat_avg_duration')}</div><div class="value">${analysis.avgPeriod?numStr(analysis.avgPeriod):'—'}<span class="suffix">${analysis.avgPeriod?t('days'):''}</span></div></div>
      <div class="stat-box"><div class="label">${t('stat_completed')}</div><div class="value">${numStr(completed)}</div></div>
    </div>
  `;

  // پیش‌بینی‌پذیری
  const predictability = computePredictabilityTimeline(state.records, state.dayLogs);
  if (predictability.length >= 5) {
    const segs = predictability.map(p => `<div class="timeline-seg" style="background:rgba(143,166,142,${0.15+p.score*0.85})"></div>`).join('');
    html += `
      <div class="card">
        <div class="card-label">${t('predictability_title')}</div>
        <div class="timeline-bar">${segs}</div>
        <div class="timeline-legend"><span>${t('less_predictable')}</span><span>${t('more_predictable')}</span></div>
      </div>
    `;
  }

  // هم‌پوشانی علائم
  const correlations = computeSymptomCorrelations(state.dayLogs).slice(0,6);
  if (correlations.length > 0) {
    const rows = correlations.map(c => `
      <div class="heatmap-row">
        <div class="heatmap-labels">${t(c.a)} × ${t(c.b)}</div>
        <div class="heatmap-bar-bg"><div class="heatmap-bar-fill" style="width:${c.rate*100}%;opacity:${0.4+c.rate*0.6}"></div></div>
      </div>
    `).join('');
    html += `<div class="card"><div class="card-label">${t('symptom_overlap_title')}</div>${rows}</div>`;
  }

  // پنجره باروری
  if (analysis.fertilityStart && analysis.ovulationDay) {
    html += `
      <div class="card">
        <div class="card-label" style="color:var(--fertility)">${t('fertility_window')}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <div style="width:10px;height:10px;border-radius:50%;background:var(--ovulation)"></div>
          <div>
            <div style="font-size:10px;color:var(--text-muted)">${t('ovulation_day')}</div>
            <div style="font-size:14px;font-weight:600">${formatJalali(analysis.ovulationDay)}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:10px;height:10px;border-radius:50%;background:rgba(181,165,116,0.5)"></div>
          <div>
            <div style="font-size:10px;color:var(--text-muted)">${t('fertile_days')}</div>
            <div style="font-size:14px;font-weight:600">${formatJalaliShort(analysis.fertilityStart)} — ${formatJalaliShort(analysis.fertilityEnd)}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (state.records.length === 0) {
    html = `<div class="empty-state"><div class="title">${t('no_records')}</div><div class="desc">${t('tap_plus')}</div></div>`;
  }

  return html;
}

function dismissSuggestion(id) { markHandled(id, false); render(); }
function acceptSuggestion(id) {
  markHandled(id, true);
  showToast(t('done'));
  render();
}

function showToast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

// ========================= دیالوگ افزودن/ویرایش =========================
function openAddEdit(idx) {
  state.editingRecord = idx;
  state.modal = 'addEdit';
  state._tempStart = idx != null ? state.records[idx].start : todayMillis();
  state._tempEnd = idx != null ? state.records[idx].end : null;
  state._tempNotes = idx != null ? state.records[idx].notes : '';
  render();
}
function closeModal() { state.modal = null; render(); }

function renderAddEditModal() {
  const isEdit = state.editingRecord != null;
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-card">
        <div class="modal-title">${isEdit?t('edit_record'):t('new_record')}</div>
        <label class="field-label">${t('start_date')}</label>
        <input type="date" class="field-box" id="startDateInput" value="${toDateInputValue(state._tempStart)}" onchange="state._tempStart=fromDateInputValue(this.value)">
        <label class="field-label">${t('end_date')}</label>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:16px">
          <input type="date" class="field-box" style="margin-bottom:0" id="endDateInput" value="${state._tempEnd?toDateInputValue(state._tempEnd):''}" onchange="state._tempEnd=this.value?fromDateInputValue(this.value):null">
          ${state._tempEnd ? `<button onclick="state._tempEnd=null;render()" style="color:var(--accent);font-size:12px;white-space:nowrap">${t('clear')}</button>` : ''}
        </div>
        <label class="field-label">${t('notes')}</label>
        <textarea class="field-box" rows="3" placeholder="${t('add_notes')}" onchange="state._tempNotes=this.value">${state._tempNotes||''}</textarea>
        <div class="modal-actions">
          <button class="modal-btn cancel" onclick="closeModal()">${t('cancel')}</button>
          <button class="modal-btn save" onclick="saveAddEdit()">${t('save')}</button>
        </div>
      </div>
    </div>
  `;
}
function toDateInputValue(millis) {
  const d = new Date(millis);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function fromDateInputValue(str) {
  const [y,m,d] = str.split('-').map(Number);
  return new Date(y, m-1, d, 0,0,0,0).getTime();
}
function saveAddEdit() {
  const rec = { start: state._tempStart, end: state._tempEnd, notes: state._tempNotes || '' };
  if (state.editingRecord != null) state.records[state.editingRecord] = rec;
  else state.records.push(rec);
  state.modal = null;
  saveAndRefresh();
}

// ========================= دیالوگ جزئیات روز =========================
const SYMPTOM_KEYS = ['sym_headache','sym_cramps','sym_fatigue','sym_bloating','sym_nausea','sym_backache','sym_breast','sym_acne','sym_insomnia','sym_cravings'];
const MOOD_KEYS = ['mood_great','mood_good','mood_okay','mood_bad','mood_awful'];
const MOOD_EMOJI = ['◉','◎','○','◐','●'];

function openDayDetail(millis) {
  state.selectedDay = millis;
  const log = state.dayLogs[millis] || {};
  state._tempFlow = log.flow || 0;
  state._tempPain = log.pain || 0;
  state._tempMood = log.mood != null ? log.mood : -1;
  state._tempSymptoms = new Set(log.symptoms || []);
  state._tempNote = log.note || '';
  state.modal = 'dayDetail';
  render();
}

function renderDayDetailModal() {
  const millis = state.selectedDay;
  const isPeriodDay = state.records.some(r => millis >= r.start && millis <= (r.end ?? r.start));
  const flowLabels = [t('flow_none'),t('flow_light'),t('flow_medium'),t('flow_heavy')];

  let flowChips = flowLabels.map((lbl,i) => `<div class="chip ${state._tempFlow===i?'selected':''}" onclick="state._tempFlow=${i};render()">${lbl}</div>`).join('');

  let painCells = '';
  for (let i=0;i<=10;i++) {
    const sel = state._tempPain >= i && i > 0 || (i===0 && state._tempPain===0);
    const isCurrent = state._tempPain === i;
    painCells += `<div class="pain-cell ${isCurrent?'selected':''}" onclick="state._tempPain=${i};render()">${numStr(i)}</div>`;
  }

  let moodRow = MOOD_KEYS.map((k,i) => `
    <div class="mood-item ${state._tempMood===i?'selected':''}" onclick="state._tempMood=state._tempMood===${i}?-1:${i};render()">
      <span class="sym">${MOOD_EMOJI[i]}</span><span class="lbl">${t(k)}</span>
    </div>`).join('');

  let symptomGrid = SYMPTOM_KEYS.map(k => `
    <div class="symptom-chip ${state._tempSymptoms.has(k)?'selected':''}" onclick="toggleSymptom('${k}')">${t(k)}</div>
  `).join('');

  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
          <div>
            <div style="font-size:11px;color:var(--text-muted)">${t('day_details')}</div>
            <div style="font-size:20px;font-weight:700;margin-top:4px">${formatJalali(millis)}</div>
          </div>
          ${isPeriodDay ? `<div style="background:var(--accent-soft);color:var(--accent-dark);padding:6px 12px;border-radius:10px;font-size:11px;font-weight:600">${t('period_day')}</div>` : ''}
        </div>

        <label class="field-label">${t('flow')}</label>
        <div class="chip-row">${flowChips}</div>

        <label class="field-label">${t('pain')} <span style="float:left;color:var(--accent);font-weight:700">${numStr(state._tempPain)}/${numStr(10)}</span></label>
        <div class="pain-scale">${painCells}</div>

        <label class="field-label">${t('mood')}</label>
        <div class="mood-row">${moodRow}</div>

        <label class="field-label">${t('symptoms')}</label>
        <div class="symptom-grid">${symptomGrid}</div>

        <label class="field-label">${t('notes')}</label>
        <textarea class="field-box" rows="2" placeholder="${t('add_notes')}" onchange="state._tempNote=this.value">${state._tempNote||''}</textarea>

        <div class="modal-actions">
          <button class="modal-btn cancel" onclick="closeModal()">${t('cancel')}</button>
          <button class="modal-btn save" onclick="saveDayDetail()">${t('save')}</button>
        </div>
      </div>
    </div>
  `;
}
function toggleSymptom(key) {
  if (state._tempSymptoms.has(key)) state._tempSymptoms.delete(key);
  else state._tempSymptoms.add(key);
  render();
}
function saveDayDetail() {
  const millis = state.selectedDay;
  const log = {
    flow: state._tempFlow, pain: state._tempPain, mood: state._tempMood,
    symptoms: Array.from(state._tempSymptoms), note: state._tempNote || ''
  };
  const isEmpty = log.flow===0 && log.pain===0 && log.mood===-1 && log.symptoms.length===0 && !log.note;
  if (isEmpty) delete state.dayLogs[millis];
  else state.dayLogs[millis] = log;
  Storage.saveDayLogs(state.dayLogs);
  state.modal = null;
  render();
}

// ========================= دیالوگ تنظیمات (نسخه‌ی اولیه، ساده) =========================
function openSettings() { state.modal = 'settings'; render(); }

function renderSettingsModal() {
  const langs = [t('lang_auto'), t('lang_english'), t('lang_persian')];
  const themes = [t('theme_auto'), t('theme_light'), t('theme_dark')];
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-card">
        <div class="modal-title">${t('settings')}</div>

        <div class="settings-section-label">${t('language')}</div>
        <div class="settings-option-row">
          ${langs.map((l,i)=>`<div class="settings-option ${state.langMode===i?'selected':''}" onclick="setLangMode(${i})">${l}</div>`).join('')}
        </div>

        <div class="settings-section-label">${t('appearance')}</div>
        <div class="settings-option-row">
          ${themes.map((l,i)=>`<div class="settings-option ${state.themeMode===i?'selected':''}" onclick="setThemeMode(${i})">${l}</div>`).join('')}
        </div>

        <div class="settings-section-label">${t('backup_restore')}</div>
        <div class="action-row" onclick="downloadBackup()">
          <div class="t">${t('create_backup')}</div>
          <div class="d">${t('create_backup_desc')}</div>
        </div>
        <div class="action-row" onclick="document.getElementById('restoreFileInput').click()">
          <div class="t">${t('restore_backup')}</div>
          <div class="d">${t('restore_backup_desc')}</div>
        </div>
        <input type="file" id="restoreFileInput" accept="application/json" style="display:none" onchange="handleRestoreFile(event)">

        <div class="modal-actions" style="margin-top:20px">
          <button class="modal-btn save" style="width:100%" onclick="closeModal()">${t('done')}</button>
        </div>
      </div>
    </div>
  `;
}
function setLangMode(mode) {
  state.langMode = mode;
  Storage.saveSettings({...Storage.getSettings(), langMode: mode});
  render();
}
function setThemeMode(mode) {
  state.themeMode = mode;
  Storage.saveSettings({...Storage.getSettings(), themeMode: mode});
  render();
}

// ========================= بکاپ و بازیابی =========================
function downloadBackup() {
  const data = {
    backup_version: 1,
    exported_at: Date.now(),
    app: 'Sage',
    records: state.records,
    day_logs: state.dayLogs
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0,16).replace(/[-:T]/g,'').slice(0,12);
  a.href = url;
  a.download = `Sage_Backup_${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function handleRestoreFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!confirm(t('restore_confirm_desc'))) { event.target.value = ''; return; }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.records || !data.day_logs) throw new Error('invalid format');
      state.records = data.records;
      state.dayLogs = data.day_logs;
      Storage.saveRecords(state.records);
      Storage.saveDayLogs(state.dayLogs);
      state.modal = null;
      showToast(t('restore_success'));
      render();
    } catch (err) {
      alert(t('restore_failed'));
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ========================= مودال دیسپچر =========================
function renderModal() {
  const overlay = document.createElement('div');
  overlay.id = 'modalRoot';
  document.body.appendChild(overlay);
  let html = '';
  if (state.modal === 'addEdit') html = renderAddEditModal();
  else if (state.modal === 'dayDetail') html = renderDayDetailModal();
  else if (state.modal === 'settings') html = renderSettingsModal();
  document.getElementById('modalRoot').outerHTML = html;
}

// ========================= راه‌اندازی اولیه =========================
render();

// ثبت Service Worker برای قابلیت PWA (نصب و کارکرد آفلاین)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
