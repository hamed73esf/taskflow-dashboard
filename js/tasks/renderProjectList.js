import { projectList, taskItemsFromStorage } from "../core/variables.js";
let projects = [];
taskItemsFromStorage.map((task) => {
  !projects.includes(task.project) && projects.push(task.project);
});

const renderProjectList = () => {
  projectList.innerHTML = "";
  projects.map((project) => {
    const listItemProject = `<li class="project-item">${project}</li`;
    projectList.insertAdjacentHTML("beforeend", listItemProject);
  });
};
export default renderProjectList;
