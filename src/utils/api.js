const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.dkylem.com/news"
    : "http://localhost:3001/news";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getSavedCards() {
  return request(`${baseUrl}/articles`);
}

function addSavedCard(
  { _id, keyword, title, imageUrl, date, description, source },
  token
) {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      _id,
      keyword,
      title,
      imageUrl,
      date,
      description,
      source,
    }),
  });
}

function deleteSavedCard(itemId, token) {
  return request(`${baseUrl}/articles/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export { baseUrl, request, getSavedCards, addSavedCard, deleteSavedCard };
