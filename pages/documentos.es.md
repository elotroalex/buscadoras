---
layout: page
title: Documentos
permalink: /documentos/
lang: es
---

<h3>Documentos.</h3>


<div class="row">
{% assign row = site.data.documentos %}
{% for pair in row %}
<div class="column card">
  <h4>{{ pair["label"] }} </h4>
  <p>{{ pair["document_type"] }} <br/>
  <i>{{ pair["creator_s"] }}</i>, {{ pair["year"] }}</p>
  <span class="tag">{{ pair["document_category"] }} </span>
  <img src="../assets/covers/doc{{pair["orden"]}}.png"/>
</div>
{% endfor %}
</div><!-- row -->


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
