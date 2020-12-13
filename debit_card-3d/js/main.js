const card = document.querySelector("#card");
const btnOpen = document.querySelector("#btn-open-form");
const form = document.querySelector("#formulario-tarjeta");
const numberCard = document.querySelector("#card .number");
const nameCard = document.querySelector("#card .cardHolder");
const logoMarca = document.querySelector("#logo-marca");
const mesExpiracion = document.querySelector("#card .mes");
const yearExpiracion = document.querySelector("#card #valid .year");
const ccv = document.querySelector("#card .ccv");

// volteamos card mostrar front
const mostrarFrente = () => {
  if (card.classList.contains("active")) {
    card.classList.remove("active");
  }
};

// Rotacion Card
card.addEventListener("click", () => {
  card.classList.toggle("active");
});

//  Abrir Formulario
btnOpen.addEventListener("click", () => {
  btnOpen.classList.toggle("active");
  form.classList.toggle("active");
});

// Selec del Mes
for (let i = 1; i <= 12; i++) {
  //console.log(i);
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  form.selectMes.appendChild(option);
}

//  Select year
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  //console.log(i);
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  form.selectYear.appendChild(option);
}

// Input numero de tarjeta
form.inputNumero.addEventListener("keyup", (e) => {
  //console.log(e.target.value);
  let valorInput = e.target.value;

  form.inputNumero.value = valorInput
    // Elimina espacios en blanco
    .replace(/\s/g, "")
    // Elimina letras
    .replace(/\D/g, "")
    // Agrega espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espacio
    .trim();

  numberCard.textContent = valorInput;

  if (valorInput == "") {
    numberCard.textContent = "0000 0000 0000 0000";

    logoMarca.innerHTML = "";
  }

  if (valorInput[0] == 4) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "img/logos/visa.png";
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "img/logos/mastercard.png";
    logoMarca.appendChild(imagen);
  }

  // Voltear card face front
  mostrarFrente();
});

// Input nombre de tarjeta
form.inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  form.inputNombre.value = valorInput.replace(/[0-9]/g, "");

  nameCard.textContent = valorInput;

  if (valorInput == "") {
    nameCard.textContent = "Jon Snow";
  }

  mostrarFrente();
});

// Select mes
form.selectMes.addEventListener("change", (e) => {
  mesExpiracion.textContent = e.target.value;

  mostrarFrente();
});

// Select year
form.selectYear.addEventListener("change", (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);

  mostrarFrente();
});

//agregar ccv
form.inputCCV.addEventListener("keyup", () => {
  if (!card.classList.contains("active")) {
    card.classList.toggle("active");
  }

  form.inputCCV.value = form.inputCCV.value
    // Elimina espacios en blanco
    .replace(/\s/g, "")
    // Elimina letras
    .replace(/\D/g, "")
    // Agrega espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espacio
    .trim();

  ccv.textContent = form.inputCCV.value;
});
