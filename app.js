const app = document.querySelector('#app');
const nav = document.querySelector('nav');
const menuButton = document.querySelector('.menu-button');

const SERVICE_LINKS = {
  booking: 'https://lin.ee/yxkj3pE',
  course: 'https://hangedmysteryori.my1shop.com/520if4'
};

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function button(label, href, primary = false) {
  const externalAttrs = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
  return '<a class="btn ' + (primary ? 'primary' : '') + '" href="' + href + '"' + externalAttrs + '>' + label + '</a>';
}

function nextStep(text, label, href) {
  return '<div class="next-step"><span>下一步</span><p>' + text + '</p>' + (href ? button(label, href) : '') + '</div>';
}

function serviceCard(title, body, label, href, primary = false) {
  return '<article class="content-card service-choice"><span class="eyebrow">Ori Service</span><h3>' + title + '</h3><p>' + body + '</p><div class="button-row">' + button(label, href, primary) + '</div></article>';
}

function setMeta({ title, description, ogTitle, ogDescription }) {
  document.title = title || '世界樹觀測者 Ori｜盧恩符文學習';
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  if (metaDescription && description) metaDescription.setAttribute('content', description);
  if (ogTitleMeta && ogTitle) ogTitleMeta.setAttribute('content', ogTitle);
  if (ogDescriptionMeta && ogDescription) ogDescriptionMeta.setAttribute('content', ogDescription);
}

function homePage() {
  const featured = RUNES.slice(0, 4).map(r => (
    '<a class="rune-teaser" href="#/rune/' + r.slug + '">' +
      '<span class="symbol">' + r.symbol + '</span><span><b>' + r.name + '</b><br><small class="muted">' + r.chineseName + ' · ' + r.keywords[0] + '</small></span>' +
    '</a>'
  )).join('');
  return [
    '<section class="hero"><div class="wrap"><div class="hero-copy">',
    '<span class="eyebrow">Elder Futhark · Beginner Rune Guide</span>',
    '<h1>盧恩符文初學者，<br>從這裡開始學</h1>',
    '<p class="lead">這是一座為初學者設計的盧恩符文學習網站。你可以認識 Elder Futhark 24 枚符文、理解每一枚符文的核心含義，並用每日一符文練習自我覺察。</p>',
    '<div class="hero-points"><span>24 枚符文總覽</span><span>單一符文詳解</span><span>每日抽符文練習</span></div>',
    '<div class="button-row">', button('新手從這裡開始', '#/start-here', true), button('抽取今日符文', '#/daily'), '</div>',
    '</div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">About Runes</span><h2>盧恩，是照見當下的鏡子</h2></div>',
    '<p>盧恩不只是古老的文字，也是一套理解世界與自我的象徵系統。每一枚符文都像一道門，帶你看見處境、力量，以及生命正在要求你學會的課題。</p></div>',
    '<div class="learn-grid"><article class="learn-card"><h3>先認識符文</h3><p>從名稱、符號與核心關鍵字開始，不必一次背完所有答案。</p></article>',
    '<article class="learn-card"><h3>看見兩種狀態</h3><p>閱讀正位與陰影解讀，理解同一股力量如何流動，或如何失衡。</p></article>',
    '<article class="learn-card"><h3>帶回你的生活</h3><p>連結感情與日常經驗，問自己：這枚符文正在提醒我什麼？</p></article></div></div></section>',
    '<section class="section"><div class="wrap"><div class="cta soft-cta"><span class="eyebrow">Start Here</span><h2>第一次接觸盧恩？</h2>',
    '<p class="lead">從新手入門開始，先理解符文的基本概念、學習順序與每日練習方式。</p>',
    '<div class="button-row">', button('新手從這裡開始', '#/start-here', true), '</div></div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Begin the Journey</span><h2>從第一組符文開始</h2></div>', button('查看完整總覽', '#/runes'), '</div>',
    '<div class="learn-grid">', featured, '</div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">A Reading with Ori</span><h2>你想被解讀，還是想自己學會？</h2></div>',
    '<p>如果你想更深入理解感情、關係、選擇與生命轉化，可以選擇一對一占卜，也可以從課程建立自己的解讀系統。</p></div>',
    '<div class="service-grid">',
    serviceCard('我想被解讀', '適合正在面對感情困惑、關係不確定、人生選擇，想透過盧恩看見目前狀態與下一步的人。', '預約盧恩占卜', SERVICE_LINKS.booking, true),
    serviceCard('我想自己學會', '適合想從零建立符文語感，學會自己理解 24 枚盧恩，並應用在自我探索與日常覺察的人。', '了解盧恩課程', SERVICE_LINKS.course),
    '</div></div></section>'
  ].join('');
}

