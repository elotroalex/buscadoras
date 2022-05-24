---
layout: page
title: Bibliografía
permalink: /biblio/
lang: es
---

<h3>Bibliografía.</h3>


<div class="row">
{% assign row = site.data.biblio_es %}
{% for pair in row %}
<div class="column card {{ pair["format"] }}">
  <h4>{{ pair["title"] }} </h4>
  <p>{{ pair["creator_s"] }} <br/>
  <i>{{ pair["organization"] }}</i>, {{ pair["year"] }}</p>
  <span class="tag">{{ pair["format"] }} </span>
  <a href="{{ pair["original_link"] }}" target="_blank">Fuente</a>
</div>
{% endfor %}
</div><!-- row -->



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
