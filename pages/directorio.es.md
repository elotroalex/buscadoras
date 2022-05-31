---
layout: page
title: Directorio
permalink: /directorio/
lang: es
---

<h3>Directorio.</h3>

<!--
<ul>
<li><a href="">A</a></li>
<li><a href="">B</a></li>
<li><a href="">C</a></li>
<li><a href="">D</a></li>
</ul>
-->


{% assign row = site.data.directory %}
{% for pair in row %}

<div class="line">
  <h2>{{ pair["nombre"] }}</h2>

  <p>{{ pair["address"] }} {{ pair["state"] }} {{ pair["country"] }}</p>
  <p>{{ pair["phone"] }} {{ pair["email"] }}</p>
  <p>{{ pair["social_media1"] }} </p>
  <p>{{ pair["social_media2"] }}</p>

  <span class="tag">#{{ pair["type"] }}</span>
  <a href="{{ pair["web"] }}" target="_blank">Sitio Web</a>

</div>

{% endfor %}




<!--

<table>
  {% for row in site.data.directory %}
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