function startHerePage() {
  return [
    '<section class="start-hero"><div class="wrap start-hero-grid"><div>',
    '<span class="eyebrow">Rune Beginner Guide</span>',
    '<h1>新手從這裡開始</h1>',
    '<p class="lead">第一次接觸盧恩符文，也能一步步理解這套古老的象徵語言。</p>',
    '<p>你不需要一開始就背下 24 枚符文。先理解盧恩是什麼、可以怎麼使用，再透過每日練習，把符文帶回自己的生活裡觀察。</p>',
    '<div class="button-row">', button('開始認識 24 枚符文', '#/runes', true), button('抽取今日符文', '#/daily'), '</div></div>',
    '<div class="start-logo-panel"><img src="assets/rune-logo.jpg" alt="世界樹觀測者 Ori Logo"></div></div></section>',
    '<section class="section compact-section"><div class="wrap"><div class="learning-map">',
    '<article><span>01</span><b>盧恩是什麼</b><small>先建立基本概念</small></article>',
    '<article><span>02</span><b>可以用來做什麼</b><small>理解使用情境</small></article>',
    '<article><span>03</span><b>盧恩不是什麼</b><small>避免迷信與恐懼</small></article>',
    '<article><span>04</span><b>24 枚架構</b><small>看見三組 Aett</small></article>',
    '<article><span>05</span><b>每日練習</b><small>把符文帶回生活</small></article>',
    '<article><span>06</span><b>學習順序</b><small>建立自己的符文語感</small></article>',
    '</div></div></section>',

    '<section class="section"><div class="wrap reading-block"><span class="eyebrow">What are Runes</span><h2>盧恩符文是什麼</h2>',
    '<p>盧恩符文，最初是一套古老的文字系統。它曾被古日耳曼語族使用，刻寫在石頭、木頭、金屬、武器、飾品與紀念碑上，用來記錄名字、標記所有權、留下訊息、紀念逝者，也承載人們對世界、命運與不可見力量的理解。</p>',
    '<p>和我們現在熟悉的紙筆文字不同，盧恩更接近「刻下來的語言」。它的線條多半筆直、銳利，適合被刻進堅硬的材質裡。因此，每一枚符文都像是一道切痕，不是輕飄飄地寫下，而是被用力刻入世界之中。</p>',
    '<div class="quote-box">Rune 這個詞與「秘密」、「神秘」、「隱藏的訊息」有關。它既是文字，也是訊息；既是符號，也是某種需要被解讀的低語。</div>',
    '<p>一枚盧恩符文，不只代表一個音，也承載一種力量、一個概念，或一段生命經驗。這也是為什麼盧恩能從古代文字，延伸成現代人用來占卜、自我觀察與理解生命狀態的工具。</p>',
    nextStep('理解盧恩是象徵語言之後，可以接著往下看：它能如何幫助你釐清狀態與問題。'),
    '</div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Use Cases</span><h2>盧恩可以用來做什麼</h2></div>',
    '<p>盧恩可以作為一種自我觀察、問題釐清與決策輔助的工具。它特別適合用在「我知道自己有感覺，但說不清楚問題在哪裡」的時候。</p></div>',
    '<div class="start-card-grid five-grid">',
    startInfoCard('自我探索', '把模糊的焦慮、矛盾與選擇具象化，看見此刻最需要被理解的核心課題。'),
    startInfoCard('占卜指引', '觀察目前正在運作的力量、限制與可能方向，協助你更清楚地面對選擇。'),
    startInfoCard('感情理解', '釐清關係中的互動模式、靠近與等待、界線與恐懼，而不是操控任何人的心意。'),
    startInfoCard('生命課題', '在轉折、停滯或混亂中，看見自己正在學習什麼，以及下一步需要承擔什麼。'),
    startInfoCard('日常覺察', '透過每日抽取一枚符文，觀察情緒、事件與選擇如何與符文產生呼應。'),
    '</div>', nextStep('使用盧恩前，也需要往下理解：它不能取代你的選擇與行動。'), '</div></section>',

    '<section class="section"><div class="wrap reading-block"><span class="eyebrow">Not a Verdict</span><h2>盧恩不是什麼</h2>',
    '<div class="warning-box"><p>盧恩不是用來製造恐懼的工具，也不應該被拿來當成絕對預言。符文可以指出方向，但不能取代你的人生。</p></div>',
    '<div class="start-card-grid two-grid">',
    startInfoCard('不是絕對的命運判決', '抽到某一枚符文，並不代表事情一定會按照某種方式發生。它提醒的是現在的狀態與趨勢，而不是無法改變的結局。'),
    startInfoCard('不是操控他人的工具', '盧恩不能保證某個人會回來、會愛你、會選擇你，也不應該被用來窺探或侵犯他人的意志。'),
    startInfoCard('不是逃避行動的藉口', '如果問題需要溝通、界線或努力，符文可以幫助你看見課題，但真正穿越課題的人仍然是你自己。'),
    startInfoCard('不是迷信，而是象徵閱讀', '學習盧恩不是要你放棄理性，而是讓直覺與理性一起工作，把混亂整理成可理解的結構。'),
    '</div>', nextStep('有了基本認知後，可以開始看 24 枚符文如何排列成一張生命地圖。', '認識 24 枚架構', '#/runes'), '</div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Elder Futhark</span><h2>24 枚符文的基本架構</h2></div>',
    '<p>現代最常被用於盧恩占卜與學習的系統，是 Elder Futhark，也就是古弗薩克符文。它由 24 枚符文組成，可以分成三組，每組 8 枚，稱為 Aett。</p></div>',
    '<div class="aett-grid">',
    aettCard("Freyr's Aett", '弗雷群組', 'Fehu、Uruz、Thurisaz、Ansuz、Raidho、Kenaz、Gebo、Wunjo', '從資源到連結', '這一組關注生命的起點，談資源、本能、力量、界線、語言、行動、交換與喜悅。核心課題是：我如何理解自己的力量，並以成熟的方式與世界建立連結？'),
    aettCard("Heimdall's Aett", '海姆達爾群組', 'Hagalaz、Nauthiz、Isa、Jera、Eihwaz、Perthro、Algiz、Sowilo', '從衝擊到轉化', '這一組進入深層考驗，談混亂、限制、停滯、週期、死亡與轉化、命運、保護，以及重新找回光。核心課題是：當我無法控制一切時，如何穿越考驗？'),
    aettCard("Tyr's Aett", '提爾群組', 'Tiwaz、Berkana、Ehwaz、Mannaz、Laguz、Ingwaz、Dagaz、Othala', '從關係到命運整合', '這一組關注成熟的生命整合，談信念、孕育、合作、人性、潛意識、突破，以及傳承與歸屬。核心課題是：我如何找到真正的歸屬，並承擔自己的命運？'),
    '</div><div class="quote-box map-note">24 枚符文可以被看作一張生命地圖：第一組學會建立力量與連結，第二組學會面對限制與轉化，第三組學會整合關係與命運。</div>',
    nextStep('知道三組 Aett 後，最好的練習是每天抽一枚，觀察它如何映照你的生活。', '前往每日練習', '#/daily'), '</div></section>',

    '<section class="section"><div class="wrap reading-block"><span class="eyebrow">Daily Practice</span><h2>如何抽取每日符文</h2>',
    '<p>每日一符文是一種簡單的練習。你可以在一天開始前，或感到混亂時，先停下來深呼吸，把注意力放回自己身上。</p>',
    '<p>不需要問得很完美。你可以問：「我今天需要看見什麼？」、「這件事可能帶來什麼結果？」或「我現在最需要覺察的是什麼？」抽到符文後，先不要急著判斷好壞，而是觀察它如何出現在你的情緒、關係與選擇裡。</p>',
    '<div class="button-row">', button('前往每日一符文', '#/daily', true), '</div>',
    nextStep('開始練習後，可以接著往下看推薦學習順序，逐步建立自己的符文語感。'), '</div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Learning Path</span><h2>推薦學習順序</h2></div>',
    '<p>學習盧恩，不是一次背完全部意思，而是逐步建立你自己的符文語感。</p></div>',
    '<div class="step-list">',
    learningStep('Step 1', '先認識符文名稱與符號', '從符號、英文名與中文名稱開始，讓每一枚符文先在你心裡留下印象。'),
    learningStep('Step 2', '理解核心關鍵字', '先抓住每枚符文的主要力量，例如資源、力量、訊息、停滯、轉化與歸屬。'),
    learningStep('Step 3', '閱讀單一符文詳情', '進入詳情頁，理解核心含義、明亮面、陰影面，以及在感情中的提醒。'),
    learningStep('Step 4', '每天抽一枚符文', '用每日一符文觀察當天的狀態、可能結果與需要覺察的課題。'),
    learningStep('Step 5', '回到生活中觀察符文如何顯現', '把符文帶回現實，不只看答案，也看它如何映照你的情緒、關係與選擇。'),
    '</div></div></section>',

    '<section class="section"><div class="wrap"><div class="cta"><span class="eyebrow">Continue the Path</span><h2>從理解開始，讓符文回到生活裡</h2>',
    '<p class="lead">盧恩不是為你宣判命運，而是陪你讀懂命運正在留下的訊息。當你準備好了，可以繼續看 24 枚符文、抽取今日符文，或預約 Ori 的占卜與課程。</p>',
    '<div class="button-row">', button('查看 24 枚符文', '#/runes', true), button('抽取今日符文', '#/daily'), button('預約盧恩占卜／了解課程', '#/about'), '</div></div></div></section>'
  ].join('');
}

