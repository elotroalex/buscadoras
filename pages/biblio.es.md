---
layout: page
title: Bibliografía
permalink: /biblio/
lang: es
---

<h3>Bibliografía.</h3>

<div class="directorio">
{% assign row = site.data.biblio_es %}
{% for pair in row %}
<div class="line animatable fadeInUp">

  <h2><a href="{{ pair["original_link"] }}" target="_blank">{{ pair["title"] }}</a></h2>
  <p>{{ pair["creator_s"] }} <br/>
  <i>{{ pair["organization"] }}</i> {{ pair["year"] }}</p>
  <span class="tag">#{{ pair["format"] }}</span>

  <p><a href="{{ pair["original_link"] }}" target="_blank" class="web">Consultar fuente</a></p>

</div><!-- row -->
{% endfor %}
</div><!-- directorio -->

<a href="#" id="top">↑</a>
