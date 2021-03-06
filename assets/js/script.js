class Propietario {
  constructor(nombre, direccion, telefono) {
    this._name = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del Propietario es : ${this._name}, la direccion es: ${this._direccion}, y el telefono de contacto es: ${this._telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get getTipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get getMascota() {
    return this._nombreMascota;
  }
  get getMascota() {
    return this._enfermedad;
  }
  set setMascota(value) {
    return (this._nombreMascota = value);
  }
  set setMascota(value) {
    return (this._enfermedad = value);
  }
}

const formulario = document.querySelector("#formulario");
const propietario = document.querySelector("#propietario");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const nombreMascota = document.querySelector("#nombreMascota");
const tipo = document.querySelector("#tipo");
const enfermedad = document.querySelector("#enfermedad");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const propietarioUno = new Propietario(
    propietario.value,
    direccion.value,
    telefono.value
  );
  if (tipo.value === "perro") {
    console.log(`El tipo de animal es ${tipo.value}`);
    const perroUno = new Mascota(
      nombreMascota.value,
      enfermedad.value,
      tipo.value,
      propietario.value,
      direccion.value,
      telefono.value
    );
  }
  if (tipo.value === "gato") {
    console.log(`El tipo de animal es ${tipo.value}`);
    const gatoUno = new Mascota(
      nombreMascota.value,
      enfermedad.value,
      tipo.value,
      propietario.value,
      direccion.value,
      telefono.value
    );
  }
  if (tipo.value === "conejo") {
    console.log(`El tipo de animal es ${tipo.value}`);
    const conejoUno = new Mascota(
      nombreMascota.value,
      enfermedad.value,
      tipo.value,
      propietario.value,
      direccion.value,
      telefono.value
    );
  }
  resultado.innerHTML = `
    <ul>
    <li>
    ${propietarioUno.datosPropietario()}
    </li>
    <li>
      El tipo de animal es un: ${
        tipo.value
      }, mientras que el nombre de la mascota es: ${
    nombreMascota.value
  }, y la enfermedad es: ${enfermedad.value}
    </li>
  </ul>
  `;
});