function startInfoCard(title, body) {
  return '<article class="content-card start-card"><h3>' + title + '</h3><p>' + body + '</p></article>';
}

function aettCard(name, chineseName, runes, theme, body) {
  return '<article class="content-card aett-card"><span class="eyebrow">' + name + '</span><h3>' + chineseName + '</h3><p class="aett-runes">' + runes + '</p><h4>' + theme + '</h4><p>' + body + '</p></article>';
}

function learningStep(step, title, body) {
  return '<article class="learning-step"><span>' + step + '</span><div><h3>' + title + '</h3><p>' + body + '</p></div></article>';
}

function runesPage() {
  const cards = RUNES.map(r => [
    '<a class="rune-card" href="#/rune/', r.slug, '">',
    '<span class="number">RUNE ', String(r.id).padStart(2, '0'), '</span>',
    '<span class="rune-symbol">', r.symbol, '</span>',
    '<h3>', esc(r.name), '</h3><span class="cn">', esc(r.chineseName), '</span>',
    '<div class="keywords">', r.keywords.map(k => '<span class="chip">' + esc(k) + '</span>').join(''), '</div>',
    '<p>', esc(r.summary), '</p><span class="arrow">↗</span></a>'
  ].join('')).join('');
  return [
    '<section class="page-hero"><div class="wrap"><span class="eyebrow">The Elder Futhark</span>',
    '<h1>24 枚盧恩符文</h1><p class="lead">每一枚符文，都是一種生命力量。先從符號與關鍵字開始，讓理解慢慢長出自己的根。</p></div></section>',
    '<section class="section compact-section"><div class="wrap"><div class="quote-box overview-tip"><span class="eyebrow">Beginner Tip</span><p>如果你是第一次學盧恩，不需要一次背完 24 枚。先看符號、中文名稱與核心關鍵字，再挑一枚有感覺的符文進入詳情頁閱讀。</p><div class="button-row">', button('不知道從哪裡開始？看新手入門', '#/start-here'), '</div></div>',
    '<div class="aett-grid overview-aett">',
    "<article class=\"content-card aett-card\"><span class=\"eyebrow\">Freyr's Aett</span><h3>弗雷群組</h3><p>資源、本能、力量、語言、行動、交換與喜悅。像是生命剛開始學會與世界連結。</p></article>",
    "<article class=\"content-card aett-card\"><span class=\"eyebrow\">Heimdall's Aett</span><h3>海姆達爾群組</h3><p>衝擊、限制、停滯、週期、轉化、命運、保護與光。像是穿越考驗後的成熟。</p></article>",
    "<article class=\"content-card aett-card\"><span class=\"eyebrow\">Tyr's Aett</span><h3>提爾群組</h3><p>信念、孕育、合作、人性、潛意識、突破與歸屬。像是走向整合與命運承擔。</p></article>",
    '</div></div></section>',
    '<section><div class="wrap"><div class="filter-bar"><p>依傳統順序排列 · 三組 Aett</p><span class="eyebrow">24 Symbols</span></div>',
    '<div class="rune-grid">', cards, '</div></div></section>'
  ].join('');
}

