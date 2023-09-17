const toggleMenu = document.querySelector(".menu");
const contacts = document.querySelector(".contact-items");
console.log(contacts.style);
toggleMenu.addEventListener("click", toggleClick);
function toggleClick() {
  contacts.classList.toggle("contact-none");
}
