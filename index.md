{% include_relative README.md %}

<link rel="stylesheet" href="css/search.css">

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="search...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="js/simple-jekyll-search.min.js" type="text/javascript"></script>


<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<div><a href="{url}"><h1>{name}</h1></a><span>{note}</span></div>',
  json: 'api/v1/all.json'
})
</script>