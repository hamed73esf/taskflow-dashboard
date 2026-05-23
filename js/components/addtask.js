import {
  addModalTitle,
  addModalDescription,
  addModalProject,
  addModalPriority,
  addModalStatus,
  addModalDate,
  addModalFormEl,
  taskItemsFromStorage,
} from "../variables.js";
import closeModal from "./handleModal.js";
import showTaskColumn from "./showTaskColumn.js";
import renderProjectList from "./renderProjectList.js";
import { initDragAndDrop } from "../drag.js";

const addModalFormHandler = (event) => {
  event.preventDefault();

  let newTask = {
    id: Date.now(),
    title: addModalTitle.value,
    description: addModalDescription.value,
    project: addModalProject.value,
    priority: addModalPriority.value,
    status: addModalStatus.value,
    date: addModalDate.value,
  };
  taskItemsFromStorage.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskItemsFromStorage));

  addModalTitle.value = "";
  addModalDescription.value = "";
  addModalProject.value = "";
  addModalPriority.value = "high";
  addModalStatus.value = "todo";
  addModalDate.value = "";
  closeModal();
  showTaskColumn(taskItemsFromStorage);
  initDragAndDrop();
  renderProjectList(taskItemsFromStorage);
};

addModalFormEl.addEventListener("submit", addModalFormHandler);
