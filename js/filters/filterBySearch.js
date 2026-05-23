import {
  taskItemsFromStorage,
  inputSearch,
  searchForm,
} from "../core/variables.js";
import showTaskColumn from "../tasks/showTaskColumn.js";
import { initDragAndDrop } from "../drag.js";

let taskFilters = [];
const filterTitleHandler = (event) => {
  event.preventDefault();
  taskFilters = taskItemsFromStorage.filter((task) => {
    return task.title.toLowerCase().includes(inputSearch.value.toLowerCase());
  });
  showTaskColumn(taskFilters);
  initDragAndDrop();
  inputSearch.value = "";
};
searchForm.addEventListener("submit", filterTitleHandler);
