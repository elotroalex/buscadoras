---
layout: page
title: Documentos
permalink: /documentos/
lang: es
---

<h3>Documentos</h3>
{% for documento in site.documentos %}

<div class="docus animatable fadeInUp">
<h4>{{documento.label}}</h4>
<p>
{{documento.brief_creators_summarySP}}<br>
    <div class="download-button">
    <button class="btn download">
        <a href="{{site.baseurl}}/documentos/{{documento.pid}}.pdf" target="_blank">{{ site.data[site.active_lang]["global"].download }}</a>
    </button>
    </div>
</p>
</div>

{% endfor %}
