const apiKey = "34f078d982d34b3e85336be8d6660dac";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function getNewsItems(keyword) {
  const currentDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(currentDate.getDate() - 7);

  const url = `${baseUrl}?q=${keyword}&apiKey=${apiKey}&from=${fromDate.toISOString()}&to=${currentDate.toISOString()}&pageSize=100`;

  return request(url);
}
