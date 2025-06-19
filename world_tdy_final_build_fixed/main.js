const API_KEY = 'dc97db2b0e5c4aa7a0e27393268a3c02';
const newsSections = ['business', 'health', 'technology', 'general'];

async function fetchNews(section) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${section}&apiKey=${API_KEY}&pageSize=5&country=us`);
  const data = await res.json();
  return data.articles;
}

async function loadNews() {
  const container = document.getElementById('news-sections');
  for (const section of newsSections) {
    const articles = await fetchNews(section);
    const sectionEl = document.createElement('section');
    sectionEl.innerHTML = `<h2>${section.toUpperCase()}</h2>` + articles.map(article => \`<p><a href="\${article.url}" target="_blank">\${article.title}</a></p>\`).join('');
    container.appendChild(sectionEl);
  }
}
loadNews();
