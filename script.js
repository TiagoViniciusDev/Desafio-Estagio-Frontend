//Pega elemento por ID
const toggleTheme = document.getElementById("toggleTheme");
const themeIcon = document.getElementById("themeIcon");

// Verifica se o usuário tem tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("darkMode");
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
