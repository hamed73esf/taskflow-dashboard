const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) {
  window.location.replace("./login.html");
}
