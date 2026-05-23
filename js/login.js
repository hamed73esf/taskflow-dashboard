const usernameEl = document.querySelector(".username");
const passwordEl = document.querySelector(".password");
const loginForm = document.querySelector(".login-form");

const UsersFromStorage = JSON.parse(localStorage.getItem("users")) || [];

const submitHandler = (e) => {
  e.preventDefault();
  if (
    !UsersFromStorage.map((user) => user.username.toLowerCase()).includes(
      usernameEl.value.toLowerCase(),
    )
  ) {
    const user = {
      username: usernameEl.value,
      password: passwordEl.value,
    };
    usernameEl.value = "";
    passwordEl.value = "";
    UsersFromStorage.push(user);
    localStorage.setItem("users", JSON.stringify(UsersFromStorage));
    localStorage.setItem("isLoggedIn", true);
    window.location.replace("./index.html");
    localStorage.setItem("currentUser", JSON.stringify(user.username));
  } else {
    const user = UsersFromStorage.find((user) => {
      return user.username.toLowerCase() == usernameEl.value.toLowerCase();
    });
    if (passwordEl.value == user.password) {
      usernameEl.value = "";
      passwordEl.value = "";
      localStorage.setItem("isLoggedIn", true);
      window.location.replace("./index.html");
      localStorage.setItem("currentUser", JSON.stringify(user.username));
    } else {
      alert(
        "This username exists. Enter the correct password or change the username.",
      );
    }
  }
};

loginForm.addEventListener("submit", submitHandler);
