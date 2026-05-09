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
