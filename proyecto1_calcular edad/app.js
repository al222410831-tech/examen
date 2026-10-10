
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const anio = document.getElementById("anio");
const boton = document.getElementById("calcular");
const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

// Llenar los días del 1 al 31
for (let i = 1; i <= 31; i++) {
    dia.innerHTML += `<option value="${i}">${i}</option>`;
}

// Llenar los años desde el actual hasta 1900
const anioActual = new Date().getFullYear();

for (let i = anioActual; i >= 1900; i--) {
    anio.innerHTML += `<option value="${i}">${i}</option>`;
}

// Calcular la edad
boton.addEventListener("click", function () {
    mensaje.textContent = "";
    resultado.textContent = "";

    if (dia.value === "" || mes.value === "" || anio.value === "") {
        mensaje.textContent = "Selecciona el día, mes y año.";
        return;
    }

    const d = Number(dia.value);
    const m = Number(mes.value);
    const a = Number(anio.value);

    // Validar que el día exista en el mes elegido
    const diasDelMes = new Date(a, m, 0).getDate();

    if (d > diasDelMes) {
        mensaje.textContent = "La fecha seleccionada no es válida.";
        return;
    }

    const nacimiento = new Date(a, m - 1, d);
    const hoy = new Date();

    // Evitar fechas futuras
    if (nacimiento > hoy) {
        mensaje.textContent = "La fecha no puede ser futura.";
        return;
    }

    let anios = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();

    if (hoy.getDate() < nacimiento.getDate()) {
        meses--;
    }

    if (meses < 0) {
        anios--;
        meses += 12;
    }

    resultado.textContent =
        `Tienes ${anios} años y ${meses} meses.`;
});
