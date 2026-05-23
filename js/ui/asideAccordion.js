import {
  projectBtn,
  priorityBtn,
  projectList,
  priorityList,
  openCloseSvgProject,
  openCloseSvgPriority,
} from "../core/variables.js";
import renderProjectList from "../tasks/renderProjectList.js";

const projectBtnHandler = () => {
  projectList.classList.toggle("active-project-list");
  openCloseSvgProject.forEach((openCloseSvg) => {
    openCloseSvg.classList.toggle("active-project");
  });
  renderProjectList();
};
projectBtn.addEventListener("click", projectBtnHandler);

const priorityBtnHandler = () => {
  priorityList.classList.toggle("active-priority-list");
  openCloseSvgPriority.forEach((openCloseSvg) => {
    openCloseSvg.classList.toggle("active-priority");
  });
};
priorityBtn.addEventListener("click", priorityBtnHandler);
