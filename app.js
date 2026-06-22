const app = document.querySelector('#app');
const nav = document.querySelector('nav');
const menuButton = document.querySelector('.menu-button');

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function button(label, href, primary = false) {
  return '<a class="btn ' + (primary ? 'primary' : '') + '" href="' + href + '">' + label + '</a>';
}

function homePage() {
  const featured = RUNES.slice(0, 4).map(r => (
    '<a class="rune-teaser" href="#/rune/' + r.slug + '">' +
      '<span class="symbol">' + r.symbol + '</span><span><b>' + r.name + '</b><br><small class="muted">' + r.chineseName + ' · ' + r.keywords[0] + '</small></span>' +
    '</a>'
  )).join('');
  return [
    '<section class="hero"><div class="wrap"><div class="hero-copy">',
    '<span class="eyebrow">Elder Futhark · 24 Runes</span>',
    '<h1>從一枚符文，<br>讀懂生命正在給你的訊息</h1>',
    '<p class="lead">這是一座為初學者設計的盧恩符文學習網站。認識 24 枚 Elder Futhark 符文，理解它們在感情、人生、選擇與內在課題中的象徵意義。</p>',
    '<div class="button-row">', button('開始學習 24 枚盧恩', '#/runes', true), button('抽取今日符文', '#/daily'), '</div>',
    '</div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">About Runes</span><h2>盧恩，是照見當下的鏡子</h2></div>',
    '<p>盧恩不只是古老的文字，也是一套理解世界與自我的象徵系統。每一枚符文都像一道門，帶你看見處境、力量，以及生命正在要求你學會的課題。</p></div>',
    '<div class="learn-grid"><article class="learn-card"><h3>先認識符文</h3><p>從名稱、符號與核心關鍵字開始，不必一次背完所有答案。</p></article>',
    '<article class="learn-card"><h3>看見兩種狀態</h3><p>閱讀正位與陰影解讀，理解同一股力量如何流動，或如何失衡。</p></article>',
    '<article class="learn-card"><h3>帶回你的生活</h3><p>連結感情與日常經驗，問自己：這枚符文正在提醒我什麼？</p></article></div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Begin the Journey</span><h2>從第一組符文開始</h2></div>', button('查看完整總覽', '#/runes'), '</div>',
    '<div class="learn-grid">', featured, '</div></div></section>',
    '<section class="section"><div class="wrap"><div class="cta"><span class="eyebrow">A Reading with Ori</span><h2>當答案不只是一句話</h2>',
    '<p class="lead">如果你想更深入理解感情、關係、選擇與生命轉化，我提供一對一盧恩占卜與系統化教學。</p>',
    '<div class="button-row">', button('預約盧恩占卜', '#/about', true), button('了解盧恩課程', '#/about'), '</div></div></div></section>'
  ].join('');
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
    '<section><div class="wrap"><div class="filter-bar"><p>依傳統順序排列 · 三組 Aett</p><span class="eyebrow">24 Symbols</span></div>',
    '<div class="rune-grid">', cards, '</div></div></section>'
  ].join('');
}

function detailPage(slug) {
  const r = RUNES.find(item => item.slug === slug);
  if (!r) return notFound();
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
    '</div></section>'
  ].join('');
}

function contentCard(title, body, extra = '') {
  return '<article class="content-card ' + extra + '"><h3>' + title + '</h3><p>' + esc(body) + '</p></article>';
}

function dailyPage() {
  return [
    '<section class="daily-stage"><div class="draw-shell" id="daily-content">',
    '<span class="eyebrow">Your Rune for Today</span><h1>每日一符文</h1>',
    '<p class="lead">這不是絕對的預言，而是一個提醒。安靜片刻，想著你此刻最需要看見的課題。</p>',
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
    '<div class="button-row" style="justify-content:center"><button class="btn primary" id="draw-rune">再抽一枚</button>',
    '<a class="btn" href="#/rune/', rune.slug, '">深入認識這枚符文</a></div>'
  ].join('');
}

function aboutPage() {
  return [
    '<section class="page-hero"><div class="wrap"><span class="eyebrow">The Observer of Yggdrasil</span><h1>關於 Ori</h1>',
    '<p class="lead">以符文作為語言，陪你看見關係、選擇與生命轉化背後的結構。</p></div></section>',
    '<section class="section"><div class="wrap about-intro"><div class="portrait-mark">ᛉ</div><div>',
    '<span class="eyebrow">Meet Ori</span><h2>我是 Ori，<br>世界樹觀測者。</h2>',
    '<p>我是盧恩符文占卜師與教學者，以盧恩、塔羅與神秘學系統作為工具，陪伴人們理解感情、關係、選擇與生命中的轉化時刻。</p>',
    '<p>對我來說，占卜不是單純預測結果，而是一種看見結構的方式。我特別擅長處理感情中的分離、冷淡、不確定關係、自我價值與情緒焦慮課題。</p>',
    '<p>希望你在這裡不只是記住符文含義，而是慢慢學會：如何透過符文，看見自己生命中的秩序。</p></div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Services</span><h2>盧恩占卜與教學服務</h2></div>',
    '<p>盧恩不是替你做決定，而是幫助你看見決定背後的力量。</p></div><div class="service-grid">',
    '<article class="content-card"><h3>一對一盧恩占卜</h3><p>適合正在面對感情困惑、關係不確定、人生選擇，或想看懂自己內在模式的人。</p><div class="button-row">', button('預約占卜', '#contact-note', true), '</div></article>',
    '<article class="content-card"><h3>系統化盧恩課程</h3><p>適合想從零開始、建立自己的解讀系統，並將盧恩應用於自我探索與生活指引的人。</p><div class="button-row">', button('了解課程', '#contact-note'), '</div></article>',
    '</div><p class="muted" id="contact-note">預約與課程聯絡方式將由 Ori 公告。</p></div></section>'
  ].join('');
}

function notFound() {
  return '<section class="not-found"><div><span class="eyebrow">The path is hidden</span><h1>找不到這條道路</h1>' + button('回到首頁', '#/', true) + '</div></section>';
}

function render() {
  const path = location.hash.slice(1) || '/';
  const parts = path.split('/').filter(Boolean);
  if (path === '/') app.innerHTML = homePage();
  else if (path === '/runes') app.innerHTML = runesPage();
  else if (path === '/daily') app.innerHTML = dailyPage();
  else if (path === '/about') app.innerHTML = aboutPage();
  else if (parts[0] === 'rune' && parts[1]) app.innerHTML = detailPage(parts[1]);
  else app.innerHTML = notFound();

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
