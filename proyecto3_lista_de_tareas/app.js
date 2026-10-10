
const formulario = document.getElementById("formulario");
const descripcion = document.getElementById("descripcion");
const lista = document.getElementById("lista");
let tareas = [];

function renderTasks() {
    lista.innerHTML = "";
    tareas.sort((a, b) => a.completada - b.completada);

    tareas.forEach((tarea, indice) => {
        const elemento = document.createElement("li");

        if (tarea.completada) {
            elemento.classList.add("completada");
        }

        const casilla = document.createElement("input");
        casilla.type = "checkbox";
        casilla.checked = tarea.completada;

        casilla.addEventListener("change", () => {
            tarea.completada = casilla.checked;
            renderTasks();
        });

        const texto = document.createElement("span");
        texto.className = "descripcion-tarea";
        texto.textContent = tarea.descripcion;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "eliminar";

        botonEliminar.addEventListener("click", () => {
            tareas.splice(indice, 1);
            renderTasks();
        });

        elemento.append(casilla, texto, botonEliminar);
        lista.appendChild(elemento);
    });
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const texto = descripcion.value.trim();

    if (texto === "") {
        return;
    }

    tareas.push({
        descripcion: texto,
        completada: false
    });

    descripcion.value = "";
    renderTasks();
});
