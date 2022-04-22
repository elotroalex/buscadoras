---
layout: page
title: Documents
permalink: /documentos/
lang: en
---

<h3>Documents</h3>

{% for documento in site.documentos %}

<div class="docus animatable fadeInUp">
<h4>{{documento.label}}</h4>
<p>
{{documento.brief_creators_summaryEN}}<br>
    <div class="download-button">
    <button class="btn download">
        <a href="{{site.baseurl}}/documentos/{{documento.pid}}.pdf" target="_blank">{{ site.data[site.active_lang]["global"].download }}</a>
    </button>
    </div>
</p>
</div>
{% endfor %}
