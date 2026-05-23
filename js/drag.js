import { taskItemsFromStorage, columns } from "./core/variables.js";
import showTaskColumn from "./tasks/showTaskColumn.js";

let draggedTaskId = null;

export const initDragAndDrop = () => {
  const cards = document.querySelectorAll(".cardList-li");
  cards &&
    cards.forEach((card) => {
      card.addEventListener("dragstart", () => {
        draggedTaskId = card.dataset.id;
      });
    });
  return;
};

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
});

columns.forEach((column) => {
  column.addEventListener("drop", () => {
    const task = taskItemsFromStorage.find((task) => {
      return task.id == draggedTaskId;
    });
    task.status = column.dataset.status;
    localStorage.setItem("tasks", JSON.stringify(taskItemsFromStorage));
    showTaskColumn(taskItemsFromStorage);
    initDragAndDrop();
  });
});
