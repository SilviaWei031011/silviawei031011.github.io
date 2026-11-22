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
            <div className="profile-links">
              <Link href="mailto:yushanwei0311@gmail.com">yushanwei0311@gmail.com</Link>
              <Link href="mailto:0243100192@shisu.edu.cn">0243100192@shisu.edu.cn</Link>
              <div className="profile-link-row"><Link href={github}>GitHub</Link><Link href="https://orcid.org/0009-0009-2646-3613">ORCID</Link></div>
              <div className="cv-links"><span>CV</span><a href="/cv/Yushan_Wei_CV_EN.pdf" target="_blank" rel="noopener noreferrer" aria-label="English CV, PDF">English</a><a href="/cv/Yushan_Wei_CV_ZH.pdf" target="_blank" rel="noopener noreferrer" lang="zh" aria-label="中文简历，PDF">中文</a></div>
            </div>
          </div>
        </aside>
        <main id="main" className="content">
          <section id="about" aria-labelledby="about-heading">
            <SectionHeading id="about-heading">About</SectionHeading>
            <p className="opportunity"><strong>I am applying for PhD programs starting in Fall 2027 and am actively seeking research assistant positions.</strong></p>
            <div className="about-copy">
              <p>I am an M.A. student in English Language and Literature at <strong>Shanghai International Studies University (SISU)</strong>, expecting to graduate in June 2027. I am a research assistant in <Link href="https://brain.tsinghua.edu.cn/en/info/1010/1012.htm">Sen Song</Link>’s lab at Tsinghua University and collaborate with <Link href="https://beastlyprime.github.io/">Dr. Yimeng Chen</Link> at KAUST.</p>
              <p>I received my B.A. in English from <strong>Shandong University</strong>, where courses in computational thinking, corpus linguistics, and cognitive linguistics introduced me to computational and cognitive approaches to language. Together with my graduate training in <strong>literary studies</strong>, this background has shaped my interest in how people interpret and respond to language.</p>
              <p>My current research evaluates <strong>emotional expression in AI-generated writing</strong> and compares <strong>human and model responses to literary texts</strong>.</p>
              <p>Looking ahead, I aim to study how people interpret and evaluate AI-generated language, and how interactions with AI shape <strong>communication, trust, and emotional experience</strong>. I am particularly interested in how these processes vary across <strong>social and cultural contexts</strong>.</p>
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
              <a className="research-figure" href="/images/pathos-overview.png" target="_blank" rel="noopener noreferrer" aria-label="View the PATHOS paper overview figure"><img src="/images/pathos-overview.png" width="1804" height="968" alt="Study overview: human-written and AI-generated news are compared through emotion dynamics and reader responses" loading="lazy" /></a>
              <div className="research-copy">
                <p className="paper-meta"><span>2026</span><span className="status">Under review</span></p>
                <h3 id="pathos-title">PATHOS: Evaluating Emotional Narration in LLM-Generated Long-Form News</h3>
                <p className="authors"><strong>Yushan Wei<sup>*</sup></strong>, Yimeng Chen<sup>*</sup>, Jen-tse Huang, and Jürgen Schmidhuber<sup>†</sup></p>
              </div>
            </article>
            <article className="research-entry" aria-labelledby="litarc-title">
              <a className="research-figure" href="/images/litarc-overview.png" target="_blank" rel="noopener noreferrer" aria-label="View the LitArc-Bench paper overview figure"><img src="/images/litarc-overview.png" width="1756" height="740" alt="Study overview: literary texts are read in seven stages and human emotion ratings are compared with model ratings" loading="lazy" /></a>
              <div className="research-copy">
                <p className="paper-meta"><span>2026</span><span className="status">Preprint · Under review</span></p>
                <h3 id="litarc-title">LitArc-Bench: Disentangling Text-Specific Reader-Response Dynamics from Position and Lexical Affect</h3>
                <p className="authors">Mingming Su<sup>*</sup>, <strong>Yushan Wei<sup>*</sup></strong>, Sen Song, and Xinche Zhang<sup>†</sup></p>
                <div className="entry-links"><Link href="https://doi.org/10.48550/arXiv.2611.18412">arXiv</Link></div>
              </div>
            </article>
            <article className="research-entry literary-entry" aria-labelledby="lessing-title">
              <a className="research-figure paper-preview" href="/images/lessing-first-page.png" target="_blank" rel="noopener noreferrer" aria-label="View the first page of the 2023 paper"><img src="/images/lessing-first-page.png" width="1787" height="2526" alt="First page of the published paper on postmodern ethical thought in Lessing’s On Cats" loading="lazy" /></a>
              <div className="research-copy">
                <p className="paper-meta"><span>2023</span><span className="status">Published</span></p>
                <h3 id="lessing-title">Equality, Friendship and Harmony Interpretation of Postmodern Ethical Thought in Lessing’s on Cats</h3>
                <p className="authors"><strong>Yushan Wei</strong></p>
                <p className="venue"><i>Journal of Education, Humanities and Social Sciences</i>, 18:223–234</p>
                <div className="entry-links"><Link href="https://doi.org/10.54097/ehss.v18i.10999">Paper</Link></div>
              </div>
            </article>
            <p className="author-note"><span>* Equal contribution</span><span>† Corresponding author</span></p>
          </section>

          <section id="tools" aria-labelledby="tools-heading">
            <SectionHeading id="tools-heading">Research Tools</SectionHeading>
            <div className="tools-list">
              <article className="tool" aria-labelledby="doc-finder-title">
                <a className="tool-figure" href="/images/doc-finder.svg" target="_blank" rel="noopener noreferrer" aria-label="View Doc Finder workflow diagram"><img src="/images/doc-finder.svg" alt="Chinese reading notes lead to highlighted candidate passages in an English source" width="640" height="360" loading="lazy" /></a>
                <div className="tool-copy">
                  <h3 id="doc-finder-title">Doc Finder</h3>
                  <p className="tool-subtitle">Cross-Lingual Source Locator</p>
                  <div className="entry-links"><Link href={`${github}/doc-finder`}>GitHub</Link><Link href="https://doc-finder.streamlit.app/">Demo</Link></div>
                </div>
              </article>
              <article className="tool" aria-labelledby="littools-title">
                <a className="tool-figure" href="/images/littools.svg" target="_blank" rel="noopener noreferrer" aria-label="View LitTools workflow diagram"><img src="/images/littools.svg" alt="Scholarly sources are brought together into a literature overview with links for further reading" width="640" height="360" loading="lazy" /></a>
                <div className="tool-copy">
                  <h3 id="littools-title">LitTools</h3>
                  <p className="tool-subtitle">Literary Research Workspace</p>
                  <div className="entry-links"><Link href={`${github}/lit-tools`}>GitHub</Link><Link href="https://littools-literary-search.qrong.chatgpt.site">Demo</Link></div>
                </div>
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
          <footer><span>© 2026 Yushan Wei</span><a href="#top">Back to top</a></footer>
        </main>
      </div>
    </>
  );
}
