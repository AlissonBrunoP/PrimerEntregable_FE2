let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

function obtenerDatosDelUsuario() {

  const nombre = prompt("Ingrese su nombre");
  datosPersona.nombre = nombre;
  const anioNacimiento = prompt("Ingrese su año de nacimiento");
  const fechaActual = new Date();
  const edad = fechaActual.getFullYear() - parseInt(anioNacimiento);
  datosPersona.edad = edad;
  const ciudad = prompt("Ingrese su ciudad");
  datosPersona.ciudad = ciudad;
  const interes = confirm("¿Le interesa JavaScript?");
  datosPersona.interesJavascript = interes;
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();

  function renderizarDatosPersona() {
    let nombreElemento = document.getElementById("nombre");
    nombreElemento.innerText = datosPersona.nombre;

    let edadElemento = document.getElementById("edad");
    edadElemento.innerText = datosPersona.edad;

    let ciudadElemento = document.getElementById("ciudad");
    ciudadElemento.innerText = datosPersona.ciudad;

    let javascriptElemento = document.getElementById("javascript");
    javascriptElemento.innerText = datosPersona.interesJavascript ? "Sí" : "No";
  }
  renderizarDatosPersona();
}

function recorrerListadoYRenderizarTarjetas() {

  function obtenerMaterias() {
    const fila = document.getElementById("fila");

    if (fila.innerHTML !== "") {
      return;
    }

    listado.forEach((materia) => {
      const caja = document.createElement("div");
      caja.classList.add("caja");

      const img = document.createElement("img");
      img.src = materia.imgUrl;
      img.alt = materia.bimestre;

      const lenguajes = document.createElement("p");
      lenguajes.classList.add("lenguajes");
      lenguajes.textContent = materia.lenguajes;

      const bimestre = document.createElement("p");
      bimestre.classList.add("bimestre");
      bimestre.textContent = materia.bimestre;

      caja.appendChild(img);
      caja.appendChild(lenguajes);
      caja.appendChild(bimestre);

      fila.appendChild(caja);
    });
  }
  obtenerMaterias();
}

function alternarColorTema() {
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}


document.addEventListener("keydown", function (event) {
  if (event.key === "f" || event.key === "F") {
    const sobreMi = document.querySelector("#sobre-mi");
    sobreMi.classList.remove("oculto");
  }
});
