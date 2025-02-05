export function getItems() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "A News Article",
        imageUrl: "https://via.placeholder.com/150",
        date: "2024-12-15",
        description: "A news article description",
        source: "The New York Times",
      },
      {
        _id: "65f7368dfb74bd6a92114c86",
        title: "Another News Article",
        imageUrl: "https://via.placeholder.com/151",
        date: "2024-12-16",
        description: "Another news article description",
        source: "The Wall Street Journal",
      },
    ]);
  });
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7368dfb74bd6a92114c89",
      title: article.title,
      imageUrl: article.imageUrl,
      date: article.date,
      description: article.description,
      source: article.source,
    });
  });
}
