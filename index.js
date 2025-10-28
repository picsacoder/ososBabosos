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
  recorrido.textContent = `${contador}/18`;
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
  else if (contador == 5) {
    fotoDia.src = 'fotos/16Enero25.jpg'
    descripcionDia.innerHTML = "Amor este dia fue de los mas magicos y lindo que he vivido en toda mi vida, nunca antes habia ido a un acuario y verlo junto contigo fue una experiencia que jamas voy a olvidar, me gusto mucho pintar y ver a nuestros pingus, tambien fuimos a la basilica y comimos mcdonalds"
    fecha.innerHTML = "16 - Ene - 25"
  }
  else if (contador == 6) {
    fotoDia.src = 'fotos/18Enero25.jpg'
    descripcionDia.innerHTML = "Fue la primera vez que fuimos a entrenar, fue divertido y comimos pizza, esa vez me dijiste que tenias miedo que cuando volvieramos a clases fuera a ser como antes y yo te dije que no iba a ser asi"
    fecha.innerHTML = "18 - Ene - 25"
  }
  else if (contador == 7) {
    fotoDia.src = 'fotos/14Feb25.jpg'
    descripcionDia.innerHTML = "Amor aqui se te quemo la pancita porque nos dormimos en el sol, la pasamos en bicentenario y me regalaste un corazon muy bonito y mi playera favorita del mundo, fue mi primer catorce de febrero con mi osa y espero que sigan muchos mas jiji"
    fecha.innerHTML = "14 - Feb - 25"
  }
  else if (contador == 8) {
    fotoDia.src = 'fotos/23Marzo25.jpg'
    descripcionDia.innerHTML = "Mi cumple favorito amor, fuiste demasiado detallista con todo lo que me diste, el batmansito, la caja, los dulces, el ramo de corazon, la prote y ame ese dia amor"
    fecha.innerHTML = "23 - Mar - 25"
  }
  else if (contador == 9) {
    fotoDia.src = 'fotos/28Marzo25.jpg'
    descripcionDia.innerHTML = "Aun recuerdo que te pusiste a llorar cuando leiste la carta amor, ese dia queria irte a recoger de la escuela pero saliste temprano entonces para no perder tiempo te mande a que vinieras jij, quise esforzarme en hacerte un desayuno bonito y darte cosas lindas y espero que te haya gustado tanto como a mi ese dia amor, quiero hacerte sentir especial todos los dias pero mas en tu cumple"
    fecha.innerHTML = "28 - Mar - 25"
  }
  else if (contador == 10) {
    fotoDia.src = 'fotos/29Marzo25.jpg'
    descripcionDia.innerHTML = "Fue la primera vez que dormimos juntos en la noche amor, me gusto mucho robar pastel y conocer a tus hijos, ese dia atrape el camion de ultimo momento porque ya casi se me iba, me gusto mucho verte en pijama"
    fecha.innerHTML = "29 - Mar - 25"
  }
  else if (contador == 11) {
    fotoDia.src = 'fotos/2Mayo25.jpg'
    descripcionDia.innerHTML = "Amor como no dejar de pensar en esos viernes de pijama, desayuno y mantita, me saltaba la clase anterior para apartar la banca y era lo mejor del mundo verte llegar, amaba quedarme dormido junto contigo para despues regresarnos juntitos, me hice adicto a tus brownies de chocolate en ese tiempo y tambien a la comodidad de esa banca del y donde pasamos tantos momentos felices"
    fecha.innerHTML = "2 - May - 25"
  }
  else if (contador == 12) {
    fotoDia.src = 'fotos/16Mayo25.jpg'
    descripcionDia.innerHTML = "En ese dia fuimos al centro a dos museos: el de medicina y otro de guerra, me gusto mas el de medicina pero recorrer cualquier museo contigo es muy lindo, ya hay que ir a otro"
    fecha.innerHTML = "16 - May - 25"
  }
  else if (contador == 13) {
    fotoDia.src = 'fotos/30Mayo25.jpg'
    descripcionDia.innerHTML = "Amor este dia fuiste conmigo a hacer mi extra de frances y sin ti no hubiera podido, gracias por siempre ayudarme en todo de verdad lo aprecio, tambien fuimos al parque japones y comimos en las gamas, ese dia te quedaste a dormir en casita y fuimos felices"
    fecha.innerHTML = "30 - May - 25"
  }
  else if (contador == 14) {
    fotoDia.src = 'fotos/4Julio25.jpg'
    descripcionDia.innerHTML = "Un dia de salida a bicentenario amor, te quise hacer gorditas de nata pero se me quemaron y te di bien poquitas"
    fecha.innerHTML = "4 - Jul - 25"
  }
  else if (contador == 15) {
    fotoDia.src = 'fotos/11Jul25.jpg'
    descripcionDia.innerHTML = "Sigo sorpredido como llegue hasta ese parque en una bici tan peque, me gusto que la probaras y que estuvieramos juntos un rato, aunque aveces salgamos poquito siempre son especiales contigo"
    fecha.innerHTML = "11 - Jul - 25"
  }
  else if (contador == 16) {
    fotoDia.src = 'fotos/4Ago25.jpg'
    descripcionDia.innerHTML = "Mi osota inteligente, te mereces todo lo bonito en esta vida, me gusta mucho esa foto porque se ve muy tierna y para que recuerdes que siempre estare para ti"
    fecha.innerHTML = "4 - Ago - 25"
  }
  else if (contador == 17) {
    fotoDia.src = 'fotos/15Sep25.jpg'
    descripcionDia.innerHTML = "Que foto tan linda amor, los dos felices, ese dia llovio antes de ir por ti pero en ningun momento pense en no llevarte, ese dia al igual que muchos otros llegue a tu casita caminando porque por obra del destino estamos muy cerquis los dos"
    fecha.innerHTML = "15 - Sep - 25"
  }
  else if (contador == 18) {
    fotoDia.src = 'fotos/16Oct25.jpg'
    descripcionDia.innerHTML = "Nuestro aniversario del mes anterior amor, muy linda la foto porque sales tu y mas linda porque sales feliz como lombriz"
    fecha.innerHTML = "16 - Oct - 25"
  }
}
function atras(){
  contador -= 1
  console.log(contador)
  if (contador > 18) {
    contador = 1;
  }
  else if (contador < 1) {
    contador = 18;
  }
  recorrido.textContent = `${contador}/18`; 
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
  else if (contador == 5) {
    fotoDia.src = 'fotos/16Enero25.jpg'
    descripcionDia.innerHTML = "Amor este dia fue de los mas magicos y lindo que he vivido en toda mi vida, nunca antes habia ido a un acuario y verlo junto contigo fue una experiencia que jamas voy a olvidar, me gusto mucho pintar y ver a nuestros pingus, tambien fuimos a la basilica y comimos mcdonalds"
    fecha.innerHTML = "16 - Ene - 25"
  }
  else if (contador == 6) {
    fotoDia.src = 'fotos/18Enero25.jpg'
    descripcionDia.innerHTML = "Fue la primera vez que fuimos a entrenar, fue divertido y comimos pizza, esa vez me dijiste que tenias miedo que cuando volvieramos a clases fuera a ser como antes y yo te dije que no iba a ser asi"
    fecha.innerHTML = "18 - Ene - 25"
  }
  else if (contador == 7) {
    fotoDia.src = 'fotos/14Feb25.jpg'
    descripcionDia.innerHTML = "Amor aqui se te quemo la pancita porque nos dormimos en el sol, la pasamos en bicentenario y me regalaste un corazon muy bonito y mi playera favorita del mundo, fue mi primer catorce de febrero con mi osa y espero que sigan muchos mas jiji"
    fecha.innerHTML = "14 - Feb - 25"
  }
  else if (contador == 8) {
    fotoDia.src = 'fotos/23Marzo25.jpg'
    descripcionDia.innerHTML = "Mi cumple favorito amor, fuiste demasiado detallista con todo lo que me diste, el batmansito, la caja, los dulces, el ramo de corazon, la prote y ame ese dia amor"
    fecha.innerHTML = "23 - Mar - 25"
  }
  else if (contador == 9) {
    fotoDia.src = 'fotos/28Marzo25.jpg'
    descripcionDia.innerHTML = "Aun recuerdo que te pusiste a llorar cuando leiste la carta amor, ese dia queria irte a recoger de la escuela pero saliste temprano entonces para no perder tiempo te mande a que vinieras jij, quise esforzarme en hacerte un desayuno bonito y darte cosas lindas y espero que te haya gustado tanto como a mi ese dia amor, quiero hacerte sentir especial todos los dias pero mas en tu cumple"
    fecha.innerHTML = "28 - Mar - 25"
  }
  else if (contador == 10) {
    fotoDia.src = 'fotos/29Marzo25.jpg'
    descripcionDia.innerHTML = "Fue la primera vez que dormimos juntos en la noche amor, me gusto mucho robar pastel y conocer a tus hijos, ese dia atrape el camion de ultimo momento porque ya casi se me iba, me gusto mucho verte en pijama"
    fecha.innerHTML = "29 - Mar - 25"
  }
  else if (contador == 11) {
    fotoDia.src = 'fotos/2Mayo25.jpg'
    descripcionDia.innerHTML = "Amor como no dejar de pensar en esos viernes de pijama, desayuno y mantita, me saltaba la clase anterior para apartar la banca y era lo mejor del mundo verte llegar, amaba quedarme dormido junto contigo para despues regresarnos juntitos, me hice adicto a tus brownies de chocolate en ese tiempo y tambien a la comodidad de esa banca del y donde pasamos tantos momentos felices"
    fecha.innerHTML = "2 - May - 25"
  }
  else if (contador == 12) {
    fotoDia.src = 'fotos/16Mayo25.jpg'
    descripcionDia.innerHTML = "En ese dia fuimos al centro a dos museos: el de medicina y otro de guerra, me gusto mas el de medicina pero recorrer cualquier museo contigo es muy lindo, ya hay que ir a otro"
    fecha.innerHTML = "16 - May - 25"
  }
  else if (contador == 13) {
    fotoDia.src = 'fotos/30Mayo25.jpg'
    descripcionDia.innerHTML = "Amor este dia fuiste conmigo a hacer mi extra de frances y sin ti no hubiera podido, gracias por siempre ayudarme en todo de verdad lo aprecio, tambien fuimos al parque japones y comimos en las gamas, ese dia te quedaste a dormir en casita y fuimos felices"
    fecha.innerHTML = "30 - May - 25"
  }
  else if (contador == 14) {
    fotoDia.src = 'fotos/4Julio25.jpg'
    descripcionDia.innerHTML = "Un dia de salida a bicentenario amor, te quise hacer gorditas de nata pero se me quemaron y te di bien poquitas"
    fecha.innerHTML = "4 - Jul - 25"
  }
  else if (contador == 15) {
    fotoDia.src = 'fotos/11Jul25.jpg'
    descripcionDia.innerHTML = "Sigo sorpredido como llegue hasta ese parque en una bici tan peque, me gusto que la probaras y que estuvieramos juntos un rato, aunque aveces salgamos poquito siempre son especiales contigo"
    fecha.innerHTML = "11 - Jul - 25"
  }
  else if (contador == 16) {
    fotoDia.src = 'fotos/4Ago25.jpg'
    descripcionDia.innerHTML = "Mi osota inteligente, te mereces todo lo bonito en esta vida, me gusta mucho esa foto porque se ve muy tierna y para que recuerdes que siempre estare para ti"
    fecha.innerHTML = "4 - Ago - 25"
  }
  else if (contador == 17) {
    fotoDia.src = 'fotos/15Sep25.jpg'
    descripcionDia.innerHTML = "Que foto tan linda amor, los dos felices, ese dia llovio antes de ir por ti pero en ningun momento pense en no llevarte, ese dia al igual que muchos otros llegue a tu casita caminando porque por obra del destino estamos muy cerquis los dos"
    fecha.innerHTML = "15 - Sep - 25"
  }
  else if (contador == 18) {
    fotoDia.src = 'fotos/16Oct25.jpg'
    descripcionDia.innerHTML = "Nuestro aniversario del mes anterior amor, muy linda la foto porque sales tu y mas linda porque sales feliz como lombriz"
    fecha.innerHTML = "16 - Oct - 25"
  }
}

