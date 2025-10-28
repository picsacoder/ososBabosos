window.onload = function() {
    const today = new Date();
    const DiaUno = new Date('2024-04-16');
    console.log(today)
    const DifMes = today - DiaUno;
    const DiasJuntos = Math.ceil(DifMes / (1000 * 60 * 60 * 24));


    document.title = DiasJuntos - 2; //Te amooo

}


const card = document.getElementById('myCard');

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});


let contador = 1;
const recorrido = document.getElementById('recorrido');
const fotoDia = document.getElementById('fotoDia')
const descripcionDia = document.getElementById('descripcionDia');
const fecha = document.getElementById('fecha');
function adelante(){ 
  contador += 1
  console.log(contador)
  if (contador > 18) {
    contador = 1;
  }
  recorrido.textContent = `${contador}/13`;
  if (contador == 1) {
    fotoDia.src = 'fotos/21Sept24.jpg'
    descripcionDia.innerHTML = `En ese dia mi amor, fuimos a la basilica y te lleve flores, lo divertido fue que nos llovio de regreso pero fue muy lindo darte flores por primera vez.
                        Estaba un poco nervioso porque eran las primeras flores que iba a dar a alguien, nos vimos en indios verdes ya en la tarde porque tenia clases en linea para pasar mate`
    fecha.innerHTML = "21 - Sept - 24"
  }
  else if (contador == 2) {
    fotoDia.src = 'fotos/10Dic24.jpg'
    descripcionDia.innerHTML = "Aqui fuimos a ver a un bts y al museo de geologia donde no podiamos encontrar la salida, me gusto ver las piedras preciosas pero mas preciosa tu ;) tambien comimos crepas y estuvimos en el kiosko muy bonito"
    fecha.innerHTML = "10 - Dic - 24"
  }
  else if (contador == 3) {
    fotoDia.src = 'fotos/19Dic24.jpg'
    descripcionDia.innerHTML = "Amor como no poner este dia, fuimos a bicentenario a hacer las casitas de navidad que estuvimos buscando por dias, ambos con la misma pijama y aunque no lo quiera admitir a ti te quedo mejor la casita"
    fecha.innerHTML = "19 - Dic - 24"
  }
  else if (contador == 4) {
    fotoDia.src = 'fotos/27Dic24.jpg'
    descripcionDia.innerHTML = "Este dia fuimos a bicentenario de twins, me la paso muy bonito contigo haciendo nada ahi, tambien fuimos a bellas artes en la noche para tomarnos una foto y para terminar fuimos por fresas, fue muy lindo por las fotos en especial las graciosas"
    fecha.innerHTML = "27 - Dic - 24"
  }
}
function atras(){
  contador -= 1
  console.log(contador)
  if (contador > 18) {
    contador = 1;
  }
  else if (contador < 1) {
    contador = 13;
  }
  recorrido.textContent = `${contador}/13`; 
}

