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

  <h2>{{ pair["title"] }} </h2>
  <p>{{ pair["creator_s"] }} <br/>
  <i>{{ pair["organization"] }}</i> {{ pair["year"] }}</p>
  <span class="tag">#{{ pair["format"] }}</span>
  <a href="{{ pair["original_link"] }}" target="_blank" class="web">Fuente</a>


</div><!-- row -->
{% endfor %}
</div><!-- directorio -->



<!--
<table>
  {% for row in site.data.biblio_es %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>
-->
