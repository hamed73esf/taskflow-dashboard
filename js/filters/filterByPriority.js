import { priorityList, taskItemsFromStorage } from "../core/variables.js";
import showTaskColumn from "../tasks/showTaskColumn.js";
import { initDragAndDrop } from "../drag.js";

let taskFilters = [];

const filterPriorityHandler = (event) => {
  const priorityItem = event.target.closest(".priority-item");
  taskFilters = taskItemsFromStorage.filter((task) => {
    return task.priority == priorityItem.textContent.toLowerCase();
  });
  showTaskColumn(taskFilters);
  initDragAndDrop();
};

priorityList.addEventListener("click", filterPriorityHandler);
