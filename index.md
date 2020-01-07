<link rel="stylesheet" href="css/search.css">


<!-- Html Elements for Search -->
<div id="search-container">
<input type="search" id="search-input" placeholder="search...">
<ul id="results-container"></ul>
</div>

AB-375, officially called the California Consumer Privacy Act (CCPA), is a state statute to enhance privacy rights and consumer protections for residents of the US State of California.
Under AB-375, California residents have the right to:

1. Know what personal data is collected about them.
2. Know if their personal data is sold or disclosed and to whom.
3. Opt-out of the sale of personal data.
4. Access their personal data.
5. Request businesses to delete all personal information collected about the consumer.
6. Not discriminate in service for exercising their privacy rights under it.

<!-- Script pointing to search-script.js -->
<script src="js/simple-jekyll-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<div><a href="{url}"><h1>{name}</h1></a><span>{comment}</span></div>',
  json: 'api/v1/all.json'
})
</script>