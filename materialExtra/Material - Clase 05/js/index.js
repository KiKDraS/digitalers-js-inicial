//Manejo de rutas con API Web URL, URLSearchParams y location.search

//Objeto URL
const url = new URL("https://example.com/login?user=someguy&page=news");
console.log(url.searchParams);
console.log(url.searchParams.get("user"));
console.log(url.searchParams.get("page"));

//Objeto URLSearchParams
//<a href="https://www.google.com/search?q=javascript"></a>
//const search = new URLSearchParams(location.search);
//console.log(search.get("q"));

const paramString = "?user=someguy&page=news";
const urlSearch = new URLSearchParams(paramString);
console.log(urlSearch.get("user"));
console.log(urlSearch.get("page"));
