---
layout: page
title: Documentos
permalink: /documentos/
lang: es
---

{% for documento in site.documentos %}

<div class="docs animatable fadeInUp">
<h3>{{documento.label}}</h3>
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
