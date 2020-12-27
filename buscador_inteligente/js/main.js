const productos = [
  { nombre: "Notebook", valor: 100 },
  { nombre: "Celular", valor: 100 },
  { nombre: "Pantalla", valor: 100 },
  { nombre: "Teclado", valor: 100 },
  { nombre: "Mouse", valor: 100 },
  { nombre: "Audifonos inalambricos", valor: 100 },
  { nombre: "Audifonos con cable", valor: 100 },
];

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const filtrar = () => {
  // console.log(formulario.value);
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();

  for (let producto of productos) {
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML += `
      <li>Producto: ${producto.nombre} - Valor: ${producto.valor}</li>
      `;
    }
  }

  if (resultado.innerHTML === "") {
    resultado.innerHTML += `
      <li>Producto no encontrado...</li>
      `;
  }
};

formulario.addEventListener("keyup", filtrar);
boton.addEventListener("click", filtrar);

filtrar();
