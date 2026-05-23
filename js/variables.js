export const dashboard = document.querySelector(".dashboard");
export const columns = document.querySelectorAll(".column");

export const body = document.querySelector("body");
export const colorModeBtn = document.querySelector(".color-mode-btn");
export const colorModeText = document.querySelector(".color-mode-btn span");
export const colorModeIcones = document.querySelectorAll(".color-mode-icone");

export const projectBtn = document.querySelector(".project");
export const priorityBtn = document.querySelector(".priority");
export const projectList = document.querySelector(".project-list");
export const priorityList = document.querySelector(".priority-list");
export const openCloseSvgProject = document.querySelectorAll(
  ".project .svg-open-close",
);
export const openCloseSvgPriority = document.querySelectorAll(
  ".priority .svg-open-close",
);

export const addTaskBtn = document.querySelector(".add-task");
export const closeModalBtns = document.querySelectorAll(".close-modal");
export const todoCardListEl = document.querySelector(
  ".todo-column .cardList-ul",
);
export const doingCardListEl = document.querySelector(
  ".doing-column .cardList-ul",
);
export const doneCardListEl = document.querySelector(
  ".done-column .cardList-ul",
);
export const modals = document.querySelectorAll(".modal");

export const editTaskModalEl = document.querySelector(".edit-task-modal");
export const editModalTitle = document.querySelector(".edit-modal-title");
export const editModalDescription = document.querySelector(
  ".edit-modal-description",
);
export const editModalProject = document.querySelector(".edit-modal-project");
export const editModalPriority = document.querySelector(".edit-modal-priority");
export const editModalStatus = document.querySelector(".edit-modal-status");
export const editModalDate = document.querySelector(".edit-modal-date");
export const saveEditeTaskBtn = document.querySelector(
  ".edit-task-modal .save-btn",
);
export const cancelEditeTaskBtn = document.querySelector(
  ".edit-task-modal .cancel-btn",
);

export const addTaskModalEl = document.querySelector(".add-task-modal");
export const addModalTitle = document.querySelector(".add-modal-title");
export const addModalDescription = document.querySelector(
  ".add-modal-description",
);
export const addModalProject = document.querySelector(".add-modal-project");
export const addModalPriority = document.querySelector(".add-modal-priority");
export const addModalStatus = document.querySelector(".add-modal-status");
export const addModalDate = document.querySelector(".add-modal-date");
export const addModalFormEl = document.querySelector(
  ".add-task-modal .modal-form",
);

export const infoTaskModal = document.querySelector(".info-task-modal");
export const infoModalTitle = document.querySelector(".info-modal-title");
export const infoModalDescription = document.querySelector(
  ".info-modal-description",
);
export const infoModalProject = document.querySelector(".info-modal-project");
export const infoModalPriority = document.querySelector(".info-modal-priority");
export const infoModalStatus = document.querySelector(".info-modal-status");
export const infoModalDate = document.querySelector(".info-modal-date");

export const boardEl = document.querySelector(".board");

export const deleteTaskBtnInfo = document.querySelector(
  ".info-task-modal .delete-btn",
);
export const editTaskBtnInfo = document.querySelector(
  ".info-task-modal .edit-task-btn",
);

export const inputSearch = document.querySelector(".search");
export const searchForm = document.querySelector(".search-box");

export const taskItemsFromStorage =
  JSON.parse(localStorage.getItem("tasks")) || [];
