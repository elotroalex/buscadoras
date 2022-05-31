---
layout: page
title: Documentos
permalink: /documentos/
lang: es
---

<h3>Documentos.</h3>


<div class="docs">
{% assign row = site.data.documentos %}
{% for pair in row %}
<div class="row animatable fadeInUp">

<div class="column">
  <img src="../assets/covers/doc{{pair["orden"]}}.png"/>
</div>

<div class="double-column">
  <h4><a href="{{ pair["source"] }}" target="_blank">{{ pair["label"] }}</a></h4>
  <p>{{ pair["document_type"] }}</p>
  <p>{{ pair["intended_audience"] }}</p>
  <p>{{ pair["summaryESP"] }}</p>

  <p>{{ pair["creator_s"] }}, {{ pair["year"] }}</p>

  <a href="{{ pair["source"] }}" target="_blank">Fuente</a>  
  <span class="tag">#{{ pair["document_category"] }}</span>
</div>

</div><!-- row -->
{% endfor %}
</div><!-- card -->




<!--
{% for documento in site.documentos %}
<div class="docus">
<img src="../assets/covers/{{documento.pid}}.png"/>
<h4>{{documento.label}}</h4>
<p>{{documento.brief_creators_summarySP}}<br>
<div class="download-button">
<button class="btn download">
        <a href="{{site.baseurl}}/documentos/{{documento.pid}}.pdf" target="_blank">{{ site.data[site.active_lang]["global"].download }}</a>
</button></div>
</p>
</div>
{% endfor %}
-->
