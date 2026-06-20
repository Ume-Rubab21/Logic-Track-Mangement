export function loginUser(userData) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("user", JSON.stringify(userData));
}

export function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
}

export function isAuthenticated() {
  return localStorage.getItem("isLoggedIn") === "true";
}