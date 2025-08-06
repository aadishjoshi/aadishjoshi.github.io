---
layout: default
title: "Blog"
permalink: /blog/
---

<link rel="stylesheet" href="/assets/css/blog.css">
<script src="/assets/js/blog.js" defer></script>

<h1 class="blog-title">My Blog</h1>

<!-- Search Bar -->
<input type="text" id="searchBar" placeholder="Search posts..." onkeyup="filterPosts()">

<!-- Category Filter Buttons -->
<div class="category-buttons">
  <button onclick="filterCategory('all')">All</button>
  {% for category in site.categories %}
    <button onclick="filterCategory('{{ category[0] }}')">{{ category[0] | capitalize }}</button>
  {% endfor %}
</div>

<!-- Blog Cards -->
<div id="blog-container" class="blog-grid">
{% for category in site.categories %}
  {% for post in category[1] %}
    <div class="blog-card" data-category="{{ category[0] }}">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="blog-date">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
    </div>
  {% endfor %}
{% endfor %}
</div>
