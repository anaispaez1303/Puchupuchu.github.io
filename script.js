const PASSWORD = "30/06/2026";
const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value.trim() === PASSWORD) {
    lockScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Feliz Día de los Hot Wheels, mi Puchupuchu 🖤";
  } else {
    passwordError.textContent = "Esa no es la clave, mi amor. Inténtalo otra vez ♡";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

const songUrl = "https://www.youtube.com/results?search_query=M%C3%A5neskin+Coraline+official";
document.querySelectorAll("#musicButton, #musicButton2").forEach((button) => {
  button.addEventListener("click", () => window.open(songUrl, "_blank", "noopener,noreferrer"));
});

const carMessage = document.getElementById("carMessage");
document.querySelectorAll(".car-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".car-card").forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    carMessage.textContent = card.dataset.message;
  });
});

const modal = document.getElementById("surpriseModal");
document.getElementById("surpriseButton").addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});
function closeSurprise() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}
document.getElementById("closeModal").addEventListener("click", closeSurprise);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeSurprise();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) closeSurprise();
});
