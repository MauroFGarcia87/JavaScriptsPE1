//CLASES

// Clase usaurio

class Usuario {
  constructor(nombre, password) {
    this.nombre = nombre;
    this.password = password;
  }
}

// CONSTANTES, VARIABLES Y ARRYS

const usuario = [];
let id = 0;

// FUNCIONES

//funcion comparar contraseñas

const compararPass = (pass1, pass2) => {
  if (pass1 == pass2) {
    return true;
  } else {
    return false;
  }
};

// Funcion para agregar usuario

const agregarUsuario = (nombre, pass) => {
  usuario.push(new Usuario(nombre, pass));
};

// Funcion para comparar

const loginIn = () => {
  let nombreUsuario = prompt("Ingrese nombre de Usuario");
  let password = prompt("Ingrese contraseña");
  let password2 = prompt("Repita la contraseña");

  if (compararPass(password, password2)) {
    agregarUsuario(nombreUsuario, password);
    alert("Usuareio generado correctamente");
    for (let dato of usuario) {
      let mensaje = `Nombre de Usuario: ${dato.nombre} \n Contraseña: ${dato.password}`;
      alert(mensaje);
    }
  } else {
    let incorrecto = compararPass(password, password2);
    while (!incorrecto) {
      alert("Esta mal");
      let password = prompt("Ingrese contraseña");
      let password2 = prompt("Repita la contraseña");
      incorrecto = compararPass(password, password2);
    }

    agregarUsuario(nombreUsuario, password);
    alert("Usuareio generado correctamente");
    for (let dato of usuario) {
      let mensaje = `Nombre de Usuario: ${dato.nombre} \n Contraseña: ${dato.password}`;
      alert(mensaje);
    }
  }
};

loginIn();
