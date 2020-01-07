SimpleJekyllSearch({
  searchInput: document.getElementById("jets-search"),
  resultsContainer: document.getElementById("results-container"),
  searchResultTemplate:
    '<div class="item"><i class="blue map marker icon"></i><div class="content"><div class="header"><a class="header" href="{url}">{name}</a></div>{comment}</div></div>',
  json: "api/v1/all.json",
  fuzzy: false,
  templateMiddleware: function(prop, value, template) {
    if (prop === "comment" && value == "") {
      return value.replace("", " ");
    }
  }
});
