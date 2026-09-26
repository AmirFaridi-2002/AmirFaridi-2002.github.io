---
layout: page
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
---



<div class="repo-grid fade-up mb-5">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo_card.liquid repository=repo %}
  {% endfor %}
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
