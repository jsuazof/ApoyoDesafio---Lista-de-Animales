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
      El tipo de animal es un ${tipo.value}, mientras que el nombre de la mascota es: ${nombreMascota.value}, y la enfermedad es: ${enfermedad.value}
    </li>
  </ul>
  `;
});

// function Curso(titulo,turno,alumno) {
//     this.titulo = titulo;
//     this.turno = turno;
//     this.alumno = alumno;
//     }
//     Curso.prototype.inscribirAlumno = function() {
//     console.log(`El alumno: ${this.alumno}, se ha inscrito en el
//     curso: ${this.titulo}, perteneciente al turno: ${this.turno}`);
//     }
//     function JavaScript(titulo,turno,alumno,nivel,tema) {
//     Curso.call(this,titulo,turno,alumno);
//     this.nivel = nivel;
//     this.tema = tema;
//     }
//     JavaScript.prototype = Object.create(Curso.prototype);
//     JavaScript.prototype.temaSolicitado = function () {
//     console.log(`El nivel y el tema solicitado fueron: ${this.nivel} y
//     ${this.tema} respectivamente`);
//     }
//     var alumno1 = new JavaScript('Programando con JavaScript', 'Nocturno',
//     'Juan', 'Basico', 'Introduccion');
//     console.log(alumno1);
//     alumno1.temaSolicitado();
//     alumno1.inscribirAlumno();

//     class Curso{
//         constructor(titulo, turno, alumno){
//         this._titulo = titulo
//         this._turno = turno
//         this._alumno = alumno
//         }
//         inscribirAlumno(){
//             console.log(`El alumno: ${this._alumno}, se ha inscrito en el curso: ${this._titulo}, perteneciente al turno: ${this._turno}`);
//         }
//         set titulo (value){
//             this._titulo = value
//         }
//         set turno (value){
//             this._turno = value
//         }
//         set alumno (value){
//             this._alumno = value
//         }
//     }

//     class JavaScript extends Curso{
//         constructor(){
//         super()
//         this._nivel
//         this._tema
//         }
//         temaSolicitado(){
//         console.log(`El nivel y el tema solicitado fueron: ${this._nivel} y ${this._tema} respectivamente`);
//         }

//         set nivel (value){
//             this._nivel = value
//         }
//         set tema (value){
//             this._tema = value
//         }
//     }

// const alumno1 = new JavaScript()

// alumno1.alumno = "Marilyn"
// alumno1.titulo = "Python"
// alumno1.turno = "Diurno"
// alumno1.nivel = "Media"
// alumno1.tema = "Intro Python"

// console.log(alumno1.inscribirAlumno());
// console.log(alumno1.temaSolicitado());

// let personal = {
//     nombre: "Petra",
//     apellido: "Perez",
// }
// personal.nombreCompleto = function(){
//     return this.nombre + " " + this.apellido
// }
//  let persona2 = Object.create (persona1);

//  console.log(persona1.nombreCompleto());
//  console.log(persona2.nombreCompleto());

// persona2.nombre = "Juan";
// persona2.apellido = "Romero";

// persona2.nombreCompleto = function(){
//     return this.nombre + " " + this.apellido
// }
// console.log(persona1.nombreCompleto());
// console.log(persona2.nombreCompleto());

// class A {
//     constructor(valor1){
//         this.balor1 = valor1;
//     }
// }

// class B extends A {
//     constructor(valor2){
//         this.valor2 = valor2
//     }
// }
// let obj1 = new B(4,5);
// console.log(obj1)

// var objA = {
//     nombre: "Juan",
//     saludar: function(){
//         console.log("Hola, soy" + this.nombre);
//     }
// }
// var objA = Object.create(objA);
// var objA = Object.create(objA);
// objA.saludar();
