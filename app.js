const app = document.querySelector('#app');
const nav = document.querySelector('nav');
const menuButton = document.querySelector('.menu-button');

const SERVICE_LINKS = {
  booking: 'https://lin.ee/yxkj3pE'
};
const COURSE_LINE_URL = 'https://lin.ee/yxkj3pE';
const SITE_ORIGIN = 'https://ori-rune-learning.vercel.app';

const FAQ_ITEMS = [
  {
    question: '盧恩與塔羅有什麼差異？',
    answer: '塔羅像是在看一段故事怎麼發展；盧恩像是在看你現在卡在哪裡，以及該用什麼力量面對。'
  },
  {
    question: '完全新手也可以學盧恩嗎？',
    answer: '可以。從零開始也沒問題，會從 24 枚符文、基本意思和解讀方式一步步學起。'
  },
  {
    question: '占卜結果是絕對的嗎？',
    answer: '不是。占卜不是直接宣判結果，而是幫你看清現在的狀態，以及接下來可以怎麼做。'
  },
  {
    question: '我什麼時候可以用盧恩占卜？',
    answer: '當你在感情、工作或人生選擇上想不清楚、卡住，或一直反覆想同一件事時，就可以用盧恩幫自己整理狀態，找到下一步方向。'
  },
  {
    question: '如何預約占卜？',
    answer: '可以透過網站上的聯絡方式私訊預約，告訴我想問的問題和方便的時間即可。'
  },
  {
    question: '如何報名課程？',
    answer: '可以先到課程頁了解學習方向，再加入官方 LINE 取得完整課綱、開課梯次、費用與報名方式。'
  }
];

const READING_FAQ_ITEMS = [
  {
    question: '占卜結果是絕對的嗎？',
    answer: '不是。占卜結果提供的是當下狀態、能量與方向參考，不是絕對不變的命運判決。它能幫助你看清楚問題，但最後的選擇與行動仍然回到你自己身上。'
  },
  {
    question: '可以短時間內重複問同一題嗎？',
    answer: '不建議。同一個問題不建議在短時間內反覆占卜，除非現實狀況已經有明顯變化。反覆詢問通常不是為了理解問題，而是想得到讓自己安心的答案。'
  },
  {
    question: '哪些問題不適合占卜？',
    answer: '生死、疾病診斷、懷孕與醫療判斷、法律訴訟、投資明牌、考試中獎等保證型問題，都不適合用占卜處理。占卜也不適合用來窺探他人隱私，或要求操控他人意志。'
  },
  {
    question: '文字占卜多久會收到回覆？',
    answer: '文字單題占卜會在確認收款後開始計時，並於 24 小時內提供文字回覆。'
  },
  {
    question: '語音占卜如何安排？',
    answer: '語音占卜會在確認付款後安排時間，以線上語音方式進行。適合想即時聽取解讀、補充背景與快速釐清問題的人。'
  },
  {
    question: '現場面對面占卜如何預約？',
    answer: '現場面對面占卜目前服務地區限雙北地區，費用為 1200 元／小時。預約時需預付 50% 費用作為預約保留，剩餘款項可於占卜當日支付。'
  },
  {
    question: '占卜可以替代醫療、法律或心理諮詢嗎？',
    answer: '不可以。盧恩可以提供方向與自我理解的參考，但不能代替專業醫療、法律、心理治療、投資或其他專業建議。若問題涉及高風險決策，請務必尋求對應領域的專業協助。'
  },
  {
    question: '如果我不知道問題該怎麼問怎麼辦？',
    answer: '你可以先簡單描述目前的狀況，我會協助你整理成適合盧恩解讀的問題。好的問題會讓解讀更清楚，也更容易帶出能行動的方向。'
  }
];

const COURSE_FAQ_ITEMS = [
  {
    question: '完全沒有神秘學基礎可以參加嗎？',
    answer: '可以。這堂課會從北歐神話、盧恩起源與 24 枚符文基礎開始，不需要你先學過塔羅、占星或其他神秘學工具。'
  },
  {
    question: '我沒有通靈能力，也能學會嗎？',
    answer: '可以。這堂課的核心不是通靈，而是建立一套可以理解、練習與應用的符文解讀系統。你會學習如何從符文象徵、神話背景與問題結構進行判讀，而不是依賴模糊的靈感。'
  },
  {
    question: '我已經會塔羅，還適合學嗎？',
    answer: '適合。盧恩和塔羅是不同的系統。塔羅偏向圖像敘事，盧恩更像是力量、狀態與課題的符號語言。如果你已經有占卜基礎，盧恩可以幫助你建立另一種更簡潔、直接、有力量的解讀方式。'
  },
  {
    question: '課程中會實際練習占卜嗎？',
    answer: '會。課程會帶入盧恩占卜的基礎原理、問題設計與符文解讀練習，協助你把符文從知識轉化成可以使用的工具。'
  },
  {
    question: '課程會提供完整課綱嗎？',
    answer: '會。官網只放課程重點，避免內容過長。完整課綱、開課梯次、費用與報名方式，請加入官方 LINE 取得。'
  }
];

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

function serviceCard(title, body, label, href, primary = false, secondaryLabel = '', secondaryHref = '') {
  return '<article class="content-card service-choice"><span class="eyebrow">Ori Service</span><h3>' + title + '</h3><p>' + body + '</p><div class="button-row">' +
    button(label, href, primary) + (secondaryLabel ? button(secondaryLabel, secondaryHref) : '') + '</div></article>';
}

function accordion(itemsData, idPrefix, openFirst = true) {
  const items = itemsData.map((item, index) => {
    const open = openFirst && index === 0;
    const buttonId = idPrefix + '-button-' + index;
    const panelId = idPrefix + '-panel-' + index;
    return [
      '<article class="faq-item', open ? ' open' : '', '">',
      '<h3><button class="faq-question" id="', buttonId, '" type="button" aria-expanded="', open ? 'true' : 'false', '" aria-controls="', panelId, '">',
      '<span>Q', index + 1, '：', esc(item.question), '</span><span class="faq-icon" aria-hidden="true">＋</span></button></h3>',
      '<div class="faq-answer" id="', panelId, '" role="region" aria-labelledby="', buttonId, '"', open ? '' : ' hidden', '><p>', esc(item.answer), '</p></div>',
      '</article>'
    ].join('');
  }).join('');
  return items;
}

function faqAccordion() {
  return [
    '<section class="section faq-section"><div class="wrap">',
    '<div class="section-head"><div><span class="eyebrow">FAQ</span><h2>常見問題 FAQ</h2></div>',
    '<p>第一次接觸盧恩符文，可能會有許多疑問。這裡整理了初學者最常問的問題，幫助你更清楚理解盧恩、占卜與課程的差異。</p></div>',
    '<div class="faq-list">', accordion(FAQ_ITEMS, 'home-faq'), '</div></div></section>'
  ].join('');
}

function readingFaqAccordion() {
  return [
    '<section class="section faq-section"><div class="wrap">',
    '<div class="section-head"><div><span class="eyebrow">Before You Book</span><h2>常見問題與注意事項</h2></div>',
    '<p>預約前先確認服務範圍與限制，讓占卜回到清楚、誠實而有行動感的位置。</p></div>',
    '<div class="faq-list">', accordion(READING_FAQ_ITEMS, 'reading-faq', false), '</div></div></section>'
  ].join('');
}

