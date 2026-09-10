const github = 'https://github.com/SilviaWei031011';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="wordmark" href="#">YW<span> / Research</span></a>
        <nav aria-label="Main navigation"><a href="#research">Research</a><a href="#tools">Tools</a><a href="#writing">Writing</a></nav>
      </header>
      <main id="main" className="page">
        <aside className="identity">
          <p className="eyebrow">Language · Narrative · AI</p>
          <h1>Yushan<br /> Wei<span className="name-dot">.</span></h1>
          <p className="affiliation">M.A. student in English Language and Literature<br /><strong>Shanghai International Studies University</strong></p>
          <p className="bio">I study how language models generate narratives and how their emotional dynamics relate to human reader responses. My work brings literary and language research into LLM evaluation and benchmark design.</p>
          <div className="profile-links"><a href="mailto:yushanwei0311@gmail.com">Email ↗</a><a href={github}>GitHub ↗</a><a href="https://orcid.org/0009-0009-2646-3613">ORCID ↗</a></div>
          <div className="interest-note"><span>Research interests</span><p>LLM evaluation & benchmark design<br />Long-form generation & assessment<br />Affective & narrative response<br />Trustworthiness of generated content</p></div>
        </aside>
        <div className="content">
          <section id="research" aria-labelledby="research-title">
            <div className="section-heading"><span className="section-number">01</span><h2 id="research-title">Research</h2></div>
            <article className="entry">
              <div className="entry-top"><span className="category">Emotional narration</span><span className="date">Nov 2025 — Present</span></div>
              <h3>PATHOS</h3>
              <p className="subtitle">A Benchmark of Emotional Narration in Long-Form LLM-Generated News</p>
              <p>I work on study design, corpus construction, experiments, analysis, and writing, in collaboration with Dr. Yimeng Chen, a postdoctoral research fellow at KAUST.</p>
              <ul><li>A 1,170-article corpus compares human-written news with outputs from six frontier LLMs under two factual-input conditions.</li><li>A two-track framework measures emotion dynamics with LLM judges and a 12-item reader emotional distance scale.</li><li>Statistical controls, reliability checks, and a per-call API ledger support reproducible evaluation.</li></ul>
              <p className="status">ACL ARR May 2026: reviewed; manuscript under revision.</p>
            </article>
            <article className="entry">
              <div className="entry-top"><span className="category">Human reader response</span><span className="date">Jan 2026 — Present</span></div>
              <h3>LitArc-Bench</h3>
              <p className="subtitle">Disentangling Text-Specific Reader-Response Dynamics from Position and Lexical Affect</p>
              <p>Research assistant in Prof. Sen Song’s lab, School of Biomedical Engineering, Tsinghua University. My work covers data processing, model experiments, statistical analysis, and writing.</p>
              <ul><li>39 literary excerpts, seven reading checkpoints, 81 readers, and 9,020 ratings form a benchmark of human VAD trajectories.</li><li>Future-blind incremental reading compares three frontier LLMs with human trajectories while controlling for reading position and lexical affect.</li></ul>
              <p className="status">Equal contribution. ACL ARR August 2026: under review.</p>
            </article>
          </section>
          <section id="tools" aria-labelledby="tools-title">
            <div className="section-heading"><span className="section-number">02</span><h2 id="tools-title">Research tools</h2></div>
            <div className="tools-grid">
              <article className="tool"><span className="category">Cross-lingual retrieval</span><h3>doc_finder</h3><p>Find English passages in a PDF collection using a Chinese query. BGE-m3 embeddings and a FAISS index return ranked passages with page numbers and highlights for source verification.</p><p>Offline indexing and session-isolated temporary documents support the research workflow.</p><p className="stack">Python / Streamlit / BGE-m3 / FAISS</p><div className="tool-links"><a className="text-link" href="https://doc-finder.streamlit.app/">Open app ↗</a><a className="text-link" href="https://github.com/SilviaWei031011/doc-finder">Source code ↗</a></div></article>
              <article className="tool"><span className="category">Literature discovery</span><h3>littools</h3><p>Discover literary scholarship by author, work, and topic. The public website searches Crossref, OpenAIRE, and DOAJ, with optional OpenAlex and Semantic Scholar sources.</p><p>Fetch more records by source, deduplicate while keeping provenance, import RIS/BibTeX, and export CSV/RIS/JSONL.</p><p>A separate Python CLI and local Gradio interface offer configurable LLM assistance for drafting bilingual reading notes and literature reviews.</p><p className="stack">React / Cloudflare Workers / Python</p><div className="tool-links"><a className="text-link" href="https://littools-literary-search.qrong.chatgpt.site">Open app ↗</a><a className="text-link" href="https://github.com/SilviaWei031011/lit-tools">Source code ↗</a></div></article>
            </div>
          </section>
          <section id="writing" aria-labelledby="writing-title">
            <div className="section-heading"><span className="section-number">03</span><h2 id="writing-title">Publications & manuscripts</h2></div>
            <ol className="publications">
              <li><p><strong>PATHOS: A Benchmark of Emotional Narration in Long-Form LLM-Generated News.</strong></p><p><b>Yushan Wei</b>, Yimeng Chen.</p><p className="publication-detail">ACL ARR, May 2026. Reviewed; manuscript under revision.</p></li>
              <li><p><strong>LitArc-Bench: Disentangling Text-Specific Reader-Response Dynamics from Position and Lexical Affect.</strong></p><p>Mingming Su†, <b>Yushan Wei†</b>, Sen Song, Xinche Zhang.</p><p className="publication-detail">ACL ARR, August 2026. Under review. †Equal contribution.</p></li>
              <li><p><strong>Equality, Friendship and Harmony: Interpretation of Postmodern Ethical Thought in Lessing’s <i>On Cats</i>.</strong></p><p><b>Yushan Wei.</b></p><p className="publication-detail">Journal of Education, Humanities and Social Sciences, vol. 18, 2023.</p></li>
              <li><p><strong>Partial Memory, De-siting, and Entropic Overflow: Ethereal Space and Digital Memory in <i>Galatea 2.2</i>.</strong></p><p><b>Yushan Wei.</b></p><p className="publication-detail">In Chinese. 2025 Annual Conference of the Shanghai Foreign Literature Association, East China Normal University, November 2025.</p></li>
            </ol>
          </section>
          <section id="education" aria-labelledby="education-title">
            <div className="section-heading"><span className="section-number">04</span><h2 id="education-title">Education</h2></div>
            <article className="education"><div><h3>Shanghai International Studies University</h3><p>M.A. in English Language and Literature</p><p className="publication-detail">School of English Studies · GPA 3.97/4.0</p></div><span className="date">2024 — Present</span></article>
            <article className="education"><div><h3>Shandong University</h3><p>B.A. in English, English–Japanese Bilingual Track</p><p className="publication-detail">School of Translation Studies · GPA 90.26/100 · Rank 1/23</p></div><span className="date">2020 — 2024</span></article>
          </section>
          <footer><span>Yushan Wei</span><a href="mailto:yushanwei0311@gmail.com">yushanwei0311@gmail.com ↗</a></footer>
        </div>
      </main>
    </>
  );
}
