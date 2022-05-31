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
  <h2>{{ pair["nombre"] }}</h2>
  <p>{{ pair["address"] }} {{ pair["state"] }} {{ pair["country"] }}</p>
  <p>{{ pair["phone"] }} {{ pair["email"] }}</p>

  <p><a href="{{ pair["social_media1"] }}" target="_blank">Facebook</a>
  <a href="{{ pair["social_media2"] }}" target="_blank">Twitter</a></p>

  <span class="tag">#{{ pair["type"] }}</span>
  <a href="{{ pair["web"] }}" target="_blank" class="web">Sitio Web</a>

</div>

{% endfor %}
</div><!-- directorio -->



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