function detailPage(slug) {
  const r = RUNES.find(item => item.slug === slug);
  if (!r) return notFound();
  const index = RUNES.findIndex(item => item.slug === slug);
  const prev = RUNES[(index - 1 + RUNES.length) % RUNES.length];
  const next = RUNES[(index + 1) % RUNES.length];
  return [
    '<section class="detail-hero"><div class="wrap"><a class="back-link" href="#/runes">← 返回 24 枚符文</a>',
    '<div class="detail-top"><div class="giant-rune">', r.symbol, '</div><div>',
    '<span class="eyebrow">Rune ', String(r.id).padStart(2, '0'), '</span>',
    '<h1 class="detail-title">', esc(r.name), '</h1><div class="detail-subtitle">', esc(r.chineseName), '</div>',
    '<div class="keywords">', r.keywords.map(k => '<span class="chip">' + esc(k) + '</span>').join(''), '</div>',
    '<p class="lead">', esc(r.summary), '</p></div></div></div></section>',
    '<section><div class="wrap detail-grid">',
    contentCard('核心含義', r.meaning, 'feature'),
    contentCard('正位解讀', r.upright),
    contentCard('逆位／陰影解讀', r.shadow),
    contentCard('感情中的含義', r.love),
    contentCard('給學習者的建議', r.advice),
    '</div></section>',
    '<section class="section compact-section"><div class="wrap"><div class="rune-detail-nav" role="navigation" aria-label="符文詳情導覽">',
    '<a class="detail-nav-card" href="#/rune/', prev.slug, '"><span>上一枚</span><b>', esc(prev.name), '</b><small>', esc(prev.chineseName), '</small></a>',
    '<a class="detail-nav-card overview" href="#/runes"><span>回到總覽</span><b>24 枚符文</b><small>依 Elder Futhark 順序瀏覽</small></a>',
    '<a class="detail-nav-card" href="#/rune/', next.slug, '"><span>下一枚</span><b>', esc(next.name), '</b><small>', esc(next.chineseName), '</small></a>',
    '</div></div></section>'
  ].join('');
}

