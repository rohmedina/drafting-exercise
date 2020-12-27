const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// Burger
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// Mobile menu

expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    formulario.focus();
    formulario.value = "";
  });
});

// Formulario buscar
const cursos = [{ nombre: "React" }, { nombre: "Introduccion a Ruby on Rails" }, { nombre: "Introduccion a la programacion con Python" }, { nombre: "Fundamentos Desarrrollo Web" }];

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

const filtrar = () => {
  // console.log(formulario.value);
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();

  for (let curso of cursos) {
    let nombre = curso.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML += `
      <li> ${curso.nombre}</li>
      `;
    }
  }

  if (resultado.innerHTML === "") {
    resultado.innerHTML += `
      <li>Curso no encontrado...</li>
      `;
  }
};

formulario.addEventListener("keyup", filtrar);

filtrar();
