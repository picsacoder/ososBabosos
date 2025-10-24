//regalo
//el contador debe tener un degradado mientras baje los segundos
const regalo = document.getElementById('regalo');
const contador = document.getElementById('contador')


let tiempo = 100;
let restante = tiempo;
let presionado = false;
let intervalo;

function iniciarCuenta(){ 
    presionado = true;
    restante = tiempo;
    contador.textContent = `⏱️ ${restante.toFixed(1)}`;

    regalo.classList.add('mover');
    intervalo = setInterval(() => {
        restante -= 0.1;
        contador.textContent = `⏱️ ${restante.toFixed(1)}`

        if (restante <= 0) {
            clearInterval(intervalo)
            contador.textContent = 'Puedes ver el regalo'
            presionado = false;
        }
    }, 100);

}

function cancelarCuenta(){
    if (!presionado) return;
    clearInterval(intervalo);
    contador.textContent = "Amor tienes que mantenerle picado o clickado"
    presionado = false;
}

regalo.addEventListener("mousedown",iniciarCuenta);
regalo.addEventListener('touchstart',iniciarCuenta);

regalo.addEventListener('mouseup', cancelarCuenta);
regalo.addEventListener('mouseleave', cancelarCuenta);
regalo.addEventListener('touchend', cancelarCuenta);