import {
  taskItemsFromStorage,
  editTaskBtnInfo,
  editTaskModalEl,
  editModalTitle,
  editModalDescription,
  editModalProject,
  editModalPriority,
  editModalStatus,
  editModalDate,
  saveEditeTaskBtn,
  cancelEditeTaskBtn,
} from "../core/variables.js";
import showTaskColumn from "./showTaskColumn.js";
import renderProjectList from "./renderProjectList.js";
import { initDragAndDrop } from "../drag.js";
const editTaskHandler = (e) => {
  const taskId = e.target.offsetParent.dataset.id;
  editTaskModalEl.dataset.id = taskId;
  document.querySelector(".active").classList.remove("active");
  const taskIndex = taskItemsFromStorage.findIndex((task) => {
    return task.id == taskId;
  });
  editModalTitle.value = taskItemsFromStorage[taskIndex].title;
  editModalDescription.value = taskItemsFromStorage[taskIndex].description;
  editModalProject.value = taskItemsFromStorage[taskIndex].project;
  editModalPriority.value = taskItemsFromStorage[taskIndex].priority;
  editModalDate.value = taskItemsFromStorage[taskIndex].date;
  editModalStatus.value = taskItemsFromStorage[taskIndex].status;
  editTaskModalEl.classList.add("active");
};

const saveEditTaskHandler = (e) => {
  e.preventDefault();
  const taskId = editTaskModalEl.dataset.id;
  const taskIndex = taskItemsFromStorage.findIndex((task) => {
    return task.id == taskId;
  });
  taskItemsFromStorage[taskIndex].title = editModalTitle.value;
  taskItemsFromStorage[taskIndex].description = editModalDescription.value;
  taskItemsFromStorage[taskIndex].project = editModalProject.value;
  taskItemsFromStorage[taskIndex].priority = editModalPriority.value;
  taskItemsFromStorage[taskIndex].date = editModalDate.value;
  taskItemsFromStorage[taskIndex].status = editModalStatus.value;
  localStorage.setItem("tasks", JSON.stringify(taskItemsFromStorage)) || [];
  editTaskModalEl.classList.remove("active");
  showTaskColumn(taskItemsFromStorage);
  initDragAndDrop();
  renderProjectList();
};

const cancelEditTaskHandler = (e) => {
  e.preventDefault();
  editTaskModalEl.classList.remove("active");
};

editTaskBtnInfo.addEventListener("click", editTaskHandler);
saveEditeTaskBtn.addEventListener("click", saveEditTaskHandler);
cancelEditeTaskBtn.addEventListener("click", cancelEditTaskHandler);
