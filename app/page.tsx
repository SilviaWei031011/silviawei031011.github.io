import type { ReactNode } from 'react';

const github = 'https://github.com/SilviaWei031011';

function Link({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const external = href.startsWith('https://');
  return <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>;
}

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return <h2 id={id} className="section-heading">{children}</h2>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header id="top" className="topbar">
        <a className="wordmark" href="#about" aria-label="Yushan Wei, back to about">YW<span> / </span>卫雨杉</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#tools">Tools</a>
          <a href="#education">Education</a>
        </nav>
      </header>
      <div className="page">
        <aside className="identity" aria-label="Profile and contact links">
          <div className="portrait-placeholder" aria-hidden="true" />
          <div className="identity-text">
            <h1>Yushan Wei</h1>
            <p className="chinese-name" lang="zh">卫雨杉</p>
            <p className="affiliation">M.A. student<br /><span>Shanghai International<br className="desktop-break" /> Studies University</span></p>
            <div className="profile-links">
              <Link href="mailto:yushanwei0311@gmail.com">yushanwei0311@gmail.com</Link>
              <Link href="mailto:0243100192@shisu.edu.cn">0243100192@shisu.edu.cn</Link>
              <div className="profile-link-row"><Link href={github}>GitHub <span aria-hidden="true">↗</span></Link><Link href="https://orcid.org/0009-0009-2646-3613">ORCID <span aria-hidden="true">↗</span></Link></div>
              <div className="cv-links"><span>CV</span><a href="/cv/Yushan_Wei_CV_EN.pdf" target="_blank" rel="noopener noreferrer" aria-label="English CV, PDF">English ↗</a><a href="/cv/Yushan_Wei_CV_ZH.pdf" target="_blank" rel="noopener noreferrer" lang="zh" aria-label="中文简历，PDF">中文 ↗</a></div>
            </div>
          </div>
        </aside>
        <main id="main" className="content">
          <section id="about" aria-labelledby="about-heading">
            <p className="opportunity">I am applying for PhD programs starting in <strong>Fall 2027</strong> and am actively seeking <strong>research assistant positions.</strong></p>
            <SectionHeading id="about-heading">About</SectionHeading>
            <div className="about-copy">
              <p>I am an M.A. student in English Language and Literature at Shanghai International Studies University, expecting to graduate in June 2027. I am a research assistant in Sen Song’s lab at Tsinghua University and collaborate with Dr. Yimeng Chen at KAUST.</p>
              <p>My background in literary studies has shaped my interest in how people interpret and respond to language. My current research evaluates emotional expression in AI-generated writing and compares human and model responses to literary texts.</p>
              <p>Looking ahead, I aim to study how people interpret and evaluate AI-generated language, and how interactions with AI shape communication, trust, and emotional experience. I am particularly interested in how these processes vary across social and cultural contexts.</p>
            </div>
          </section>

          <section id="interests" aria-labelledby="interests-heading">
            <SectionHeading id="interests-heading">Research Interests</SectionHeading>
            <ul className="interests">
              <li>Computational Social Science</li>
              <li>Human–AI Interaction</li>
              <li>Language Model Evaluation</li>
              <li>Computational Literary Studies and Cultural Analytics</li>
            </ul>
          </section>

          <section id="research" aria-labelledby="research-heading">
            <SectionHeading id="research-heading">Research</SectionHeading>
            <article className="research-entry" aria-labelledby="pathos-title">
              <a className="research-figure" href="/images/pathos.svg" target="_blank" rel="noopener noreferrer" aria-label="View PATHOS study diagram"><img src="/images/pathos.svg" width="640" height="400" alt="Study overview: human-written and AI-generated news are compared through emotion dynamics and reader responses" loading="lazy" /></a>
              <div className="research-copy">
                <p className="paper-meta"><span>2026</span><span className="status">Under review</span></p>
                <h3 id="pathos-title">PATHOS: Evaluating Emotional Narration in LLM-Generated Long-Form News</h3>
                <p className="authors"><strong>Yushan Wei<sup>*</sup></strong>, Yimeng Chen<sup>*</sup>, Jen-tse Huang, and Jürgen Schmidhuber<sup>†</sup></p>
                <p className="research-summary">A study of emotional expression in human-written and AI-generated news, combining emotion dynamics, reader emotional distance, and human judgments to examine how generated writing differs from human reporting.</p>
              </div>
            </article>
            <article className="research-entry" aria-labelledby="litarc-title">
              <a className="research-figure" href="/images/litarc.svg" target="_blank" rel="noopener noreferrer" aria-label="View LitArc-Bench study diagram"><img src="/images/litarc.svg" width="640" height="400" alt="Study overview: literary texts are read in seven stages and human emotion ratings are compared with model ratings" loading="lazy" /></a>
              <div className="research-copy">
                <p className="paper-meta"><span>2026</span><span className="status">Preprint · Under review</span></p>
                <h3 id="litarc-title">LitArc-Bench: Disentangling Text-Specific Reader-Response Dynamics from Position and Lexical Affect</h3>
                <p className="authors">Mingming Su<sup>*</sup>, <strong>Yushan Wei<sup>*</sup></strong>, Sen Song, and Xinche Zhang<sup>†</sup></p>
                <p className="research-summary">A benchmark comparing human and model responses to literary texts across seven reading stages, separating text-specific emotional patterns from effects of reading position and lexical affect.</p>
                <div className="entry-links"><Link href="https://doi.org/10.48550/arXiv.2611.18412">arXiv <span aria-hidden="true">↗</span></Link></div>
              </div>
            </article>
            <article className="research-entry literary-entry" aria-labelledby="lessing-title">
              <div className="literary-mark" aria-hidden="true"><span>Literary<br />Studies</span><svg viewBox="0 0 96 60" fill="none"><path d="M48 14C35 6 19 5 8 9V49C22 45 34 48 48 55M48 14C61 6 77 5 88 9V49C74 45 62 48 48 55M48 14V55" stroke="currentColor" strokeWidth="2"/><path d="M18 20C25 19 33 21 39 24M18 29C25 28 33 30 39 33M57 24C63 21 71 19 78 20M57 33C63 30 71 28 78 29" stroke="currentColor" strokeWidth="1.5"/></svg></div>
              <div className="research-copy">
                <p className="paper-meta"><span>2023</span><span className="status">Published</span></p>
                <h3 id="lessing-title">Equality, Friendship and Harmony Interpretation of Postmodern Ethical Thought in Lessing’s on Cats</h3>
                <p className="authors"><strong>Yushan Wei</strong></p>
                <p className="venue"><i>Journal of Education, Humanities and Social Sciences</i>, 18:223–234</p>
                <div className="entry-links"><Link href="https://doi.org/10.54097/ehss.v18i.10999">Paper <span aria-hidden="true">↗</span></Link></div>
              </div>
            </article>
            <p className="author-note"><span>* Equal contribution</span><span>† Corresponding author</span></p>
          </section>

          <section id="tools" aria-labelledby="tools-heading">
            <SectionHeading id="tools-heading">Research Tools</SectionHeading>
            <div className="tools-grid">
              <article className="tool">
                <a href="/images/doc-finder.svg" target="_blank" rel="noopener noreferrer" aria-label="View Doc Finder workflow diagram"><img className="tool-figure" src="/images/doc-finder.svg" alt="Chinese reading notes lead to highlighted candidate passages in an English source" width="640" height="360" loading="lazy" /></a>
                <h3>Doc Finder</h3>
                <p className="tool-subtitle">Cross-Lingual Source Locator</p>
                <p>A cross-lingual tool that connects Chinese translations, paraphrases, and reading notes to candidate passages in English PDFs. Page references and highlighted previews help readers check the original context.</p>
                <div className="entry-links"><Link href={`${github}/doc-finder`}>GitHub <span aria-hidden="true">↗</span></Link><Link href="https://doc-finder.streamlit.app/">Demo <span aria-hidden="true">↗</span></Link></div>
              </article>
              <article className="tool">
                <a href="/images/littools.svg" target="_blank" rel="noopener noreferrer" aria-label="View LitTools workflow diagram"><img className="tool-figure" src="/images/littools.svg" alt="Scholarly sources are brought together into a literature overview with links for further reading" width="640" height="360" loading="lazy" /></a>
                <h3>LitTools</h3>
                <p className="tool-subtitle">Literary Research Workspace</p>
                <p>A workspace for quickly exploring scholarship on an author, literary work, or research topic across multiple academic sources. It brings titles and bibliographic records together to support initial topic exploration, with source links for more detailed searches and reading.</p>
                <div className="entry-links"><Link href={`${github}/lit-tools`}>GitHub <span aria-hidden="true">↗</span></Link><Link href="https://littools-literary-search.qrong.chatgpt.site">Demo <span aria-hidden="true">↗</span></Link></div>
              </article>
            </div>
          </section>

          <section id="education" aria-labelledby="education-heading">
            <SectionHeading id="education-heading">Education</SectionHeading>
            <article className="education-entry">
              <div className="education-identity"><span className="university-emblem sisu"><img src="/images/sisu.png" alt="" width="1280" height="720" loading="lazy" /></span><div><h3>Shanghai International Studies University</h3><p>M.A. in English Language and Literature</p></div></div>
              <p className="education-date">Sep 2024 – Jun 2027 <span>(expected)</span></p>
            </article>
            <article className="education-entry">
              <div className="education-identity"><span className="university-emblem sdu"><img src="/images/sdu.png" alt="" width="384" height="225" loading="lazy" /></span><div><h3>Shandong University</h3><p>B.A. in English (English–Japanese Program)</p></div></div>
              <p className="education-date">Sep 2020 – Jun 2024</p>
            </article>
          </section>
          <footer><span>© 2026 Yushan Wei</span><a href="#top">Back to top ↑</a></footer>
        </main>
      </div>
    </>
  );
}
