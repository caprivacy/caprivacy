{% include_relative README.md %}
{% for company in site.data.companies %}
* [{{ company.name }}]({{ company.url }}) {{ company.comment }}
{% endfor %}