function setMeta({ title, description, ogTitle, ogDescription, canonicalPath = '/' }) {
  document.title = title || '世界樹觀測者 Ori｜盧恩符文學習';
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  const ogUrlMeta = document.querySelector('meta[property="og:url"]');
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  const canonicalUrl = SITE_ORIGIN + (canonicalPath === '/' ? '/' : canonicalPath);
  if (metaDescription && description) metaDescription.setAttribute('content', description);
  if (ogTitleMeta) ogTitleMeta.setAttribute('content', ogTitle || title);
  if (ogDescriptionMeta) ogDescriptionMeta.setAttribute('content', ogDescription || description);
  if (ogUrlMeta) ogUrlMeta.setAttribute('content', canonicalUrl);
  if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl);
}

function homePage() {
  const featured = RUNES.slice(0, 4).map(r => (
    '<a class="rune-teaser" href="/runes/' + r.slug + '">' +
      '<span class="symbol">' + r.symbol + '</span><span><b>' + r.name + '</b><br><small class="muted">' + r.chineseName + ' · ' + r.keywords[0] + '</small></span>' +
    '</a>'
  )).join('');
  return [
    '<section class="hero"><div class="wrap"><div class="hero-copy">',
    '<span class="eyebrow">Elder Futhark · Beginner Rune Guide</span>',
    '<h1>盧恩符文初學者，<br>從這裡開始學</h1>',
    '<p class="lead">這是一座為初學者設計的盧恩符文學習網站。你可以認識 Elder Futhark 24 枚符文、理解每一枚符文的核心含義，並用每日一符文練習自我覺察。</p>',
    '<div class="hero-points"><span>24 枚符文總覽</span><span>單一符文詳解</span><span>每日抽符文練習</span></div>',
    '<div class="button-row">', button('新手從這裡開始', '/beginner', true), button('抽取今日符文', '/daily'), '</div>',
    '</div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">About Runes</span><h2>盧恩，是照見當下的鏡子</h2></div>',
    '<p>盧恩不只是古老的文字，也是一套理解世界與自我的象徵系統。每一枚符文都像一道門，帶你看見處境、力量，以及生命正在要求你學會的課題。</p></div>',
    '<div class="learn-grid"><article class="learn-card"><h3>先認識符文</h3><p>從名稱、符號與核心關鍵字開始，不必一次背完所有答案。</p></article>',
    '<article class="learn-card"><h3>看見兩種狀態</h3><p>閱讀正向／明亮解讀與負向／陰影解讀，理解同一股力量在平衡與失衡時的不同樣貌。</p></article>',
    '<article class="learn-card"><h3>帶回你的生活</h3><p>連結感情與日常經驗，問自己：這枚符文正在提醒我什麼？</p></article></div></div></section>',
    '<section class="section"><div class="wrap"><div class="cta soft-cta"><span class="eyebrow">Start Here</span><h2>第一次接觸盧恩？</h2>',
    '<p class="lead">從新手入門開始，先理解符文的基本概念、學習順序與每日練習方式。</p>',
    '<div class="button-row">', button('新手從這裡開始', '/beginner', true), '</div></div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Begin the Journey</span><h2>從第一組符文開始</h2></div>', button('查看完整總覽', '/runes'), '</div>',
    '<div class="learn-grid">', featured, '</div></div></section>',
    faqAccordion(),
    '<section class="section home-about"><div class="wrap about-intro"><div class="portrait-mark compact-portrait"><img src="/assets/rune-logo.jpg" alt="世界樹觀測者 Ori Logo"></div><div>',
    '<span class="eyebrow">About Ori</span><h2>讓神秘訊息，成為能行動的指引</h2>',
    '<p>Ori 是盧恩符文占卜師與教學者，以 24 枚 Elder Futhark 盧恩符文作為象徵系統，協助人們理解感情、關係、選擇與生命中的轉化時刻。</p>',
    '<p>他的解讀不依賴通靈，也不提供恐嚇式預言，而是透過符文看見問題結構，將神秘訊息轉化成清楚、可理解、能行動的指引。</p>',
    '<div class="button-row">', button('了解 Ori 的占卜方法', '/about', true), button('預約盧恩占卜', SERVICE_LINKS.booking), button('抽取今日符文', '/daily'), '</div></div></div></section>',
    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">A Reading with Ori</span><h2>你想被解讀，還是想自己學會？</h2></div>',
    '<p>如果你想更深入理解感情、關係、選擇與生命轉化，可以選擇一對一占卜，也可以從課程建立自己的解讀系統。</p></div>',
    '<div class="service-grid">',
    serviceCard('我想被解讀', '適合正在面對感情困惑、關係不確定、人生選擇，想透過盧恩看見目前狀態與下一步的人。', '預約盧恩占卜', SERVICE_LINKS.booking, true, '先看占卜須知', '/rune-reading'),
    serviceCard('我想自己學會', '適合想從零建立符文語感，學會自己理解 24 枚盧恩，並應用在自我探索與日常覺察的人。', '了解盧恩教學課程', '/courses', true),
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
    '<div class="button-row">', button('開始認識 24 枚符文', '/runes', true), button('抽取今日符文', '/daily'), '</div></div>',
    '<div class="start-logo-panel"><img src="/assets/rune-logo.jpg" alt="世界樹觀測者 Ori Logo"></div></div></section>',
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
    '<div class="terminology-note"><span class="eyebrow">How We Read Runes</span><p>盧恩符文不同於塔羅牌，本網站不依牌面方向判讀。每一枚符文都會以「正向／明亮解讀」與「負向／陰影解讀」呈現，幫助你理解同一股力量在平衡與失衡時可能展現出的不同樣貌。負向／陰影解讀不代表絕對壞事，而是提醒你看見課題、阻礙與需要調整的地方。</p></div>',
    '<div class="warning-box"><p>盧恩不是用來製造恐懼的工具，也不應該被拿來當成絕對預言。符文可以指出方向，但不能取代你的人生。</p></div>',
    '<div class="start-card-grid two-grid">',
    startInfoCard('不是絕對的命運判決', '抽到某一枚符文，並不代表事情一定會按照某種方式發生。它提醒的是現在的狀態與趨勢，而不是無法改變的結局。'),
    startInfoCard('不是操控他人的工具', '盧恩不能保證某個人會回來、會愛你、會選擇你，也不應該被用來窺探或侵犯他人的意志。'),
    startInfoCard('不是逃避行動的藉口', '如果問題需要溝通、界線或努力，符文可以幫助你看見課題，但真正穿越課題的人仍然是你自己。'),
    startInfoCard('不是迷信，而是象徵閱讀', '學習盧恩不是要你放棄理性，而是讓直覺與理性一起工作，把混亂整理成可理解的結構。'),
    '</div>', nextStep('有了基本認知後，可以開始看 24 枚符文如何排列成一張生命地圖。', '認識 24 枚架構', '/runes'), '</div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Elder Futhark</span><h2>24 枚符文的基本架構</h2></div>',
    '<p>現代最常被用於盧恩占卜與學習的系統，是 Elder Futhark，也就是古弗薩克符文。它由 24 枚符文組成，可以分成三組，每組 8 枚，稱為 Aett。</p></div>',
    '<div class="aett-grid">',
    aettCard("Freyr's Aett", '弗雷群組', 'Fehu、Uruz、Thurisaz、Ansuz、Raidho、Kenaz、Gebo、Wunjo', '從資源到連結', '這一組關注生命的起點，談資源、本能、力量、界線、語言、行動、交換與喜悅。核心課題是：我如何理解自己的力量，並以成熟的方式與世界建立連結？'),
    aettCard("Heimdall's Aett", '海姆達爾群組', 'Hagalaz、Nauthiz、Isa、Jera、Eihwaz、Perthro、Algiz、Sowilo', '從衝擊到轉化', '這一組進入深層考驗，談混亂、限制、停滯、週期、死亡與轉化、命運、保護，以及重新找回光。核心課題是：當我無法控制一切時，如何穿越考驗？'),
    aettCard("Tyr's Aett", '提爾群組', 'Tiwaz、Berkana、Ehwaz、Mannaz、Laguz、Ingwaz、Dagaz、Othala', '從關係到命運整合', '這一組關注成熟的生命整合，談信念、孕育、合作、人性、潛意識、突破，以及傳承與歸屬。核心課題是：我如何找到真正的歸屬，並承擔自己的命運？'),
    '</div><div class="quote-box map-note">24 枚符文可以被看作一張生命地圖：第一組學會建立力量與連結，第二組學會面對限制與轉化，第三組學會整合關係與命運。</div>',
    nextStep('知道三組 Aett 後，最好的練習是每天抽一枚，觀察它如何映照你的生活。', '前往每日練習', '/daily'), '</div></section>',

    '<section class="section"><div class="wrap reading-block"><span class="eyebrow">Daily Practice</span><h2>如何抽取每日符文</h2>',
    '<p>每日一符文是一種簡單的練習。你可以在一天開始前，或感到混亂時，先停下來深呼吸，把注意力放回自己身上。</p>',
    '<p>不需要問得很完美。你可以問：「我今天需要看見什麼？」、「這件事可能帶來什麼結果？」或「我現在最需要覺察的是什麼？」抽到符文後，先不要急著判斷好壞，而是觀察它如何出現在你的情緒、關係與選擇裡。</p>',
    '<div class="button-row">', button('前往每日一符文', '/daily', true), '</div>',
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
    '<div class="button-row">', button('查看 24 枚符文', '/runes', true), button('抽取今日符文', '/daily'), button('查看占卜須知', '/rune-reading'), button('了解教學課程', '/courses'), '</div></div></div></section>'
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

function runeCard(r) {
  return [
    '<a class="rune-card" href="/runes/', r.slug, '">',
    '<span class="number">RUNE ', String(r.id).padStart(2, '0'), '</span>',
    '<span class="rune-symbol">', r.symbol, '</span>',
    '<h3>', esc(r.name), '</h3><span class="cn">', esc(r.chineseName), '</span>',
    '<div class="keywords">', r.keywords.map(k => '<span class="chip">' + esc(k) + '</span>').join(''), '</div>',
    '<p>', esc(r.summary), '</p><span class="arrow">↗</span></a>'
  ].join('');
}

function runeGroup(aett) {
  const cards = RUNES.slice(aett.start, aett.end).map(runeCard).join('');
  return [
    '<section class="rune-group" aria-labelledby="', aett.id, '">',
    '<div class="rune-group-head"><div><span class="eyebrow">', aett.english, '</span>',
    '<h2 id="', aett.id, '">', aett.english, '<span>｜', aett.chinese, '</span></h2></div>',
    '<p>', aett.description, '</p></div>',
    '<div class="rune-grid">', cards, '</div></section>'
  ].join('');
}

function runesPage() {
  const aetts = [
    {
      id: 'freyr-aett',
      english: "Freyr's Aett",
      chinese: '弗雷群組',
      description: '第一組 8 枚符文，關注資源、本能、力量、交流、行動、交換與喜悅。',
      start: 0,
      end: 8
    },
    {
      id: 'heimdall-aett',
      english: "Heimdall's Aett",
      chinese: '海姆達爾群組',
      description: '第二組 8 枚符文，帶領學習者面對衝擊、限制、週期、轉化、保護與重新找回光。',
      start: 8,
      end: 16
    },
    {
      id: 'tyr-aett',
      english: "Tyr's Aett",
      chinese: '提爾群組',
      description: '第三組 8 枚符文，關注信念、孕育、合作、人性、直覺、突破、傳承與歸屬。',
      start: 16,
      end: 24
    }
  ];
  const groups = aetts.map(runeGroup).join('');
  return [
    '<section class="page-hero"><div class="wrap"><span class="eyebrow">The Elder Futhark</span>',
    '<h1>24 枚盧恩符文</h1><p class="lead">每一枚符文，都是一種生命力量。先從符號與關鍵字開始，讓理解慢慢長出自己的根。</p></div></section>',
    '<section class="section compact-section"><div class="wrap"><div class="quote-box overview-tip"><span class="eyebrow">Beginner Tip</span><p>如果你是第一次學盧恩，不需要一次背完 24 枚。先看符號、中文名稱與核心關鍵字，再挑一枚有感覺的符文進入詳情頁閱讀。</p><div class="button-row">', button('不知道從哪裡開始？看新手入門', '/beginner'), '</div></div>',
    '<div class="aett-grid overview-aett">',
    "<article class=\"content-card aett-card\"><span class=\"eyebrow\">Freyr's Aett</span><h3>弗雷群組</h3><p>資源、本能、力量、語言、行動、交換與喜悅。像是生命剛開始學會與世界連結。</p></article>",
    "<article class=\"content-card aett-card\"><span class=\"eyebrow\">Heimdall's Aett</span><h3>海姆達爾群組</h3><p>衝擊、限制、停滯、週期、轉化、命運、保護與光。像是穿越考驗後的成熟。</p></article>",
    "<article class=\"content-card aett-card\"><span class=\"eyebrow\">Tyr's Aett</span><h3>提爾群組</h3><p>信念、孕育、合作、人性、潛意識、突破與歸屬。像是走向整合與命運承擔。</p></article>",
    '</div></div></section>',
    '<section><div class="wrap"><div class="filter-bar"><p>依傳統順序排列 · 每組 8 枚符文</p><span class="eyebrow">3 Aetts · 24 Symbols</span></div>',
    '<div class="rune-groups">', groups, '</div></div></section>'
  ].join('');
}

function reflectionCard(r) {
  const keyword = esc(r.keywords[0] || r.name);
  return [
    '<article class="content-card reflection-card"><h3>自我提問</h3><ul class="reflection-list">',
    '<li>這枚符文讓我想到目前生活中的哪一個情境？</li>',
    '<li>當「', keyword, '」的力量出現時，我正在順流使用它，還是落入失衡？</li>',
    '<li>如果誠實面對這枚符文的提醒，我現在最需要調整的是什麼？</li>',
    '</ul></article>'
  ].join('');
}

function todayActionCard(r) {
  const keyword = esc(r.keywords[0] || r.name);
  return [
    '<article class="content-card action-card"><h3>今日行動建議</h3>',
    '<p>今天留意一個與「', keyword, '」有關的時刻。先不急著判斷好壞，做出一個比平常更有意識的小選擇，晚上再用一句話記下行動後的變化。</p></article>'
  ].join('');
}

function detailPage(slug) {
  const r = RUNES.find(item => item.slug === slug);
  if (!r) return notFound();
  const index = RUNES.findIndex(item => item.slug === slug);
  const prev = RUNES[(index - 1 + RUNES.length) % RUNES.length];
  const next = RUNES[(index + 1) % RUNES.length];
  return [
    '<section class="detail-hero"><div class="wrap"><a class="back-link" href="/runes">← 返回 24 枚符文</a>',
    '<div class="detail-top"><div class="giant-rune">', r.symbol, '</div><div>',
    '<span class="eyebrow">Rune ', String(r.id).padStart(2, '0'), '</span>',
    '<h1 class="detail-title">', esc(r.name), '</h1><div class="detail-subtitle">', esc(r.chineseName), '</div>',
    '<div class="keywords">', r.keywords.map(k => '<span class="chip">' + esc(k) + '</span>').join(''), '</div>',
    '<p class="lead">', esc(r.summary), '</p></div></div></div></section>',
    '<section><div class="wrap detail-grid">',
    contentCard('核心含義', r.meaning, 'feature'),
    contentCard('正向／明亮解讀', r.brightMeaning),
    contentCard('負向／陰影解讀', r.shadowMeaning),
    contentCard('感情中的含義', r.love),
    contentCard('給學習者的建議', r.advice),
    reflectionCard(r),
    todayActionCard(r),
    '</div></section>',
    '<section class="section compact-section"><div class="wrap"><div class="rune-detail-nav" role="navigation" aria-label="符文詳情導覽">',
    '<a class="detail-nav-card" href="/runes/', prev.slug, '"><span>上一枚</span><b>', esc(prev.name), '</b><small>', esc(prev.chineseName), '</small></a>',
    '<a class="detail-nav-card overview" href="/runes"><span>回到總覽</span><b>24 枚符文</b><small>依 Elder Futhark 順序瀏覽</small></a>',
    '<a class="detail-nav-card" href="/runes/', next.slug, '"><span>下一枚</span><b>', esc(next.name), '</b><small>', esc(next.chineseName), '</small></a>',
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
    '<a class="btn" href="/runes/', rune.slug, '">深入認識這枚符文</a></div>'
  ].join('');
}

function aboutMethodCard(number, title, body) {
  return '<article class="content-card about-method-card"><span class="method-number">' + number + '</span><h3>' + title + '</h3>' + body + '</article>';
}

function aboutPage() {
  return [
    '<section class="about-hero"><div class="wrap about-hero-grid"><div><span class="eyebrow">The Observer of Yggdrasil</span><h1>關於 Ori</h1>',
    '<p class="reading-tagline">世界樹觀測者</p><p class="lead">以符文作為鏡子，陪你在關係、選擇與命運的訊息裡，找回清醒與力量。</p>',
    '<div class="button-row"><a class="btn primary" href="/about" data-scroll-target="about-method">了解我的占卜方法</a>', button('預約盧恩占卜', SERVICE_LINKS.booking), '</div></div>',
    '<div class="about-hero-mark"><img src="/assets/rune-logo.jpg" alt="世界樹觀測者 Ori Logo"></div></div></section>',

    '<section class="section"><div class="wrap about-intro"><div class="portrait-mark"><img src="/assets/rune-logo.jpg" alt="世界樹觀測者 Ori Logo"></div><div>',
    '<span class="eyebrow">Meet Ori</span><h2>我是 Ori，盧恩符文占卜師與教學者。</h2>',
    '<p>我使用盧恩符文、塔羅與神秘學系統作為工具，協助人們理解感情、關係、選擇與生命中的轉化時刻。</p>',
    '<p>對我來說，占卜不是替人決定命運，也不是給出一個絕對的預言。它更像是一面鏡子，幫助你看見自己現在站在哪裡、正在被什麼影響，以及接下來可以如何更清醒地行動。</p>',
    '<p>「世界樹觀測者」這個名字，來自我對盧恩的理解。世界樹連結不同的世界，也象徵人生命中的關係、選擇、過去與未來。而觀測者不是操控命運的人，而是願意停下來，看見事件背後結構的人。</p>',
    '<p>我希望這裡能成為一個安靜但清醒的入口。讓你不只是得到答案，而是透過符文，看見自己生命中的秩序。</p></div></div></section>',

    '<section class="section"><div class="wrap about-story-grid"><div><span class="eyebrow">My Journey</span><h2>我的經歷</h2>',
    '<div class="quote-box">我並不是一開始就帶著「我要成為占卜師」的目標走向盧恩。</div></div><div class="prose-stack">',
    '<p>在接觸神秘學之前，我也曾在感情、關係與人生選擇中感到混亂。有些時候，真正讓人痛苦的不是事情本身，而是腦中反覆出現的念頭：對方到底怎麼想？我該繼續，還是放下？我是不是又在同樣的模式裡消耗自己？</p>',
    '<p>後來，我開始接觸塔羅、盧恩、神秘學與象徵系統。我發現，占卜真正有力量的地方，不是告訴我「未來一定會怎樣」，而是幫助我看清楚：我正在經歷什麼、我為什麼會被困住，以及我可以從哪裡重新拿回自己的力量。</p>',
    '<p>盧恩尤其吸引我。它不像塔羅那樣充滿畫面，而是更像一種古老、簡潔、直接的語言。每一枚符文都像是一個生命課題：資源、力量、界線、等待、轉化、保護、關係、傳承。</p>',
    '<p>也因為這樣，我開始建立自己的盧恩解讀方式。不依賴通靈，也不把占卜說成神秘不可理解的力量。我更重視的是：如何把符文的象徵，轉化成清楚、白話、可以帶回生活裡行動的指引。</p>',
    '</div></div></section>',

    '<section class="section about-philosophy"><div class="wrap"><div class="section-head"><div><span class="eyebrow">My Philosophy</span><h2>我的占卜理念</h2></div>',
    '<p>我相信，占卜不是把人生交給命運決定。真正有價值的占卜，是讓你更清楚地回到自己身上。</p></div>',
    '<div class="about-philosophy-grid"><div class="content-card feature"><h3>盧恩不會替你做選擇，它會幫助你看見：</h3>',
    '<ul class="about-value-list"><li>現在的狀態是什麼</li><li>問題真正卡住的地方在哪裡</li><li>你正在使用或壓抑哪一股力量</li><li>這段關係或選擇背後的課題是什麼</li><li>接下來可以如何更清醒地行動</li></ul></div>',
    '<div class="quote-box">我重視的是讓你理解問題的結構。因為當你看懂自己為什麼混亂、為什麼等待、為什麼執著，你就不再只是被情緒推著走。</div></div></div></section>',

    '<section class="section" id="about-method"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Methodology</span><h2>我的方法論</h2></div>',
    '<p>從問題整理、符文解讀到現實行動，每一步都為了讓訊息更清楚、更能被你使用。</p></div><div class="about-method-grid">',
    aboutMethodCard('01', '先整理問題，而不是急著給答案',
      '<p>很多人來占卜時，會問：「他還愛我嗎？」「我們會不會復合？」「我該不該放棄？」</p><p>但這些問題背後，往往還有更深的需求：我是不是還被在乎？這段關係還值得我投入嗎？我現在的等待，是愛，還是焦慮？</p><p>所以在解讀之前，我會先協助你看見問題真正的形狀。問題問得越清楚，符文給出的訊息也會越精準。</p>'),
    aboutMethodCard('02', '用符文看見狀態、力量與課題',
      '<p>盧恩不是單純回答「會」或「不會」。它更擅長指出一件事情背後正在運作的力量。</p><ul><li>事件目前的狀態</li><li>關係中的力量流動</li><li>你內在真正的課題</li><li>問題裡失衡的地方</li><li>可以採取的行動方向</li></ul><p>我希望你收到的不是一段模糊的神秘訊息，而是一份能讓你重新理解自己與現實的指引。</p>'),
    aboutMethodCard('03', '不依牌面方向判讀，而是看見明亮面與陰影面',
      '<p>在我的盧恩系統中，符文不同於塔羅，不依牌面方向區分含義。每一枚符文都是一股力量。</p><p>當這股力量被清楚、成熟地使用時，會展現出正向／明亮面；當它被壓抑、過度使用或失衡時，則會展現為負向／陰影面。</p><p>陰影不代表壞事。它是一種提醒，指出哪裡需要被看見、理解與調整。</p>'),
    aboutMethodCard('04', '把神秘訊息轉化為現實中的行動',
      '<p>我不希望占卜只是讓你覺得「很準」。我更希望你在看完解讀後，能知道：我現在可以先做什麼？我需要停止什麼消耗？我該如何調整自己的位置？</p><div class="method-closing">占卜的終點不是依賴占卜，而是透過占卜，重新相信自己的判斷力。</div>'),
    '</div></div></section>',

    '<section class="section"><div class="wrap about-value"><span class="eyebrow">What I Hope to Offer</span><h2>我希望帶給你的</h2>',
    '<p>如果你正在混亂、等待、不確定，或在一段關係裡反覆失去自己的中心，盧恩可以成為一個讓你重新看見自己的入口。</p>',
    '<p>你不需要立刻知道所有答案。有時候，真正重要的是先看清楚：</p>',
    '<div class="about-value-points"><span>自己究竟站在哪裡</span><span>什麼正在影響你</span><span>什麼已經不再適合你</span><span>接下來想成為什麼樣的人</span></div>',
    '<div class="quote-box"><strong>我是 Ori。我以符文作為鏡子，陪你在關係、選擇與命運的訊息裡，找回清醒與力量。</strong></div></div></section>',

    '<section class="section"><div class="wrap"><div class="cta about-cta"><span class="eyebrow">Continue with Ori</span><h2>從看見自己開始</h2>',
    '<p class="lead">你可以預約一次盧恩占卜，也可以先從網站的新手指南或每日符文開始。</p>',
    '<div class="button-row">', button('預約盧恩占卜', SERVICE_LINKS.booking, true), button('前往新手入門', '/beginner'), button('抽取今日符文', '/daily'), '</div></div></div></section>'
  ].join('');
}

function readingPlanCard(name, price, format, suitable, timing, note) {
  return [
    '<article class="content-card reading-plan-card"><span class="eyebrow">Rune Reading</span><h3>', name, '</h3>',
    '<p class="plan-price">', price, '</p>',
    '<dl><div><dt>形式</dt><dd>', format, '</dd></div><div><dt>適合對象</dt><dd>', suitable, '</dd></div>',
    '<div><dt>時間／回覆</dt><dd>', timing, '</dd></div><div><dt>備註</dt><dd>', note, '</dd></div></dl></article>'
  ].join('');
}

function readingStep(number, title, body) {
  return '<article class="reading-step"><span>Step ' + number + '</span><h3>' + title + '</h3><p>' + body + '</p></article>';
}

function runeReadingPage() {
  return [
    '<section class="reading-hero"><div class="wrap"><div class="reading-hero-copy"><span class="eyebrow">Rune Reading with Ori</span>',
    '<h1>預約盧恩占卜</h1><p class="reading-tagline">在混亂裡，看見問題真正的形狀</p>',
    '<div class="reading-hero-text"><p>有些問題，不是沒有答案。<br>而是你已經在同一個念頭裡繞了太久，開始分不清自己真正害怕的是什麼、想要的是什麼，又該往哪裡走。</p>',
    '<p>盧恩符文占卜不是替你決定命運，也不是給你一個絕對的預言。它更像是一面古老的鏡子，幫助你看見當下事件背後的力量、阻礙、課題與可能的方向。</p>',
    '<p>適合正在面對感情不確定、關係冷淡拉扯、自我混亂，或人生選擇前需要整理方向的人。</p></div>',
    '<div class="button-row">', button('立即預約盧恩占卜', SERVICE_LINKS.booking, true), button('先抽取今日符文', '/daily'), '</div>',
    '</div></div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Service Plans</span><h2>選擇適合你的占卜方式</h2></div>',
    '<p>不同的問題，需要不同的承接方式。你可以依照自己的狀態、問題複雜度，以及想要收到回覆的形式，選擇最適合你的盧恩占卜方案。</p></div>',
    '<div class="service-table-wrap"><table class="service-table"><caption class="sr-only">盧恩占卜服務方案與價格比較</caption><thead><tr><th scope="col">方案</th><th scope="col">費用</th><th scope="col">形式</th><th scope="col">適合對象</th><th scope="col">時間／回覆</th><th scope="col">備註</th></tr></thead><tbody>',
    '<tr><th scope="row">文字單題占卜</th><td><strong>400 元／單題</strong></td><td>文字回覆</td><td>想保留紀錄、慢慢閱讀與消化的人</td><td>確認收款後開始計時，24 小時內提供回覆</td><td>適合單一明確問題</td></tr>',
    '<tr><th scope="row">語音單題占卜</th><td><strong>400 元／15 分鐘</strong></td><td>線上語音</td><td>想即時互動、快速釐清問題的人</td><td>確認付款後安排時間</td><td>適合需要補充背景與即時整理的人</td></tr>',
    '<tr><th scope="row">現場面對面占卜</th><td><strong>1200 元／小時</strong></td><td>現場占卜</td><td>問題較複雜、想深度整理狀態的人</td><td>依預約時間進行</td><td>限雙北地區，需預付 50% 費用作為預約保留</td></tr>',
    '</tbody></table></div>',
    '<div class="reading-plan-mobile">',
    readingPlanCard('文字單題占卜', '400 元／單題', '文字回覆', '想保留紀錄、慢慢閱讀與消化的人', '確認收款後開始計時，24 小時內提供回覆', '適合單一明確問題'),
    readingPlanCard('語音單題占卜', '400 元／15 分鐘', '線上語音', '想即時互動、快速釐清問題的人', '確認付款後安排時間', '適合需要補充背景與即時整理的人'),
    readingPlanCard('現場面對面占卜', '1200 元／小時', '現場占卜', '問題較複雜、想深度整理狀態的人', '依預約時間進行', '限雙北地區，需預付 50% 費用作為預約保留'),
    '</div>',
    '<div class="quote-box plan-note"><p>如果你的問題很明確，建議選擇文字單題占卜。如果你希望即時互動，可以選擇語音占卜。如果問題較複雜，或需要完整一小時慢慢整理，會更適合現場面對面占卜。</p>',
    '<p>若你不確定該選哪一種，也可以先簡單描述狀況，我會協助你整理問題，並確認適合的方案。</p></div></div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Choose Your Way</span><h2>如何選擇方案</h2></div>',
    '<p>先從你希望如何接收與整理訊息開始選擇。</p></div><div class="start-card-grid aett-grid">',
    startInfoCard('想保留紀錄', '適合選擇文字單題占卜。你可以慢慢閱讀解讀內容，日後也能回頭整理自己的狀態。'),
    startInfoCard('想即時互動', '適合選擇語音單題占卜。過程中可以補充背景，也能更快速釐清問題。'),
    startInfoCard('想深度整理', '適合選擇現場面對面占卜。適合問題較複雜，或希望在一小時內完整梳理狀態的人。'),
    '</div></div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Is This for You</span><h2>預約前，先確認你的需要</h2></div>',
    '<p>占卜最有價值的時刻，是你願意看見訊息，也願意回到現實中採取行動。</p></div><div class="fit-grid">',
    '<article class="content-card fit-card suitable"><h3>適合你，如果你：</h3><ul><li>正在感情或關係中感到混亂</li><li>面對冷淡、曖昧、不確定關係而焦慮</li><li>想理解一段關係真正的狀態與課題</li><li>需要在重要選擇前整理自己的方向</li><li>想透過盧恩看見自己目前的內在狀態</li><li>不只是想知道結果，也願意理解自己能怎麼做</li></ul></article>',
    '<article class="content-card fit-card unsuitable"><h3>不適合你，如果你：</h3><ul><li>只想要一個保證答案</li><li>希望占卜替你控制他人</li><li>無法接受與期待不同的訊息</li><li>想用占卜取代現實中的溝通與行動</li><li>短時間內反覆問同一件事，只為了讓自己安心</li></ul></article>',
    '</div></div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">How It Works</span><h2>占卜流程</h2></div>',
    '<p>從提出問題到收到解讀，共有四個清楚步驟。</p></div><div class="reading-steps">',
    readingStep('1', '送出問題與背景', '請簡單描述你想詢問的主題、目前狀況與最困惑的地方。'),
    readingStep('2', '確認問題與方案', '我會協助確認問題是否適合占卜，並確認適合文字、語音或現場占卜。'),
    readingStep('3', '完成付款與預約', '文字占卜確認收款後開始計時；語音占卜確認付款後安排時間；現場占卜需預付 50%。'),
    readingStep('4', '收到盧恩解讀', '我會依照你的問題抽取符文，整理目前狀態、核心課題與可行的行動建議。'),
    '</div></div></section>',

    readingFaqAccordion(),

    '<section class="section"><div class="wrap reading-philosophy"><span class="eyebrow">My Practice</span><h2>我的占卜理念</h2>',
    '<p>我相信，占卜不是把人生交給命運決定。真正有價值的占卜，是讓你更清楚地回到自己身上。</p>',
    '<p>盧恩不會替你做選擇，也不會要求你盲目相信某個結果。它會告訴你：你現在站在哪裡、正在被什麼力量影響、哪裡需要調整，以及你可以如何更有意識地面對眼前的問題。</p>',
    '<p>我不會用恐嚇式語言製造焦慮，也不會把任何結果說成無法改變的命定。我更重視的是讓你理解問題的結構，協助你從混亂、等待、焦慮或執著之中，找回比較清醒的位置。</p>',
    '<div class="quote-box"><strong>盧恩不替你逃避現實，而是幫助你更誠實地看見現實。</strong></div></div></section>',

    '<section class="section"><div class="wrap"><div class="cta reading-cta" id="booking"><span class="eyebrow">Book a Reading</span><h2>如果你正在混亂裡，先讓問題被看見</h2>',
    '<p class="lead">你不需要立刻知道所有答案。<br>有時候，真正重要的是先看清楚：自己究竟站在哪裡。</p>',
    '<div class="button-row">', button('立即預約盧恩占卜', SERVICE_LINKS.booking, true), button('先抽取今日符文', '/daily'), '</div></div></div></section>'
  ].join('');
}

function courseList(items, className = 'course-check-list') {
  return '<ul class="' + className + '">' +
    items.map(item => '<li>' + esc(item) + '</li>').join('') +
    '</ul>';
}

function courseFeatureCard(title, paragraphs) {
  return '<article class="content-card course-feature-card"><h3>' + esc(title) + '</h3>' +
    paragraphs.map(paragraph => '<p>' + esc(paragraph) + '</p>').join('') +
    '</article>';
}

function courseLesson(number, title, body) {
  return '<article class="course-lesson"><span class="course-lesson-number">' + number + '</span>' +
    '<div><span class="eyebrow">Lesson ' + number + '</span><h3>' + esc(title) + '</h3><p>' + esc(body) + '</p></div></article>';
}

function coursesPage() {
  const painPoints = [
    '知道每一枚符文有關鍵字，卻不知道怎麼組成完整解讀',
    '看過很多資料，但不同說法太多，越看越混亂',
    '想學占卜，卻覺得自己沒有通靈能力或靈感不夠',
    '學過塔羅或其他神秘學工具，卻還沒有建立自己的解讀語言',
    '想用盧恩做日常指引，卻不知道如何開始練習',
    '想擁有一套屬於自己的占卜工具，而不只是購買現成符文'
  ].map((item, index) =>
    '<article class="course-pain-card"><span>0' + (index + 1) + '</span><p>' + esc(item) + '</p></article>'
  ).join('');

  const outcomes = [
    '如何理解 24 枚盧恩的核心力量',
    '如何把符文應用在感情、關係、選擇與人生課題中',
    '如何分辨符文的明亮面與陰影面',
    '如何從北歐神話理解符文背後的生命課題',
    '如何設計問題，讓占卜結果更清楚',
    '如何開始建立自己的占卜語言',
    '如何創作屬於自己的第一套專屬符文'
  ];

  const audiences = [
    '完全沒有盧恩基礎，但想從零開始學',
    '對北歐神話、符文、占卜與神秘學有興趣',
    '已經接觸塔羅、占星或其他工具，想擴充新的解讀系統',
    '想學會一套不依賴通靈，也能清楚判讀的占卜方式',
    '想把占卜應用在感情、關係、自我探索與人生選擇裡',
    '想親手創作一套屬於自己的盧恩符文',
    '想建立更有個人風格的神秘學工具'
  ];

  return [
    '<section class="course-hero"><div class="wrap course-hero-grid"><div class="course-hero-copy">',
    '<span class="eyebrow">Rune Divination Course</span><p class="course-kicker">盧恩符文課程</p>',
    '<h1>不靠通靈，<br>也能讀懂符文</h1>',
    '<p class="lead">從查資料到真正解讀，讓 24 枚盧恩成為你能實際使用的占卜語言。</p>',
    '<p>你可能已經知道 Fehu 是財富、Gebo 是禮物、Isa 是冰，卻仍不知道該如何把關鍵字放進真實問題。這堂課不要求你死背答案，而是從北歐神話、符文結構與占卜原理出發，協助你建立真正理解、也能實際使用的解讀系統。</p>',
    '<p>你不需要天生敏感，也不需要先學會通靈。只要願意進入符文的語言，就能開始讀懂它背後的智慧。</p>',
    '<div class="button-row">', button('加入官方 LINE 諮詢課程', COURSE_LINE_URL, true), '</div></div>',
    '<div class="course-hero-mark" aria-hidden="true"><span>ᚨ</span><small>ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ</small></div></div></section>',

    '<section class="section course-pain-section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Where Learning Gets Stuck</span><h2>你是不是也卡在這裡？</h2></div>',
    '<p>你可能已經對盧恩有興趣，卻一直停在「查資料」的階段。</p></div>',
    '<div class="course-pain-grid">', painPoints, '</div>',
    '<div class="course-section-note"><p>如果你想要的不是零散資料，而是一條可以真正走完的學習路徑，這堂課會帶你從零開始，進入盧恩的世界。</p></div></div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">From Keywords to Reading</span><h2>從查資料，到真正解讀</h2></div>',
    '<p>網路上可以查到很多符文關鍵字，但關鍵字不等於解讀能力。</p></div>',
    '<div class="course-contrast-grid"><article class="content-card course-keyword-card"><span class="eyebrow">You Can Look Up</span><h3>查得到的關鍵字</h3>',
    '<dl><div><dt>Fehu</dt><dd>財富</dd></div><div><dt>Uruz</dt><dd>力量</dd></div><div><dt>Gebo</dt><dd>禮物</dd></div><div><dt>Isa</dt><dd>冰</dd></div></dl></article>',
    '<article class="content-card course-question-card"><span class="eyebrow">What Reading Requires</span><h3>真正需要解讀的問題</h3>',
    '<blockquote>「這段關係目前卡在哪裡？」</blockquote><blockquote>「我該繼續等待，還是往前走？」</blockquote><blockquote>「我現在真正需要面對的課題是什麼？」</blockquote><blockquote>「這枚符文究竟想提醒我什麼？」</blockquote></article></div>',
    '<div class="course-reading-summary"><p>這堂課會協助你把零散知識整理成系統，讓符文不再只是神秘符號，而是你能真正使用的占卜語言。</p>',
    '<strong>你不只會知道每一枚符文的意思，也會學習如何讀出狀態、課題與行動方向。</strong></div></div></section>',

    '<section class="section course-outcome-section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">What You Will Build</span><h2>這堂課會帶你完成什麼？</h2></div>',
    '<p>目標不是背下 24 枚符文的標準答案，而是逐步建立能實際使用的能力。</p></div>',
    '<div class="course-outcome-grid">', courseList(outcomes, 'course-check-list'), '</div>',
    '<div class="quote-box course-transformation"><strong>從「我知道這枚符文的關鍵字」，走到「我能把符文轉化成一段有意義的解讀」。</strong><p>這才是盧恩真正能被使用的開始。</p></div></div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Who This Is For</span><h2>這堂課適合誰？</h2></div>',
    '<p>無論你是完全新手，或已有其他神秘學基礎，都可以從這裡建立盧恩語言。</p></div>',
    '<div class="course-audience-grid"><article class="content-card course-audience-card"><h3>這堂課適合你，如果你：</h3>', courseList(audiences), '</article>',
    '<aside class="course-not-for-card"><span class="eyebrow">A Gentle Reminder</span><h3>這不是一份速成答案表</h3>',
    '<p>這堂課不適合只想快速得到標準答案的人。因為我們要做的，不只是記住符文，而是學會閱讀符文。</p>',
    '<p>你會需要願意觀察、練習，並慢慢建立自己的理解。</p></aside></div></div></section>',

    '<section class="section course-feature-section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Course Features</span><h2>課程特色</h2></div>',
    '<p>從理解到實作，讓符文不只停留在筆記裡。</p></div><div class="course-feature-grid">',
    courseFeatureCard('不需要通靈，也能建立解讀系統', [
      '盧恩不是只有靈感很強的人才能學。它是一套可以被理解、練習與建立的象徵語言。',
      '課程會從符文結構、神話脈絡與占卜原理開始，帶你一步步判讀，而不是只憑感覺猜答案。'
    ]),
    courseFeatureCard('從北歐神話理解符文', [
      '奧丁、世界樹、九界、諸神、巨人與命運，都是理解符文的重要線索。',
      '神話不是裝飾，它會讓你知道一枚符文為什麼代表這股力量，又如何在人生裡形成課題。'
    ]),
    courseFeatureCard('從 24 枚符文建立占卜語言', [
      '課程會依照三組 Aett 建立學習架構，理解每枚符文在不同問題中的表現。',
      '你會用明亮面與陰影面，閱讀同一股力量在平衡與失衡時的不同樣貌。'
    ]),
    courseFeatureCard('創作你的第一套專屬符文', [
      '你不只會學會解讀，也會理解如何取得、製作與啟動自己的第一套符文。',
      '那不只是一組占卜工具，而是你與符文建立關係的開始。'
    ]),
    '</div></div></section>',

    '<section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Five-Part Journey</span><h2>五堂課程簡介</h2></div>',
    '<p>官網只呈現學習主軸；完整課綱與每堂細節會在官方 LINE 提供。</p></div><div class="course-lessons">',
    courseLesson('01', '神話與盧恩的序幕', '從北歐創世神話、世界樹與奧丁的獻祭開始，理解盧恩的起源與精神。'),
    courseLesson('02', '豐盛氏族的款待', "認識 Freyr's Aett，學習與資源、生命力、創造、關係與喜悅相關的符文。"),
    courseLesson('03', '永恆守護的變革', "認識 Heimdall's Aett，理解考驗、命運、守護、轉化與光明。"),
    courseLesson('04', '信念激盪的黃昏', "認識 Tyr's Aett，學習正義、信念、意志、人性、流動與傳承。"),
    courseLesson('05', '再創世的開端', '整合占卜原理、符文陣式與綁定盧恩概念，開始建立自己的占卜系統。'),
    '</div><div class="course-inline-cta"><p>完整課綱、每堂細節與開課梯次，歡迎加入官方 LINE 詢問。</p>',
    button('加入官方 LINE 取得完整課綱', COURSE_LINE_URL, true), '</div></div></section>',

    '<section class="section course-consult-section"><div class="wrap course-consult-grid"><div><span class="eyebrow">Talk with Ori</span><h2>想知道這堂課適不適合你？</h2>',
    '<p>每個人接觸盧恩的原因都不同。你可以先加入官方 LINE，簡單告訴我你的學習狀態，我會協助你判斷這堂課是否符合需求。</p>',
    '<div class="button-row">', button('加入官方 LINE，確認這堂課是否適合你', COURSE_LINE_URL, true), '</div></div>',
    '<article class="content-card course-consult-card"><h3>你可以先和我聊聊：</h3>', courseList([
      '目前是否有神秘學基礎',
      '為什麼想學盧恩',
      '想把盧恩應用在哪裡',
      '比較想學占卜、神話，還是製作專屬符文'
    ]), '<p class="muted">完整課綱、開課梯次、費用與報名方式，也會在 LINE 中提供。</p></article></div></section>',

    '<section class="section faq-section course-faq-section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Course FAQ</span><h2>常見問題</h2></div>',
    '<p>先回答幾個開始學習前最常遇到的疑問。</p></div><div class="faq-list">', accordion(COURSE_FAQ_ITEMS, 'course-faq', false), '</div></div></section>',

    '<section class="section"><div class="wrap course-language-grid"><div><span class="eyebrow">Build Your Language</span><h2>從 24 枚盧恩開始，建立你的占卜語言</h2>',
    '<p>如果你只是想知道「每一枚符文的意思」，網路上已經有很多資料可以查。</p>',
    '<p>但如果你想學會的是把符文放進真實問題、看懂狀態與課題，並建立一套能長期使用的解讀語言，那麼這堂課會是一個適合開始的入口。</p>',
    '<div class="button-row">', button('私訊 Ori，聊聊你的學習狀態', COURSE_LINE_URL, true), '</div></div>',
    '<article class="course-language-card"><span class="giant-rune">ᚨ</span><p>你不需要通靈，也可以讀懂符文。你不需要一開始就很有天賦，也可以透過系統學習建立能力。</p></article></div></section>',

    '<section class="section course-journey-section"><div class="wrap course-journey"><span class="eyebrow">Begin the Journey</span><h2>開始你的盧恩之旅</h2>',
    '<p class="lead">現在，我將以盧恩為經，神話為緯，<br>為你編織一段冰火交織的創世史詩。</p>',
    '<p>你將從 24 枚符文出發，認識眾神、世界樹、命運與再創世的智慧，並在課程中建立自己的占卜系統，刻下屬於你的第一套專屬符文。</p>',
    '<p class="course-journey-call">而你——探尋奧秘的騎樹者，<br>便隨我一同踏上旅程。</p>',
    '<div class="button-row">', button('取得完整課綱與開課梯次', COURSE_LINE_URL, true), '</div></div></section>',

    '<section class="section"><div class="wrap"><div class="cta course-final-cta"><span class="eyebrow">Your Next Step</span><h2>準備好讓符文成為你的語言了嗎？</h2>',
    '<p class="lead">先加入官方 LINE，告訴 Ori 你目前的學習狀態。完整課綱、梯次、費用與報名方式，都會在諮詢中提供。</p>',
    '<div class="button-row">', button('加入官方 LINE 諮詢課程', COURSE_LINE_URL, true), '</div></div></div></section>'
  ].join('');
}

function notFound() {
  return '<section class="not-found"><div><span class="eyebrow">The path is hidden</span><h1>找不到這條道路</h1>' + button('回到首頁', '/', true) + '</div></section>';
}

function normalizePath(pathname) {
  let path = decodeURIComponent(pathname || '/');
  path = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return path || '/';
}

function legacyHashTarget() {
  if (!location.hash.startsWith('#/')) return '';
  let target = location.hash.slice(1) || '/';
  if (target === '/start-here') target = '/beginner';
  if (target.startsWith('/rune/')) target = '/runes/' + target.slice('/rune/'.length);
  return normalizePath(target);
}

function migrateLegacyHash() {
  const target = legacyHashTarget();
  if (!target) return false;
  history.replaceState({}, '', target);
  return true;
}

function render() {
  const path = normalizePath(location.pathname);
  const parts = path.split('/').filter(Boolean);
  if (path === '/') {
    app.innerHTML = homePage();
    setMeta({
      title: '盧恩符文學習｜Elder Futhark 24 枚符文｜世界樹觀測者 Ori',
      description: '認識 Elder Futhark 24 枚盧恩符文，學習符文含義、每日符文抽取、感情與人生選擇中的象徵指引。由世界樹觀測者 Ori 建立的盧恩學習入口。',
      canonicalPath: '/'
    });
  }
  else if (path === '/beginner') {
    app.innerHTML = startHerePage();
    setMeta({
      title: '新手入門｜盧恩符文學習指南｜世界樹觀測者 Ori',
      description: '第一次接觸盧恩符文也能輕鬆開始。認識盧恩是什麼、可以用來做什麼、24 枚符文架構、每日符文抽取方式與推薦學習順序。',
      canonicalPath: '/beginner'
    });
  }
  else if (path === '/runes') {
    app.innerHTML = runesPage();
    setMeta({
      title: '24 枚盧恩符文含義｜Elder Futhark 符文總覽｜世界樹觀測者 Ori',
      description: "完整認識 Elder Futhark 24 枚盧恩符文，依 Freyr's Aett、Heimdall's Aett、Tyr's Aett 三組群組學習符文名稱、象徵、明亮解讀與陰影解讀。",
      canonicalPath: '/runes'
    });
  }
  else if (path === '/daily') {
    app.innerHTML = dailyPage();
    setMeta({
      title: '每日一符文｜抽取今日盧恩指引｜世界樹觀測者 Ori',
      description: '為今天抽取一枚盧恩符文，透過符文訊息理解當下狀態、內在課題與今日行動建議。',
      canonicalPath: '/daily'
    });
  }
  else if (path === '/about') {
    app.innerHTML = aboutPage();
    setMeta({
      title: '關於 Ori｜世界樹觀測者｜盧恩符文占卜師與教學者',
      description: 'Ori 是盧恩符文占卜師與教學者，以 24 枚 Elder Futhark 盧恩符文作為象徵系統，協助你理解感情、關係、選擇與生命中的轉化時刻。',
      ogTitle: '關於 Ori｜世界樹觀測者',
      ogDescription: '認識世界樹觀測者 Ori 的品牌理念、個人經歷與盧恩占卜方法論。占卜不是替你決定命運，而是幫助你看見問題結構，找回清醒與力量。',
      canonicalPath: '/about'
    });
  }
  else if (path === '/rune-reading') {
    app.innerHTML = runeReadingPage();
    setMeta({
      title: '預約盧恩占卜｜感情關係與人生選擇指引｜世界樹觀測者 Ori',
      description: '提供文字、語音與現場盧恩占卜服務，協助你整理感情關係、自我狀態與人生選擇中的核心課題。文字占卜 400 元／單題，語音占卜 400 元／15 分鐘，現場占卜 1200 元／小時。',
      ogTitle: '預約盧恩占卜｜世界樹觀測者 Ori',
      ogDescription: '在混亂裡，看見問題真正的形狀。透過 24 枚盧恩符文，整理感情、關係與人生選擇中的狀態、課題與行動方向。',
      canonicalPath: '/rune-reading'
    });
  }
  else if (path === '/courses') {
    app.innerHTML = coursesPage();
    setMeta({
      title: '盧恩符文課程｜不靠通靈，也能建立你的符文占卜系統｜世界樹觀測者 Ori',
      description: '從 24 枚 Elder Futhark 盧恩符文出發，透過北歐神話、符文結構與占卜原理，建立不依賴通靈也能實際使用的盧恩解讀系統。加入官方 LINE 取得完整課綱與開課梯次。',
      ogTitle: '盧恩符文課程｜不靠通靈，也能建立你的符文占卜系統',
      ogDescription: '從查資料到真正解讀，學會用 24 枚盧恩符文建立自己的占卜語言。加入官方 LINE 取得完整課綱與開課梯次。',
      canonicalPath: '/courses'
    });
  }
  else if (parts[0] === 'runes' && parts[1]) {
    app.innerHTML = detailPage(parts[1]);
    const rune = RUNES.find(item => item.slug === parts[1]);
    setMeta({
      title: rune ? rune.name + '｜' + rune.chineseName + '｜盧恩符文含義｜世界樹觀測者 Ori' : '盧恩符文含義｜世界樹觀測者 Ori',
      description: rune ? '認識 ' + rune.name + ' 盧恩符文的核心關鍵字、象徵含義、正向／明亮解讀、負向／陰影解讀、感情中的含義、自我提問與今日行動建議。' : '閱讀單一盧恩符文的核心含義、明亮面、陰影面與感情解讀。',
      canonicalPath: rune ? '/runes/' + rune.slug : '/runes'
    });
  }
  else {
    app.innerHTML = notFound();
    setMeta({
      title: '找不到頁面｜世界樹觀測者 Ori',
      description: '這條符文路徑不存在，請回到首頁重新開始。',
      ogTitle: '找不到頁面｜世界樹觀測者 Ori',
      ogDescription: '這條符文路徑不存在，請回到首頁重新開始。',
      canonicalPath: path
    });
  }

  const section = parts[0] || '';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    const active = (path === '/' && href === '/') ||
      (section === 'runes' && href === '/runes') ||
      (section && href === '/' + section);
    link.classList.toggle('active', Boolean(active));
  });
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

document.addEventListener('click', event => {
  if (event.target.closest('#draw-rune')) drawRune();
  const scrollLink = event.target.closest('[data-scroll-target]');
  if (scrollLink) {
    event.preventDefault();
    const target = document.querySelector('#' + scrollLink.getAttribute('data-scroll-target'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const faqButton = event.target.closest('.faq-question');
  if (faqButton) {
    const item = faqButton.closest('.faq-item');
    const panel = document.querySelector('#' + faqButton.getAttribute('aria-controls'));
    const expanded = faqButton.getAttribute('aria-expanded') === 'true';
    faqButton.setAttribute('aria-expanded', String(!expanded));
    item.classList.toggle('open', !expanded);
    if (panel) panel.hidden = expanded;
  }
  const internalLink = event.target.closest('a[href^="/"]');
  if (internalLink && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    const url = new URL(internalLink.href, location.origin);
    if (url.origin === location.origin) {
      event.preventDefault();
      const nextPath = normalizePath(url.pathname);
      if (nextPath !== normalizePath(location.pathname)) {
        history.pushState({}, '', nextPath);
      }
      render();
    }
  }
});
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
migrateLegacyHash();
window.addEventListener('popstate', render);
window.addEventListener('hashchange', () => {
  if (migrateLegacyHash()) render();
});
render();
