let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
const maximosIntentos = 7;

console.log(numeroSecreto);

document.getElementById('btnAdivinar').addEventListener('click', function() {
    intentos++;
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        alert('Por favor, introduce un número válido entre 1 y 10.');
        return;
    }

    if (numeroUsuario === numeroSecreto) {
        document.getElementById('mensaje').innerHTML = `¡Acertaste! El número era ${numeroSecreto}. Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`;
        document.getElementById('btnAdivinar').disabled = true;
    } else if (numeroUsuario < numeroSecreto) {
        document.getElementById('mensaje').innerHTML = 'El número secreto es mayor.';
    } else {
        document.getElementById('mensaje').innerHTML = 'El número secreto es menor.';
    }

    if (intentos === maximosIntentos && numeroUsuario !== numeroSecreto) {
        document.getElementById('mensaje').innerHTML = `¡Agotaste tus ${maximosIntentos} intentos! El número secreto era ${numeroSecreto}.`;
        document.getElementById('btnAdivinar').disabled = true;
    }
});