const chatbot = document.querySelector(".chatbot");
const chatbotHeading = chatbot.querySelector(".chatbot-heading");
const chatbotClose = chatbotHeading.querySelector("span");
chatbotHeading.addEventListener("click", () => {
  chatbot.classList.add("show");
});
chatbotClose.addEventListener("click", (e) => {
  e.stopPropagation();
  chatbot.classList.remove("show");
});

document.addEventListener("click", (e) => {
  const isChatbot = e.target.closest(".chatbot");
  if (!isChatbot) {
    chatbot.classList.remove("show");
  }
});

let offsetX = 0;

chatbot.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - chatbot.offsetLeft;
  document.addEventListener("mousemove", handleDrag);
});

const handleDrag = (e) => {
  chatbot.style.left = e.clientX - offsetX + "px";
};

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", handleDrag);
});
