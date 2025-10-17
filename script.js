//Mudar Tema
const toggleTheme = document.getElementById("toggleTheme"); //Pega elemento por ID
const themeIcon = document.getElementById("themeIcon");

// Verifica se o usuário tem tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("darkMode"); //Adiciona classe darkMode
  themeIcon.src = "images/icons/lightTheme.png";
}

toggleTheme.addEventListener("click", () => { //Evento de clique
  document.body.classList.toggle("darkMode");

  if (document.body.classList.contains("darkMode")) { //Se o tema for muda a img e salva no localStorage
    themeIcon.src = "images/icons/lightTheme.png";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.src = "images/icons/darkTheme.png";
    localStorage.setItem("theme", "light");
  }
});



//MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => { // Abre o menu
mobileNav.classList.remove("displayNone");
void mobileNav.offsetWidth; // Força reflow para garantir que o CSS transition funcione
mobileNav.classList.add("active");
});

function closeMobileMenu() { //Fecha o menu depois de um tempo
mobileNav.classList.remove("active");
setTimeout(() => {
    mobileNav.classList.add("displayNone");
}, 400);
}

closeMenu.addEventListener("click", closeMobileMenu);


document.addEventListener("click", (e) => { //Fecha menu ao clicar fora
if (
    !mobileNav.classList.contains("displayNone") &&
    !mobileNav.contains(e.target) &&
    !menuBtn.contains(e.target)
) {
    closeMobileMenu();
}
});

// ANIMAÇÃO TEXTO "SAINDO DE TRÁS DA IMAGEM"
window.addEventListener("load", () => {
  if (window.innerWidth > 720) {
    document.body.classList.add("loaded");
  }
});

