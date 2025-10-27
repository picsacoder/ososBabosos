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

