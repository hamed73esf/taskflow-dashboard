import { deleteTaskBtnInfo, taskItemsFromStorage } from "../variables.js";
import closeModal from "./handleModal.js";
import showTaskColumn from "./showTaskColumn.js";
import renderProjectList from "./renderProjectList.js";
import { initDragAndDrop } from "../drag.js";

const deleteTaskHandler = (e) => {
  const taskId = e.target.offsetParent.dataset.id;
  const taskDeleteIndex = taskItemsFromStorage.findIndex((task) => {
    return task.id == taskId;
  });
  taskItemsFromStorage.splice(taskDeleteIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(taskItemsFromStorage)) || [];
  closeModal();
  showTaskColumn(taskItemsFromStorage);
  initDragAndDrop();
  renderProjectList();
};

deleteTaskBtnInfo.addEventListener("click", deleteTaskHandler);
