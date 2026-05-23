import {
  todoCardListEl,
  doingCardListEl,
  doneCardListEl,
} from "../core/variables.js";

const showTaskColumn = (Items) => {
  todoCardListEl.innerHTML = "";
  doingCardListEl.innerHTML = "";
  doneCardListEl.innerHTML = "";

  Items &&
    Items.forEach((task) => {
      const shortDescription =
        task.description.length > 30
          ? task.description.slice(0, 30) + "..."
          : task.description;
      const newCard = `
       <li class="cardList-li" draggable="true" data-id="${task.id}">
        <h1 class="cardList-title">${task.title}</h1>
        <p class="cardList-description">${shortDescription}</p>
        <div class="cardList-bottom">
          <p class="cardList-project">${task.project}</p>
          <span class="cardList-date">${task.date}</span>
          <span class="cardList-priority">${task.priority}</span>
        </div>
      </li>
  `;
      if (task.status === "todo") {
        todoCardListEl.insertAdjacentHTML("afterbegin", newCard);
      } else if (task.status === "doing") {
        doingCardListEl.insertAdjacentHTML("afterbegin", newCard);
      } else {
        doneCardListEl.insertAdjacentHTML("afterbegin", newCard);
      }
    });

  return;
};
export default showTaskColumn;
