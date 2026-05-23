import {
  body,
  colorModeBtn,
  colorModeText,
  colorModeIcones,
} from "../variables.js";

const colorModeHandler = () => {
  body.classList.toggle("light-mode");
  console.log(colorModeText.textContent);
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
