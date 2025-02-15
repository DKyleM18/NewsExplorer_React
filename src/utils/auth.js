import { request } from "./newsApi";
const baseUrl = "https://localhost:3001";

function signup() {
  return new Promise((resolve) => {
    resolve({ user: "a fake user" });
  });
  // request(`${baseUrl}/signup`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name,
  //     email,
  //     password,
  //   }),
  // });
}

function signin({ email, password }) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

export const authorize = () => {
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = () => {
  return new Promise((resolve) => {
    resolve({
      data: { name: "Asdf", email: "asdf@mail.com", _id: "asdf-id" },
    });
  });
};

export { signup, signin };
