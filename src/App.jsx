import { useState, useRef, useEffect } from "react";

const I18N = {
  ja: {
    appTagline: "シンガポール限定・ポップな求人マッチング",
    filterLabel: "絞り込み",
    jobsFound: (n) => `${n}件の求人が見つかりました`,
    all: "すべて", cafe: "カフェ", event: "イベント", retail: "販売", noexp: "未経験OK", highpay: "高時給",
    featured: "✨ 特選求人", urgent: "🔥 超急募",
    details: "詳細を見る", apply: "今すぐ応募 🚀", favorite: "お気に入り",
    close: "閉じる",
    payLabel: "給与", locationLabel: "勤務地", accessLabel: "アクセス",
    noJobs: "このカテゴリの求人は現在準備中です",
    noJobsSub: "上の特選求人をぜひチェック！",
    toastApplied: (title) => `🎉 「${title}」に応募しました！`,
    pinnedBadges: ["超高収入💰", "未経験歓迎", "絶品まかない付き", "温泉入り放題♨️"],
    jobs: [
      {
        id: 1, pinned: true, emoji: "♨️",
        title: "【超急募】日本の風情漂う\n高級温泉旅館スタッフ",
        pay: "$50.00 / 時", payNote: "（約¥5,000）",
        location: "211教室", access: "MRTから徒歩3分",
        category: ["cafe","event","retail","noexp","highpay"],
        badges: [],
      },
      {
        id: 2, emoji: "☕",
        title: "マリーナベイの絶景\nポップアップカフェスタッフ",
        pay: "$15.00 / 時", location: "Marina Bay", access: "MRT直結",
        category: ["cafe"],
        badges: ["オシャレな制服", "週2日～OK", "学生歓迎"],
      },
      {
        id: 3, emoji: "🎵",
        title: "週末限定！J-POPフェス\n運営イベントスタッフ",
        pay: "$140.00 / 日", location: "Expo", access: "MRTから徒歩5分",
        category: ["event"],
        badges: ["髪型・ネイル自由", "友達同士OK", "日払い可"],
      },
      {
        id: 4, emoji: "🛍️",
        title: "日系ライフスタイルショップ\n販売・接客",
        pay: "$13.50 / 時", location: "Somerset", access: "MRT駅チカ",
        category: ["retail","noexp"],
        badges: ["交通費全額支給", "社割あり", "語学力不問"],
      },
      {
        id: 5, emoji: "🍜",
        title: "アニメカフェの\nキッチンアシスタント",
        pay: "$14.00 / 時", location: "Bugis", access: "MRTから徒歩2分",
        category: ["cafe","noexp"],
        badges: ["髪型自由", "WワークOK", "未経験歓迎"],
      },
    ],
  },
  en: {
    appTagline: "Singapore's Brightest Job Matching Platform",
    filterLabel: "Filter",
    jobsFound: (n) => `${n} jobs found`,
    all: "All", cafe: "Café", event: "Event", retail: "Retail", noexp: "No Exp.", highpay: "High Pay",
    featured: "✨ Featured", urgent: "🔥 Urgent",
    details: "View Details", apply: "Apply Now 🚀", favorite: "Favourite",
    close: "Close",
    payLabel: "Pay", locationLabel: "Location", accessLabel: "Access",
    noJobs: "No jobs in this category right now",
    noJobsSub: "Check out our featured job above!",
    toastApplied: (title) => `🎉 Applied for "${title}"!`,
    pinnedBadges: ["Top Pay 💰", "No Exp. Needed", "Free Staff Meals", "Free Hot Spring ♨️"],
    jobs: [
      {
        id: 1, pinned: true, emoji: "♨️",
        title: "[URGENT] Authentic Japanese\nHot Spring Resort Staff",
        pay: "$50.00 / hr", payNote: "(approx. ¥5,000)",
        location: "211教室", access: "3 min walk from MRT",
        category: ["cafe","event","retail","noexp","highpay"],
        badges: [],
      },
      {
        id: 2, emoji: "☕",
        title: "Scenic Pop-Up Café Staff\nat Marina Bay",
        pay: "$15.00 / hr", location: "Marina Bay", access: "Direct MRT access",
        category: ["cafe"],
        badges: ["Stylish Uniform", "2 Days/wk OK", "Students Welcome"],
      },
      {
        id: 3, emoji: "🎵",
        title: "Weekend J-POP Festival\nEvent Staff",
        pay: "$140.00 / day", location: "Expo", access: "5 min walk from MRT",
        category: ["event"],
        badges: ["Hair/Nails Free", "Friends OK", "Same-day Pay"],
      },
      {
        id: 4, emoji: "🛍️",
        title: "Japanese Lifestyle Shop\nSales Associate",
        pay: "$13.50 / hr", location: "Somerset", access: "Near MRT",
        category: ["retail","noexp"],
        badges: ["Transport Paid", "Staff Discount", "No Language Req."],
      },
      {
        id: 5, emoji: "🍜",
        title: "Anime Café\nKitchen Assistant",
        pay: "$14.00 / hr", location: "Bugis", access: "2 min walk from MRT",
        category: ["cafe","noexp"],
        badges: ["Hair Free", "2nd Job OK", "No Exp. Welcome"],
      },
    ],
  },
  zh: {
    appTagline: "新加坡限定・活力求职平台",
    filterLabel: "筛选",
    jobsFound: (n) => `找到 ${n} 个职位`,
    all: "全部", cafe: "咖啡厅", event: "活动", retail: "零售", noexp: "无需经验", highpay: "高时薪",
    featured: "✨ 精选职位", urgent: "🔥 紧急招募",
    details: "查看详情", apply: "立即应聘 🚀", favorite: "收藏",
    close: "关闭",
    payLabel: "薪资", locationLabel: "地点", accessLabel: "交通",
    noJobs: "该类别暂无职位",
    noJobsSub: "请查看上方精选职位！",
    toastApplied: (title) => `🎉 已成功投递「${title}」！`,
    pinnedBadges: ["超高薪资💰", "无需经验", "提供员工餐♨️", "免费泡温泉♨️"],
    jobs: [
      {
        id: 1, pinned: true, emoji: "♨️",
        title: "【紧急招募】日式高级\n温泉旅馆员工",
        pay: "$50.00 / 时", payNote: "（约¥5,000）",
        location: "211教室", access: "地铁站步行3分钟",
        category: ["cafe","event","retail","noexp","highpay"],
        badges: [],
      },
      {
        id: 2, emoji: "☕",
        title: "滨海湾绝景\n快闪咖啡厅员工",
        pay: "$15.00 / 时", location: "Marina Bay", access: "地铁直达",
        category: ["cafe"],
        badges: ["时尚制服", "每周2天可", "欢迎学生"],
      },
      {
        id: 3, emoji: "🎵",
        title: "周末限定！J-POP音乐节\n活动工作人员",
        pay: "$140.00 / 天", location: "博览城 Expo", access: "步行5分钟",
        category: ["event"],
        badges: ["发型自由", "朋友同行OK", "当日结算"],
      },
      {
        id: 4, emoji: "🛍️",
        title: "日系生活方式店铺\n销售接待",
        pay: "$13.50 / 时", location: "Somerset", access: "近地铁站",
        category: ["retail","noexp"],
        badges: ["全额报销交通费", "员工折扣", "语言不限"],
      },
      {
        id: 5, emoji: "🍜",
        title: "动漫主题咖啡厅\n厨房助理",
        pay: "$14.00 / 时", location: "武吉士 Bugis", access: "步行2分钟",
        category: ["cafe","noexp"],
        badges: ["发型自由", "兼职OK", "欢迎新手"],
      },
    ],
  },
};

