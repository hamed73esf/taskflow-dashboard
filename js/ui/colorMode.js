import {
  body,
  colorModeBtn,
  colorModeText,
  colorModeIcones,
} from "../core/variables.js";

const colorModeHandler = () => {
  body.classList.toggle("light-mode");
  if (colorModeText.textContent == "Light Mode") {
    colorModeText.textContent = "Dark Mode";
  } else {
    colorModeText.textContent = "Light Mode";
  }
  colorModeIcones.forEach((colorModeIcone) => {
    colorModeIcone.classList.toggle("active-mode-color");
  });
};

colorModeBtn.addEventListener("click", colorModeHandler);
