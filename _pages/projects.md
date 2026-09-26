---
layout: page
title: projects
permalink: /projects/
description: A showcase of my research and development projects.
nav: true
nav_order: 3
---

<style>
.featured-project {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .featured-project {
    flex-direction: row;
  }
}
.featured-project:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}
.featured-project .img-wrapper {
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
@media (min-width: 768px) {
  .featured-project .img-wrapper {
    max-width: 45%;
    border-right: 1px solid var(--global-divider-color);
  }
}
.featured-project img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: transform 0.5s ease;
}
.featured-project:hover img {
  transform: scale(1.02);
}
.featured-project .content-wrapper {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.featured-project .badge {
  font-size: 0.8rem;
  padding: 0.4em 0.8em;
  border-radius: 20px;
  background-color: var(--global-theme-color);
  color: white;
  align-self: flex-start;
  margin-bottom: 1rem;
}
.featured-project h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.featured-project p {
  color: var(--global-text-color-light);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.btn-outline {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border: 2px solid var(--global-theme-color);
  color: var(--global-theme-color) !important;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.2s ease;
  text-decoration: none;
  align-self: flex-start;
}
.btn-outline:hover {
  background-color: var(--global-theme-color);
  color: white !important;
  text-decoration: none;
}

/* Other projects grid */
.other-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
.project-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
.project-card .img-wrapper {
  height: 180px;
  overflow: hidden;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid var(--global-divider-color);
}
.project-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.project-card .content-wrapper {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.project-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}
.project-card p {
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  flex-grow: 1;
  margin-bottom: 1rem;
}
</style>

<div class="projects fade-up">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  
  {% for project in sorted_projects %}
    {% if project.importance == 1 %}
      <div class="featured-project">
        <div class="img-wrapper">
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        </div>
        <div class="content-wrapper">
          <span class="badge">{{ project.category | default: "Featured Project" }}</span>
          <h2>{{ project.card_title | default: project.title }}</h2>
          <p>{{ project.description }}</p>
          <a href="{{ project.url | relative_url }}" class="btn-outline">View Project <i class="fas fa-arrow-right ml-2"></i></a>
        </div>
      </div>
    {% endif %}
  {% endfor %}

  {% assign other_projects = sorted_projects | where_exp: "item", "item.importance > 1" %}
  {% if other_projects.size > 0 %}
    <h3 class="mt-5 mb-4 font-weight-bold">Other Projects</h3>
    <div class="other-projects">
      {% for project in other_projects %}
        <a href="{{ project.url | relative_url }}" style="text-decoration: none; color: inherit;">
          <div class="project-card">
            <div class="img-wrapper">
              <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
            </div>
            <div class="content-wrapper">
              <h3>{{ project.card_title | default: project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </a>
      {% endfor %}
    </div>
  {% endif %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  });
</script>
