
const temperatura = document.getElementById("temperatura");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const boton = document.getElementById("convertir");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

// Activar el botón cuando los datos estén completos
function validarDatos() {
    boton.disabled =
        temperatura.value.trim() === "" ||
        origen.value === "" ||
        destino.value === "";
}

temperatura.addEventListener("input", validarDatos);
origen.addEventListener("change", validarDatos);
destino.addEventListener("change", validarDatos);

// Convertir la temperatura
boton.addEventListener("click", function () {
    let valor = Number(temperatura.value);
    let celsius;

    resultado.textContent = "";
    mensaje.textContent = "";

    // Convertir primero a Celsius
    if (origen.value === "C") {
        celsius = valor;
    } else if (origen.value === "F") {
        celsius = (valor - 32) * 5 / 9;
    } else {
        celsius = valor - 273.15;
    }

    // No permitir temperaturas inferiores al cero absoluto
    if (celsius < -273.15) {
        mensaje.textContent = "La temperatura no es válida.";
        return;
    }

    // Convertir de Celsius a la unidad elegida
    let conversion;

    if (destino.value === "C") {
        conversion = celsius;
    } else if (destino.value === "F") {
        conversion = (celsius * 9 / 5) + 32;
    } else {
        conversion = celsius + 273.15;
    }

    resultado.textContent =
        `Resultado: ${conversion.toFixed(2)} °${destino.value}`;
});
