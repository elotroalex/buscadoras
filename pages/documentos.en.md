---
layout: page
title: Documents
permalink: /documentos/
lang: en
---

A list of documents below:

{% for documento in site.documentos %}
<p><strong>{{documento.label}}</strong><br>
{{documento.brief_creators_summaryEN}}<br>
<a href="{{site.baseurl}}/documentos/{{documento.pid}}.pdf">[Download]</a></p>
{% endfor %}

