const arrayEstudiantes = [
  {
    nombre: "Alejandro",
    semestre: 5,
    nota: 4,
  },
  {
    nombre: "Fernando",
    semestre: 6,
    nota: 15,
  },
  {
    nombre: "Maria",
    semestre: 5,
    nota: 9,
  },
  {
    nombre: "Luis",
    semestre: 6,
    nota: 16,
  },
  {
    nombre: "Bruce",
    semestre: 7,
    nota: 17,
  },
];

let nombresDeAprobados = (estudiantes) => {
  return estudiantes
    .filter((estudiante) => estudiante.nota >= 10)
    .map((estudiante) => estudiante.nombre);
};

let salida = document.getElementById("salida");
let estudiantesA = nombresDeAprobados(arrayEstudiantes);

salida.innerHTML += `<br>Estudiantes Aprobados:<br>`;
salida.innerHTML += `<br>${estudiantesA.join(", ")}<br>`;

console.log(arrayEstudiantes);
