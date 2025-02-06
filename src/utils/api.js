export function getItems() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "A News Article, A News Article, A News Article",
        imageUrl:
          "https://gizmodo.com/app/uploads/2025/02/DIY-3D-Printer-Tattoo-Machine-EmilytheEngineer-1.jpg",
        date: "December 16, 2024",
        description:
          "A news article description, A news article description, A news article description, A news article description, A news article description, A news article description",
        source: "The New York Times",
        keyword: "keyword1",
      },
      {
        _id: "65f7368dfb74bd6a92114c86",
        title:
          "Another News Article, Another News Article, Another News Article",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/wJGHzXFefLy5hX5MQJyiSh-1200-80.jpg",
        date: "December 17, 2024",
        description:
          "Another news article description, Another news article description, Another news article description, Another news article description, Another news article description, Another news article description",
        source: "The Wall Street Journal",
        keyword: "keyword2",
      },
      {
        _id: "65f7368dfb74bd6a92114c86",
        title:
          "Another News Article, Another News Article, Another News Article",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/wJGHzXFefLy5hX5MQJyiSh-1200-80.jpg",
        date: "December 17, 2024",
        description:
          "Another news article description, Another news article description, Another news article description, Another news article description, Another news article description, Another news article description",
        source: "The Wall Street Journal",
        keyword: "keyword3",
      },
      {
        _id: "65f7368dfb74bd6a92114c86",
        title:
          "Another News Article, Another News Article, Another News Article",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/wJGHzXFefLy5hX5MQJyiSh-1200-80.jpg",
        date: "December 17, 2024",
        description:
          "Another news article description, Another news article description, Another news article description, Another news article description, Another news article description, Another news article description",
        source: "The Wall Street Journal",
        keyword: "keyword4",
      },
      {
        _id: "65f7368dfb74bd6a92114c86",
        title:
          "Another News Article, Another News Article, Another News Article",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/wJGHzXFefLy5hX5MQJyiSh-1200-80.jpg",
        date: "December 17, 2024",
        description:
          "Another news article description, Another news article description, Another news article description, Another news article description, Another news article description, Another news article description",
        source: "The Wall Street Journal",
        keyword: "keyword5",
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
