export function isAuthenticated() {
  return window.localStorage.getItem("jwt") !== null;
}
