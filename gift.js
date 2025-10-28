
const regalo = document.getElementById('regalo');
const contador = document.getElementById('contador')
const text = document.getElementById('text')

let tiempo = 2;
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

        if (restante <= 30) { 
            contador.style.color = "red";
        }

        if (restante <= 0) {
            contador.style.color = "black";
            clearInterval(intervalo)
            contador.textContent = 'Puedes ver el regalo! '
            presionado = false;
            text.innerHTML = `<p class="texto">Amor si ves esto es porque cumplimos un año y siete meses o porque lo quisiste volver a ver
            , te amo osa bimbo y quise hacerte este pequeño detalle por nuestro mesesito mas, espero que te guste y podamos seguir siendo novios hasta ser espositos y casarnos.
            No tengo palabras para decir lo feliz que me haces todos los dias, gracias por siempre estar ahi y amarme tanto, aqui te dejo lo que he estado haciendo <3 
            </p>
            <button type="button" onclick="window.location.href='main.html'"> Presiona aqui mi amor </button>
            `
            
        }
    }, 100);

}

function cancelarCuenta(){
    if (!presionado) return;
    clearInterval(intervalo);
    contador.textContent = "Amor tienes que mantenerle picado o clickado"
    contador.style.color = "black";
    regalo.classList.remove('mover');
    presionado = false;
}

regalo.addEventListener("mousedown",iniciarCuenta);
regalo.addEventListener('touchstart',iniciarCuenta);

regalo.addEventListener('mouseup', cancelarCuenta);
regalo.addEventListener('mouseleave', cancelarCuenta);
regalo.addEventListener('touchend', cancelarCuenta);