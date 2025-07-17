// Array para almacenar las calificaciones (inicialmente vacío)
let calificaciones = [];
 
// Objeto para almacenar los datos del estudiante
let estudiante = {
  nombre: "", // Nombre del estudiante
  promedio: 0, // Promedio de las calificaciones
  aprobado: false // Indica si aprobó o no
};
 
// DOM: Seleccionamos los elementos del HTML usando sus IDs
const inputNombre = document.getElementById("nombre");
const inputCalificacion = document.getElementById("calificacion");
const botonAgregar = document.getElementById("botonAgregar");
const botonCalcular = document.getElementById("botonCalcular");
const resultadoDiv = document.getElementById("resultado");
 
// Función: Añade una calificación al array
function agregarCalificacion() {
  // Obtenemos el valor del input de calificación y lo convertimos a número
  let calificacion = parseFloat(inputCalificacion.value);
  // DOM: Validamos la calificación y mostramos mensaje si es inválida
  if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    resultadoDiv.textContent = "Por favor, ingresa una calificación válida entre 0 y 100.";
    return;
  }
  // Verificamos si aún podemos añadir calificaciones (máximo 5)
  if (calificaciones.length < 3) {
    calificaciones.push(calificacion); // Añadimos la calificación al array
    // DOM: Mostramos confirmación y el número de calificaciones ingresadas
    resultadoDiv.textContent = `Calificación ${calificacion} agregada. Total: ${calificaciones.length}/3`;
    // DOM: Limpiamos el input de calificación
    inputCalificacion.value = "";
  } else {
    // DOM: Mostramos mensaje si ya se ingresaron 5 calificaciones
    resultadoDiv.textContent = "No se pueden agregar más de 3 calificaciones.";
  }
}
 
// Función: Calcula el promedio de las calificaciones
function calcularPromedio(calificaciones) {
  // Si no hay calificaciones, retornamos 0
  if (calificaciones.length === 0) return 0;
  // Usamos un bucle while para sumar las calificaciones
  let suma = 0;
  let i = 0;
  while (i < calificaciones.length) {
    suma += calificaciones[i];
    i++;
  }
  // Retornamos el promedio
  return suma / calificaciones.length;
}
 
// Función: Determina si el estudiante aprobó (promedio >= 70)
function determinarAprobacion(promedio) {
  // Usamos un condicional para verificar el promedio
  if (promedio >= 70) {
    return true; // Aprobado
  } else {
    return false; // Reprobado
  }
}
 
// Función: Muestra los resultados en la página
function mostrarResultados() {
  // DOM: Validamos que haya exactamente 3 calificaciones
  if (calificaciones.length !== 3) {
    resultadoDiv.textContent = "Debes ingresar exactamente 3 calificaciones antes de calcular.";
    return;
  }
  // Actualizamos el nombre del estudiante (si no hay nombre, usamos un valor por defecto)
  estudiante.nombre = inputNombre.value || "Estudiante sin nombre";
  // Calculamos el promedio y actualizamos el objeto estudiante
  estudiante.promedio = calcularPromedio(calificaciones);
  // Determinamos si aprobó
  estudiante.aprobado = determinarAprobacion(estudiante.promedio);
  // Creamos un mensaje con los resultados
  let mensaje = `Estudiante: ${estudiante.nombre}\n`;
  mensaje += `Calificaciones: `;
  // Usamos un bucle for para recorrer las calificaciones
  for (let i = 0; i < calificaciones.length; i++) {
    mensaje += `${calificaciones[i]}`;
    if (i < calificaciones.length - 1) mensaje += ", ";
  }
  // Añadimos el promedio y el estado de aprobación
  mensaje += `\nPromedio: ${estudiante.promedio.toFixed(2)}\n`;
  mensaje += `Estado: ${estudiante.aprobado ? "Aprobado" : "Reprobado"}`;
  // DOM: Mostramos el mensaje en el div de resultados
  resultadoDiv.textContent = mensaje;
}
 
// DOM: Añadimos eventos a los botones
botonAgregar.addEventListener("click", agregarCalificacion); // Ejecuta agregarCalificacion al hacer clic
botonCalcular.addEventListener("click", mostrarResultados); // Ejecuta mostrarResultados al hacer clic

/* Añádele al código solo lo siguiente y dime en donde lo colocas
90 excelente
70 sobresaliente
60 Necesita un refuerzo
Mostrar notas como lista de html*/
