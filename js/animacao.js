let cards = document.querySelector('.projeto');
let cardsAdd = document.querySelector('.cardAdd');
let tt = document.getElementById('tt');

function mostra(){
    console.log('mostra');
    if(cards.classList.contains('mostra')){
        cards.classList.remove('mostra');
        cardsAdd.classList.remove('cardAddMostra');
        tt.classList.remove('cardAddMostra');

    }else{
        cards.classList.add('mostra');
        cardsAdd.classList.add('cardAddMostra');
        tt.classList.add('cardAddMostra')
    }
}
