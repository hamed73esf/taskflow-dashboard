import {
  addTaskModalEl,
  addModalTitle,
  addModalDescription,
  addModalProject,
  addModalPriority,
  addModalStatus,
  addModalDate,
  modals,
  addTaskBtn,
  closeModalBtns,
} from "../variables.js";

const addTaskHandler = () => {
  addTaskModalEl.classList.add("active");
};

const closeModal = () => {
  document.querySelector(".active").classList.remove("active");
  addModalTitle.value = "";
  addModalDescription.value = "";
  addModalProject.value = "";
  addModalPriority.value = "high";
  addModalStatus.value = "todo";
  addModalDate.value = "";
};

const closeModalHandler = (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      closeModal();
    }
    return;
  });
};

addTaskBtn.addEventListener("click", addTaskHandler);

closeModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", closeModal);
});

modals.forEach((modal) => {
  modal.addEventListener("click", closeModalHandler);
});

export default closeModal;
