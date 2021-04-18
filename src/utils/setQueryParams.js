export default (terms) => {
  const keys = Object.keys(terms);
  const searchTermsKeys = ['filter', 'search', 'sortBy'];
  const url = new URL(window.location);

  keys.forEach(k => {
    if (searchTermsKeys.includes(k)) {
      url.searchParams.set(k, terms[k]);
      
      if (terms[k] === '') url.searchParams.delete(k);
    }
  });

  window.history.pushState({}, '', url);
}