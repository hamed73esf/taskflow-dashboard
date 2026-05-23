import "./tasks/addtask.js";
import "./ui/handleModal.js";
import "./ui/showTaskModal.js";
import "./tasks/deleteTask.js";
import "./tasks/showTaskColumn.js";
import "./tasks/editModal.js";
import "./ui/asideAccordion.js";
import "./ui/colorMode.js";
import "./filters/filterByPriority.js";
import "./filters/filterByProject.js";
import "./filters/filterBySearch.js";
import "./drag.js";

import { initDragAndDrop } from "./drag.js";
import showTaskColumn from "./tasks/showTaskColumn.js";
import {
  dashboard,
  taskItemsFromStorage,
  logout,
  userAccountName,
} from "./core/variables.js";

showTaskColumn(taskItemsFromStorage);
initDragAndDrop();
dashboard.addEventListener("click", () => showTaskColumn(taskItemsFromStorage));

logout.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "./login.html";
  localStorage.removeItem("currentUser");
});

userAccountName.textContent = `Hi ${JSON.parse(localStorage.getItem("currentUser"))}`;

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
menuBtn.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  sidebar.classList.toggle("active-sidebar");
});
document.addEventListener("click", (e) => {
  const clickedInSidebar = sidebar.contains(e.target);
  const clickedMenuBtn = menuBtn.contains(e.target);

  if (!clickedInSidebar && !clickedMenuBtn) {
    sidebar.classList.remove("active-sidebar");
  }
});
