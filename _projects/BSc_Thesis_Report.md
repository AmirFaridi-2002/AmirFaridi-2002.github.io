---
layout: page
title: "Correctness and Incorrectness Reasoning for Quantum Programs"
card_title: "Quantum Program Logics"
description: "BSC Thesis Report (University of Tehran)"
img: assets/img/projects/BSc_Thesis_Report/cover.png
importance: 1
category: Study
permalink: /projects/BSc-Thesis-Report/
---

<style>
.thesis-hero {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.thesis-badges {
  margin-bottom: 1rem;
}
.thesis-badge {
  display: inline-block;
  padding: 0.3em 0.8em;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  background-color: rgba(var(--global-theme-color-rgb), 0.1);
  color: var(--global-theme-color);
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.thesis-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--global-divider-color);
}
.meta-item h5 {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.meta-item p {
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
}

/* Accordion Styling */
.chapters-accordion {
  margin-bottom: 3rem;
}
.accordion-item {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  margin-bottom: 1rem;
  border-radius: 8px !important;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}
.accordion-button {
  background: transparent !important;
  color: var(--global-text-color) !important;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1.25rem 1.5rem;
  box-shadow: none !important;
}
.accordion-button:not(.collapsed) {
  color: var(--global-theme-color) !important;
  border-bottom: 1px solid var(--global-divider-color);
}
.accordion-button i {
  margin-right: 12px;
  color: var(--global-theme-color);
  width: 20px;
  text-align: center;
}
.accordion-body {
  padding: 1.5rem;
}
.chapter-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  color: var(--global-text-color);
  text-decoration: none;
  transition: background-color 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
}
.chapter-link:hover, .chapter-link.active {
  background-color: rgba(var(--global-theme-color-rgb), 0.05);
  border-color: rgba(var(--global-theme-color-rgb), 0.2);
  text-decoration: none;
  color: var(--global-theme-color);
}
.chapter-link i {
  margin-right: 12px;
  opacity: 0.7;
}

/* PDF Viewer */
#pdf-viewer-container {
  display: none;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--global-divider-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  background: #f8f9fa;
  height: 800px;
  position: relative;
}
#pdf-viewer-container.active {
  display: block;
  animation: fadeIn 0.5s ease;
}
.pdf-viewer-header {
  background: var(--global-card-bg-color);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--global-divider-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pdf-viewer-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}
#pdf-iframe {
  width: 100%;
  height: calc(100% - 60px);
  border: none;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<div class="thesis-hero">
  <div class="thesis-badges">
    <span class="thesis-badge">Quantum Computing</span>
    <span class="thesis-badge">Program Logic</span>
    <span class="thesis-badge">BSc Thesis</span>
  </div>
  <p class="lead mt-3">
    These writings are my BSc thesis report on program logics for reasoning about <strong>correctness</strong> and <strong>incorrectness</strong> of quantum programs (QHL family and QIL).
  </p>
  
  <div class="thesis-meta">
    <div class="meta-item">
      <h5>Institution</h5>
      <p>University of Tehran</p>
    </div>
    <div class="meta-item">
      <h5>Author</h5>
      <p>Amir Faridi</p>
    </div>
    <div class="meta-item">
      <h5>Topic</h5>
      <p>Quantum Program Logics</p>
    </div>
  </div>
</div>

<h3 class="mb-4 font-weight-bold">Thesis Chapters</h3>

<div class="chapters-accordion accordion" id="thesisAccordion">
  
  <!-- Part I -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i class="fas fa-book"></i> Part I. Classical Foundations
      </button>
    </h2>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#thesisAccordion">
      <div class="accordion-body">
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20I/1/01-CoreClassicalSetting.pdf', 'Chapter 1: Core Classical Setting')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 1:</strong> Core Classical Setting</span>
        </div>
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20I/2/02-HoareLogic.pdf', 'Chapter 2: Hoare Logic')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 2:</strong> Hoare Logic</span>
        </div>
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20I/3/03-IncorrectnessLogic.pdf', 'Chapter 3: Incorrectness Logic')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 3:</strong> Incorrectness Logic</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Part II -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <i class="fas fa-atom"></i> Part II. Quantum Prerequisites
      </button>
    </h2>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#thesisAccordion">
      <div class="accordion-body">
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20II/4/04-QuantumPrerequisites.pdf', 'Chapter 4: Quantum Prerequisites')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 4:</strong> Quantum Prerequisites</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Part III -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <i class="fas fa-project-diagram"></i> Part III. Quantum PL and Semantics
      </button>
    </h2>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#thesisAccordion">
      <div class="accordion-body">
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20III/5/05-QWhileLanguage.pdf', 'Chapter 5: QWhile Language')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 5:</strong> QWhile Language</span>
        </div>
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20III/6/06-DenotationalSemanticsSO.pdf', 'Chapter 6: Denotational Semantics (Super-operators)')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 6:</strong> Denotational Semantics (Super-operators)</span>
        </div>
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20III/7/07-RelationalSemanticsMS.pdf', 'Chapter 7: Relational Semantics')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 7:</strong> Relational Semantics</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Part IV -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <i class="fas fa-check-circle"></i> Part IV. Quantum Program Logics
      </button>
    </h2>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#thesisAccordion">
      <div class="accordion-body">
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20IV/8/08-QCorrectnessReasoning.pdf', 'Chapter 8: Quantum Correctness Reasoning')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 8:</strong> Quantum Correctness Reasoning</span>
        </div>
        <div class="chapter-link" onclick="loadPDF('https://raw.githubusercontent.com/AmirFaridi-2002/BScThesis/master/Part%20IV/9/09-QIncorrectnessReasoning.pdf', 'Chapter 9: Quantum Incorrectness Reasoning')">
          <i class="far fa-file-pdf"></i>
          <span><strong>Chapter 9:</strong> Quantum Incorrectness Reasoning</span>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- The Interactive PDF Viewer -->
<div id="pdf-viewer-container">
  <div class="pdf-viewer-header">
    <h4 id="pdf-viewer-title">Select a chapter to read</h4>
    <a id="pdf-download-btn" href="#" target="_blank" class="btn btn-sm btn-outline-primary">
      <i class="fas fa-download mr-1"></i> Download PDF
    </a>
  </div>
  <iframe id="pdf-iframe" src="" allowfullscreen></iframe>
</div>

<script>
  function loadPDF(url, title) {
    // Highlight active link
    document.querySelectorAll('.chapter-link').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Update viewer
    const container = document.getElementById('pdf-viewer-container');
    const titleEl = document.getElementById('pdf-viewer-title');
    const iframe = document.getElementById('pdf-iframe');
    const downloadBtn = document.getElementById('pdf-download-btn');
    
    // Show container and smoothly scroll to it
    container.classList.add('active');
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Set Google Docs viewer URL for inline rendering
    const viewerUrl = 'https://docs.google.com/viewer?url=' + encodeURIComponent(url) + '&embedded=true';
    
    titleEl.textContent = title;
    iframe.src = viewerUrl;
    downloadBtn.href = url;
  }
</script>