const FILTERS_KEYS = ["all","cafe","event","retail","noexp","highpay"];

const BADGE_COLORS = [
  "bg-orange-100 text-orange-700",
  "bg-yellow-100 text-yellow-700",
  "bg-green-100 text-green-700",
  "bg-pink-100 text-pink-700",
];

function Confetti({ show }) {
  if (!show) return null;
  const pieces = Array.from({ length: 24 }, (_, i) => i);
  const colors = ["#FF6B2B","#FFD600","#4ADE80","#FF4DA6","#38BDF8","#A78BFA"];
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((i) => (
        <div key={i} style={{
          position:"absolute",
          left:`${5+(i*4)%90}%`,
          top:`${(i*7)%60}%`,
          width: i%2===0?12:8, height: i%2===0?12:8,
          borderRadius: i%3===0?"50%":2,
          background: colors[i%colors.length],
          animation:`cffall 1.4s ease-out ${i*0.04}s forwards`,
          transform:`rotate(${i*25}deg)`,
        }}/>
      ))}
      <style>{`@keyframes cffall{0%{opacity:1;transform:translateY(-30px) rotate(0deg);}100%{opacity:0;transform:translateY(250px) rotate(720deg);}}`}</style>
    </div>
  );
}

function JobCard({ job, lang, t, onApply, isHighlighted }) {
  const [liked, setLiked] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const isPinned = job.pinned;
  const badges = isPinned ? t.pinnedBadges : job.badges;

  return (
    <>
      <div className={`relative rounded-2xl p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        ${isPinned
          ? "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-400"
          : "bg-white border border-gray-100"}
        ${isHighlighted ? "ring-4 ring-orange-500 ring-offset-2 animate-pulse" : ""}
      `}>
        {isPinned && (
          <div className="absolute -top-3.5 left-3 flex gap-2 flex-wrap">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-black px-3 py-1 rounded-full shadow">{t.featured}</span>
            <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full shadow animate-bounce">{t.urgent}</span>
          </div>
        )}

        <div className="flex items-start justify-between gap-2 mt-2">
          <div className="flex items-start gap-3">
            <span className="text-3xl">{job.emoji}</span>
            <div>
              <h3 className={`font-bold leading-snug whitespace-pre-line ${isPinned?"text-amber-800 text-base":"text-gray-800 text-sm"}`}>{job.title}</h3>
            </div>
          </div>
          <button onClick={()=>setLiked(l=>!l)} className="text-2xl flex-shrink-0 transition-transform active:scale-125" aria-label={t.favorite}>
            {liked?"❤️":"🤍"}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-2">
          <span className={`font-extrabold ${isPinned?"text-orange-600 text-2xl":"text-orange-500 text-lg"}`}>{job.pay}</span>
          {job.payNote&&<span className="text-xs text-gray-400">{job.payNote}</span>}
        </div>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
          <span>📍 {job.location}</span>
          <span>🚇 {job.access}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {badges.map((b,i)=>(
            <span key={b} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${BADGE_COLORS[i%BADGE_COLORS.length]}`}>{b}</span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={()=>setShowDetail(true)} className="flex-1 text-sm font-semibold py-2.5 rounded-xl border-2 border-orange-300 text-orange-500 hover:bg-orange-50 transition-colors">
            {t.details}
          </button>
          <button onClick={()=>onApply(job)} className={`flex-1 text-sm font-bold py-2.5 rounded-xl text-white transition-all active:scale-95 ${isPinned?"bg-gradient-to-r from-orange-500 to-amber-400 shadow-md hover:shadow-lg":"bg-orange-400 hover:bg-orange-500"}`}>
            {t.apply}
          </button>
        </div>
      </div>

      {showDetail&&(
        <div className="fixed inset-0 z-40 bg-black/40 flex items-end justify-center p-4" onClick={()=>setShowDetail(false)}>
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl" onClick={e=>e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">{job.emoji}</span>
              <button onClick={()=>setShowDetail(false)} className="text-gray-400 text-2xl leading-none">✕</button>
            </div>
            <h3 className="font-bold text-gray-800 text-base leading-snug whitespace-pre-line mb-4">{job.title}</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">{t.payLabel}</span><span className="font-bold text-orange-600">{job.pay} {job.payNote||""}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">{t.locationLabel}</span><span className="font-medium">{job.location}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">{t.accessLabel}</span><span className="font-medium">{job.access}</span></div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {badges.map((b,i)=>(
                <span key={b} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${BADGE_COLORS[i%BADGE_COLORS.length]}`}>{b}</span>
              ))}
            </div>
            <button onClick={()=>{setShowDetail(false);onApply(job);}} className="mt-5 w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold py-3 rounded-2xl text-sm shadow hover:shadow-md active:scale-95 transition-all">
              {t.apply}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const LANG_LABELS = { ja:"🇯🇵 日本語", en:"🇬🇧 English", zh:"🇨🇳 中文" };

export default function ObamyApp() {
  const [lang, setLang] = useState("ja");
  const [activeFilter, setActiveFilter] = useState("all");
  const [confetti, setConfetti] = useState(false);
  const [toast, setToast] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const pinnedRef = useRef(null);

  const t = I18N[lang];
  const pinnedJob = t.jobs[0];
  const otherJobs = t.jobs.slice(1);
  const filteredOthers = activeFilter==="all" ? otherJobs : otherJobs.filter(j=>j.category.includes(activeFilter));

  // reset filter when lang changes if label changes (keys are shared so no reset needed)

  function handleApply(job) {
    setConfetti(true);
    setToast(t.toastApplied(job.title.replace(/\n/," ")));
    setTimeout(()=>{setConfetti(false);setToast(null);},2500);
  }

  function scrollToPinned() {
    pinnedRef.current?.scrollIntoView({behavior:"smooth", block:"center"});
    setHighlighted(true);
    setTimeout(()=>setHighlighted(false), 2000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Confetti show={confetti}/>

      {/* Toast */}
      {toast&&(
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white border-2 border-orange-400 text-orange-700 font-bold text-sm px-5 py-3 rounded-2xl shadow-xl whitespace-nowrap">
          {toast}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-orange-100 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            <div>
              <h1 className="text-xl font-black text-orange-500 leading-none tracking-tight">オバミー</h1>
              <p className="text-[9px] text-gray-400 font-medium tracking-widest uppercase">Obamy · SG Jobs</p>
            </div>
          </div>

          {/* Language switcher */}
          <div className="flex gap-1">
            {Object.entries(LANG_LABELS).map(([code,label])=>(
              <button key={code} onClick={()=>{setLang(code);setActiveFilter("all");}}
                className={`text-xs font-bold px-2.5 py-1.5 rounded-full border-2 transition-all ${lang===code?"bg-orange-500 text-white border-orange-500 shadow":"bg-white text-gray-500 border-gray-200 hover:border-orange-300"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-10">
        {/* Hero banner for pinned job */}
        <div onClick={scrollToPinned} className="mt-4 cursor-pointer bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 rounded-2xl p-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all active:scale-98">
          <span className="text-4xl">♨️</span>
          <div className="flex-1">
            <p className="text-white text-xs font-bold opacity-80 uppercase tracking-wider mb-0.5">
              {lang==="ja"?"今イチ押し！" : lang==="en"?"🔥 Top Pick!" : "🔥 强力推荐！"}
            </p>
            <p className="text-white font-black text-sm leading-tight">
              {lang==="ja"?"高級温泉旅館スタッフ" : lang==="en"?"Hot Spring Resort Staff" : "温泉旅馆员工"}
            </p>
            <p className="text-white text-lg font-extrabold mt-0.5">$50.00 / {lang==="ja"?"時":lang==="en"?"hr":"时"}</p>
          </div>
          <span className="text-white text-xl">→</span>
        </div>

        {/* Filters */}
        <div className="py-4">
          <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">{t.filterLabel}</p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {FILTERS_KEYS.map(key=>(
              <button key={key} onClick={()=>setActiveFilter(key)}
                className={`flex-shrink-0 text-xs font-bold px-4 py-2 rounded-full border-2 transition-all ${activeFilter===key?"bg-orange-500 text-white border-orange-500 shadow-md scale-105":"bg-white text-gray-500 border-gray-200 hover:border-orange-300"}`}>
                {t[key]}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">{t.jobsFound(1+filteredOthers.length)}</p>

        {/* Job list */}
        <div className="space-y-4">
          <div ref={pinnedRef}>
            <JobCard job={pinnedJob} lang={lang} t={t} onApply={handleApply} isHighlighted={highlighted}/>
          </div>
          {filteredOthers.length>0 ? filteredOthers.map(job=>(
            <JobCard key={job.id} job={job} lang={lang} t={t} onApply={handleApply} isHighlighted={false}/>
          )) : (
            <div className="text-center py-10 text-gray-400">
              <p className="text-4xl mb-2">🔍</p>
              <p className="text-sm font-medium">{t.noJobs}</p>
              <p className="text-xs mt-1">{t.noJobsSub}</p>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-300 mt-8">{t.appTagline}</p>
      </main>
    </div>
  );
}
