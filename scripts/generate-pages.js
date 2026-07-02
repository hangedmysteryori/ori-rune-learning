const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sourceDirectory = path.join(projectRoot, 'content', 'pages');
const outputDirectory = path.join(projectRoot, 'generated');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validatePage(page) {
  const requiredFields = [
    'slug',
    'title',
    'heroTitle'
  ];

  for (const field of requiredFields) {
    if (page[field] === undefined || page[field] === null || page[field] === '') {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (!/^[a-z0-9-]+$/.test(page.slug)) {
    throw new Error('The slug may only contain lowercase letters, numbers, and hyphens.');
  }

  if (page.sections !== undefined && !Array.isArray(page.sections)) {
    throw new Error('The sections field must be an array.');
  }

  (page.sections || []).forEach((section, index) => {
    if (!section.title || !section.body) {
      throw new Error(`Section ${index + 1} must include title and body.`);
    }
  });
}

function renderSections(sections) {
  return sections.map((section) => `
    <section class="section">
      <div class="wrap">
        <article class="content-card">
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.body)}</p>
        </article>
      </div>
    </section>`).join('');
}

function renderPage(page) {
  const pageTitle = page.metaTitle || page.title;
  const pageDescription = page.metaDescription || page.heroSubtitle || '';
  const canonicalPath = `/generated/${page.slug}.html`;
  const hasCta = Boolean(page.ctaText && page.ctaHref);
  const isExternalCta = hasCta && /^https?:\/\//.test(page.ctaHref);
  const externalAttributes = isExternalCta
    ? ' target="_blank" rel="noopener noreferrer"'
    : '';
  const heroSubtitle = page.heroSubtitle
    ? `<p class="lead">${escapeHtml(page.heroSubtitle)}</p>`
    : '';
  const ctaSection = hasCta
    ? `<section class="section">
      <div class="wrap">
        <div class="cta">
          <h2>${escapeHtml(page.ctaText)}</h2>
          <a class="btn primary" href="${escapeHtml(page.ctaHref)}"${externalAttributes}>
            ${escapeHtml(page.ctaText)}
          </a>
        </div>
      </div>
    </section>`
    : '';

  return `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(pageDescription)}">
  <title>${escapeHtml(pageTitle)}</title>
  <link rel="canonical" href="${escapeHtml(canonicalPath)}">
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(pageDescription)}">
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <div class="grain"></div>
  <header class="site-header">
    <a class="brand" href="/">
      <span><b>ORI</b><small>世界樹觀測者</small></span>
    </a>
  </header>
  <main>
    <section class="page-hero">
      <div class="wrap">
        <span class="eyebrow">${escapeHtml(page.title)}</span>
        <h1>${escapeHtml(page.heroTitle)}</h1>
        ${heroSubtitle}
      </div>
    </section>
    ${renderSections(page.sections || [])}
    ${ctaSection}
  </main>
  <footer>
    <p>願符文成為一面鏡子，照見你生命裡的秩序。</p>
    <small>© 世界樹觀測者 Ori</small>
  </footer>
</body>
</html>
`;
}

fs.mkdirSync(outputDirectory, { recursive: true });

const sourceFiles = fs.readdirSync(sourceDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === '.json')
  .map((entry) => entry.name)
  .sort();

sourceFiles.forEach((fileName) => {
  try {
    const sourcePath = path.join(sourceDirectory, fileName);
    const page = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
    validatePage(page);

    const outputPath = path.join(outputDirectory, `${page.slug}.html`);
    fs.writeFileSync(outputPath, renderPage(page), 'utf8');
    console.log(`Generated: ${path.relative(projectRoot, outputPath)}`);
  } catch (error) {
    console.error(`Skipped ${fileName}: ${error.message}`);
  }
});
