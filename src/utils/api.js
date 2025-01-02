const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.d.kyle.blinklab.com"
    : "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export { baseUrl, checkResponse, request };
