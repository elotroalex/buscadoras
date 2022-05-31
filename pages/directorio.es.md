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
  <h4 style="float:left;">{{ pair["nombre"] }} </h4>
  <p style="float:left;">{{ pair["type"] }} </p>
  <p style="float:left;">{{ pair["country"] }} </p>
  <p style="float:left;">{{ pair["state"] }} </p>
  <p style="float:left;">{{ pair["municipality"] }} </p>

  <a href="{{ pair["web"] }}" target="_blank">Website</a>
  <div style="clear:both;"></div>
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
