---
layout: page
title: Directorio
permalink: /directorio/
lang: es
---

<h3>Directorio.</h3>


<div class="directorio">
{% assign row = site.data.directory %}
{% for pair in row %}

  <div class="line animatable fadeInUp">
  <h2>{{pair["nombre"]}}</h2>

<!--
  {% if site.data.directory.state == null %}
  <p>null</p>
  {% else %}
  <p> {{ pair["state"] }}</p>
  {% endif %}
  -->

  <p> {{ pair["address"] }} </p>
  <p> {{ pair["municipality"] }} {{ pair["state"] }} {{ pair["country"] }}</p>
  <p>{{ pair["phone"] }} {{ pair["email"] }}</p>

  <br/>
  <p><a href="{{ pair["social_media1"] }}" target="_blank" class="Fb">Facebook</a>
  <a href="{{ pair["social_media2"] }}" target="_blank" class="Tw">Twitter</a></p>
  <a href="{{ pair["web"] }}" target="_blank" class="web">Sitio Web</a>

  <span class="tag"># {{ pair["type"] }}</span>

</div>

{% endfor %}
</div><!-- directorio -->

<a href="#" id="top">↑</a>

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
