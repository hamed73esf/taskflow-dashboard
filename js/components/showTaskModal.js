import {
  taskItemsFromStorage,
  infoModalDate,
  infoModalDescription,
  infoModalPriority,
  infoModalProject,
  infoModalStatus,
  infoModalTitle,
  boardEl,
  infoTaskModal,
} from "../variables.js";

const boardHandle = (event) => {
  if (event.target.closest(".cardList-li")) {
    const taskId = event.target.closest(".cardList-li").dataset.id;
    const task = taskItemsFromStorage.find((task) => {
      return task.id == taskId;
    });
    infoModalStatus.classList.remove("todo", "doing", "done");
    switch (task.status) {
      case "todo":
        infoModalStatus.classList.add("todo");
        break;
      case "doing":
        infoModalStatus.classList.add("doing");
        break;
      case "done":
        infoModalStatus.classList.add("done");
        break;
    }
    infoModalPriority.classList.remove("high", "medium", "low");
    switch (task.priority) {
      case "high":
        infoModalPriority.classList.add("high");
        break;
      case "medium":
        infoModalPriority.classList.add("medium");
        break;
      case "low":
        infoModalPriority.classList.add("low");
        break;
    }
    infoModalTitle.textContent = task.title;
    infoModalDescription.textContent = task.description;
    infoModalProject.textContent = task.project;
    infoModalDate.textContent = task.date;
    infoModalPriority.textContent = task.priority;
    infoModalStatus.textContent = task.status;

    infoTaskModal.children[0].dataset.id = task.id;
    infoTaskModal.classList.add("active");
  }
  return;
};

boardEl.addEventListener("click", boardHandle);