function contentCard(title, body, extra = '') {
  return '<article class="content-card ' + extra + '"><h3>' + title + '</h3><p>' + esc(body) + '</p></article>';
}

function dailyPage() {
  return [
    '<section class="daily-stage"><div class="draw-shell" id="daily-content">',
    '<span class="eyebrow">Your Rune for Today</span><h1>每日一符文</h1>',
    '<p class="lead">這不是絕對的預言，而是一個提醒。抽取前，先停下來，把問題放回自己身上。</p>',
    '<div class="draw-guidance"><span>抽取前可以這樣問</span><p>我今天需要看見什麼？這件事正在呈現什麼狀態？我現在最需要覺察的是什麼？</p></div>',
    '<div class="rune-stone" aria-hidden="true"><span class="mystery">ᛉ</span></div>',
    '<button class="btn primary" id="draw-rune">抽取今日符文</button>',
    '<p class="muted">不需登入，也不會儲存紀錄</p></div></section>'
  ].join('');
}

function drawRune() {
  const rune = RUNES[Math.floor(Math.random() * RUNES.length)];
  const host = document.querySelector('#daily-content');
  host.className = 'draw-shell draw-result';
  host.innerHTML = [
    '<span class="eyebrow">Your Rune for Today</span>',
    '<div class="rune-stone"><span class="mystery">', rune.symbol, '</span></div>',
    '<h2>', esc(rune.name), '</h2><div class="detail-subtitle">', esc(rune.chineseName), '</div>',
    '<p class="summary">', esc(rune.summary), '</p>',
    '<div class="advice-box"><span class="eyebrow">給學習者的建議</span><p>', esc(rune.advice), '</p></div>',
    '<div class="self-questions"><span class="eyebrow">今日自我提問</span><ul>',
    '<li>這枚符文正在提醒我看見哪一個狀態？</li>',
    '<li>如果照目前的模式走下去，可能形成什麼結果？</li>',
    '<li>今天我可以在哪裡多一點清醒與選擇？</li>',
    '</ul></div>',
    '<div class="button-row" style="justify-content:center"><button class="btn primary" id="draw-rune">再抽一枚</button>',
    '<a class="btn" href="#/rune/', rune.slug, '">深入認識這枚符文</a></div>'
  ].join('');
}

