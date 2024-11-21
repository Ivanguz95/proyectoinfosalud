// Datos aleatorios para especialidades, profesionales, etc.
const especialidades = ["Cardiología", "Dermatología", "Pediatría", "Ginecología", "Traumatología"];
const profesionales = ["Dr. López", "Dra. Gómez", "Dr. Martínez", "Dra. Rodríguez", "Dr. Pérez"];
const matriculas = ["MP-12345", "MN-67890", "MP-54321", "MN-09876", "MP-11223"];
const consultorios = ["Consultorio 1", "Consultorio 2", "Consultorio 3", "Consultorio 4", "Consultorio 5"];
const pacientes = ["Juan", "María", "Pedro", "Ana", "Luis"];
const apellidos = ["Pérez", "González", "López", "Rodríguez", "Martínez"];
const direcciones = ["Calle 123", "Avenida 456", "Calle 789", "Avenida 012", "Calle 345"];
const telefonos = ["123456789", "987654321", "112233445", "556677889", "998877665"];

// Función para generar una fecha aleatoria
function generarFechaAleatoria() {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Función para generar un turno aleatorio
function generarTurnoAleatorio() {
    const especialidad = especialidades[Math.floor(Math.random() * especialidades.length)];
    const fecha = generarFechaAleatoria();
    const horario = `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
    const profesional = profesionales[Math.floor(Math.random() * profesionales.length)];
    const matricula = matriculas[Math.floor(Math.random() * matriculas.length)];
    const consultorio = consultorios[Math.floor(Math.random() * consultorios.length)];
    const pacienteNombre = pacientes[Math.floor(Math.random() * pacientes.length)];
    const pacienteApellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    const pacienteDNI = Math.floor(Math.random() * 90000000) + 10000000;
    const pacienteNacimiento = generarFechaAleatoria();
    const pacienteDireccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    const pacienteTelefono = telefonos[Math.floor(Math.random() * telefonos.length)];
    const historiaClinica = Math.random() < 0.3 ? "Sí" : "No"; // 30% de probabilidad de tener historia clínica integrada

    return {
        especialidad,
        fecha,
        horario,
        profesional,
        matricula,
        consultorio,
        pacienteNombre,
        pacienteApellido,
        pacienteDNI,
        pacienteNacimiento,
        pacienteDireccion,
        pacienteTelefono,
        historiaClinica
    };
}

// Función para crear el tablero de turnos
function crearTablero() {
    const turneroDiv = document.getElementById('turnero');
    for (let i = 0; i < 10; i++) {
        const turno = generarTurnoAleatorio();
        const turnoDiv = document.createElement('div');
        turnoDiv.className = 'turno';

        turnoDiv.innerHTML = `
            <p class="especialidad">Especialidad: ${turno.especialidad}</p>
            <p class="fecha">Fecha: ${turno.fecha}</p>
            <p class="horario">Horario: ${turno.horario}</p>
            <p class="profesional">Profesional: ${turno.profesional}</p>
            <p class="matricula">Matrícula: ${turno.matricula}</p>
            <p class="consultorio">Consultorio: ${turno.consultorio}</p>
            <p class="paciente-nombre">Nombre: ${turno.pacienteNombre}</p>
            <p class="paciente-apellido">Apellido: ${turno.pacienteApellido}</p>
            <p class="paciente-dni">DNI: ${turno.pacienteDNI}</p>
            <p class="paciente-nacimiento">Fecha de Nacimiento: ${turno.pacienteNacimiento}</p>
            <p class="paciente-direccion">Dirección: ${turno.pacienteDireccion}</p>
            <p class="paciente-telefono">Teléfono: ${turno.pacienteTelefono}</p>
            <p class="historia-clinica">Historia Clínica Integrada: ${turno.historiaClinica}</p>
        `;

        turneroDiv.appendChild(turnoDiv);
    }
}

// Inicializar el tablero
crearTablero();