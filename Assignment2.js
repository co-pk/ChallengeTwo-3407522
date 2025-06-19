class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically once at initialization
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const results = [];
    let prefix = "";

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];
      const suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
          if (suggestions.length === 3) break; // limit to 3 suggestions
        }
      }

      results.push(suggestions);
    }

    return results;
  }
}