function aboutPage() {
  return [
    '<section class="page-hero"><div class="wrap"><span class="eyebrow">The Observer of Yggdrasil</span><h1>關於 Ori</h1>',
    '<p class="lead">以符文作為語言，陪你看見關係、選擇與生命轉化背後的結構。</p></div></section>',
    '<section class="section"><div class="wrap about-intro"><div class="portrait-mark"><img src="assets/rune-logo.jpg" alt="世界樹觀測者 Ori Logo"></div><div>',
    '<span class="eyebrow">Meet Ori</span><h2>我是 Ori，<br>世界樹觀測者。</h2>',
    '<p>我是盧恩符文占卜師與教學者，以盧恩、塔羅與神秘學系統作為工具，陪伴人們理解感情、關係、選擇與生命中的轉化時刻。</p>',
    '<p>對我來說，占卜不是單純預測結果，而是一種看見結構的方式。我特別擅長處理感情中的分離、冷淡、不確定關係、自我價值與情緒焦慮課題。</p>',
    '<p>希望你在這裡不只是記住符文含義，而是慢慢學會：如何透過符文，看見自己生命中的秩序。</p></div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Services</span><h2>盧恩占卜與教學服務</h2></div>',
    '<p>盧恩不是替你做決定，而是幫助你看見決定背後的力量。你可以選擇被引導，也可以選擇學會自己閱讀符文。</p></div><div class="service-grid">',
    serviceCard('我想被解讀', '適合正在面對感情困惑、關係不確定、人生選擇，或想透過盧恩看懂自己內在模式的人。', '預約盧恩占卜', SERVICE_LINKS.booking, true),
    serviceCard('我想自己學會', '適合想從零開始、建立自己的解讀系統，並將盧恩應用於自我探索、關係理解與生活指引的人。', '了解盧恩課程', SERVICE_LINKS.course),
    '</div><p class="muted" id="contact-note">點擊按鈕即可前往 Ori 官方 LINE 預約，或至 1shop 查看盧恩課程。</p></div></section>'
  ].join('');
}

function notFound() {
  return '<section class="not-found"><div><span class="eyebrow">The path is hidden</span><h1>找不到這條道路</h1>' + button('回到首頁', '#/', true) + '</div></section>';
}

