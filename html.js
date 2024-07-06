let numeroMaximoposible = 100
let numeroSecreto = Math.floor(Math.random()*10)+1; 
let numeroUsuario = 0;
let intentos= 7;

console.log(numeroSecreto);

let palabraVeces = 'vez';
let maximosIntentos = 10;

console.log(numeroSecreto);

while (NumeroUsuario != NumeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 100 por favor:"));
}
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} $(intentos == 1? 'vez' : 'veces'
    } else {
    `if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
    } else {
      alert('El numero secreto es mayor');
     }

     intentos = intentos++;

     //palabrasVeces = 'veces';
     if (intentos > MaximosIntentos) {
    alert(`Llegaste al número máximo de $(MaximosIntentos)intentos`);
    break;
}
     }
    }
