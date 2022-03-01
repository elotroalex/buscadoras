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
<a href="{{site.baseurl}}/documentos/{{documento.pid}}.pdf">[Download]</a>
</p>
</div>

{% endfor %}
