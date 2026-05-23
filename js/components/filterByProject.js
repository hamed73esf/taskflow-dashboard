import { projectList, taskItemsFromStorage } from "../variables.js";
import showTaskColumn from "./showTaskColumn.js";
import { initDragAndDrop } from "../drag.js";

let taskFilter = [];
const filterProjectHandler = (event) => {
  const projetItem = event.target.closest(".project-item");
  taskFilter = taskItemsFromStorage.filter((task) => {
    return task.project == projetItem.textContent;
  });
  showTaskColumn(taskFilter);
  initDragAndDrop();
};

projectList.addEventListener("click", filterProjectHandler);