function render() {
  const path = location.hash.slice(1) || '/';
  const parts = path.split('/').filter(Boolean);
  if (path === '/') {
    app.innerHTML = homePage();
    setMeta({
      title: '盧恩符文學習｜Elder Futhark 24 枚符文｜世界樹觀測者 Ori',
      description: '世界樹觀測者 Ori 的盧恩符文初學者學習網站。從零認識 Elder Futhark 24 枚符文、每日一符文練習、感情與自我覺察應用。',
      ogTitle: '盧恩符文學習｜世界樹觀測者 Ori',
      ogDescription: '從零開始認識 Elder Futhark 24 枚盧恩符文，理解符文象徵、占卜用途、每日練習與自我覺察方式。'
    });
  }
  else if (path === '/start-here') {
    app.innerHTML = startHerePage();
    setMeta({
      title: '新手入門｜盧恩符文學習指南｜世界樹觀測者 Ori',
      description: '第一次接觸盧恩符文也能輕鬆開始。認識盧恩是什麼、可以用來做什麼、24 枚符文架構、每日符文抽取方式與推薦學習順序。',
      ogTitle: '新手入門｜盧恩符文學習指南',
      ogDescription: '從零開始認識 24 枚盧恩符文，理解符文的象徵、占卜用途與日常學習方式。'
    });
  }
  else if (path === '/runes') {
    app.innerHTML = runesPage();
    setMeta({
      title: '24 枚盧恩符文｜世界樹觀測者 Ori',
      description: '瀏覽 Elder Futhark 24 枚盧恩符文總覽，認識每枚符文的符號、名稱、核心關鍵字、一句話總結與三組 Aett 架構。',
      ogTitle: '24 枚盧恩符文',
      ogDescription: '認識 Elder Futhark 24 枚盧恩符文的象徵、含義、三組 Aett 與新手學習順序。'
    });
  }
  else if (path === '/daily') {
    app.innerHTML = dailyPage();
    setMeta({
      title: '每日一符文｜世界樹觀測者 Ori',
      description: '抽取今日盧恩符文，協助自己看見當下狀態與需要覺察的課題。',
      ogTitle: '每日一符文',
      ogDescription: '每天抽一枚盧恩符文，作為自我覺察與日常觀察的提醒。'
    });
  }
  else if (path === '/about') {
    app.innerHTML = aboutPage();
    setMeta({
      title: '關於 Ori｜盧恩占卜與課程',
      description: '認識世界樹觀測者 Ori，了解盧恩占卜與盧恩符文教學服務。',
      ogTitle: '關於 Ori｜盧恩占卜與課程',
      ogDescription: 'Ori 提供感情、關係、自我探索與生命轉化相關的盧恩占卜與課程。'
    });
  }
  else if (parts[0] === 'rune' && parts[1]) {
    app.innerHTML = detailPage(parts[1]);
    const rune = RUNES.find(item => item.slug === parts[1]);
    setMeta({
      title: rune ? rune.name + '｜盧恩符文詳解｜世界樹觀測者 Ori' : '盧恩符文詳解｜世界樹觀測者 Ori',
      description: rune ? rune.summary : '閱讀單一盧恩符文的核心含義、明亮面、陰影面與感情解讀。',
      ogTitle: rune ? rune.name + '｜盧恩符文詳解' : '盧恩符文詳解',
      ogDescription: rune ? rune.summary : '閱讀單一盧恩符文的核心含義與學習建議。'
    });
  }
  else {
    app.innerHTML = notFound();
    setMeta({
      title: '找不到頁面｜世界樹觀測者 Ori',
      description: '這條符文路徑不存在，請回到首頁重新開始。',
      ogTitle: '找不到頁面｜世界樹觀測者 Ori',
      ogDescription: '這條符文路徑不存在，請回到首頁重新開始。'
    });
  }

  const section = parts[0] || '';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    const active = (path === '/' && href === '#/') ||
      (section === 'rune' && href === '#/runes') ||
      (section && href === '#/' + section);
    link.classList.toggle('active', Boolean(active));
  });
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

document.addEventListener('click', event => {
  if (event.target.closest('#draw-rune')) drawRune();
});
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
window.addEventListener('hashchange', render);
render();
