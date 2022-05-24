---
layout: page
title: Directorio
permalink: /directorio/
lang: es
---

<h3>Directorio.</h3>

row
<div class="row">
{% assign row = site.data.directory %}
{% for pair in row %}


  <h4>{{ pair["nombre"] }} </h4>
  <p>{{ pair["type"] }} </p>
  <p>{{ pair["country"] }} </p>
  <p>{{ pair["state"] }} </p>
  <p>{{ pair["municipality"] }} </p>

  <a href="{{ pair["web"] }}" target="_blank">Website</a>


{% endfor %}
</div>


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
