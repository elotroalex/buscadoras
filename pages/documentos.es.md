---
layout: page
title: Documentos
permalink: /documentos/
lang: es
---

Aquí ponemos el contenido en español.

{% for documento in site.documentos %}
<p><strong>{{documento.label}}</strong><br>
{{documento.brief_creators_summarySP}}<br>
<a href="{{site.baseurl}}/documentos/{{documento.pid}}.pdf">[Download]</a></p>
{% endfor %}