let menu = document.querySelector('.canvas');
let textoArray = document.querySelector('.digitar');
function ativa() {
    if (menu.classList.contains('ativar')) {
        menu.classList.remove('ativar');
        document.querySelector('.menuMobile').src = "img/Menu.svg";
    } else {
        menu.classList.add('ativar');
        document.querySelector('.menuMobile').src = "img/close.svg";
    }
}


const secundo = 'Portifolio';
let digita2 = document.querySelector('.digitarp');


for (let index = 0; index < (secundo.length); index++) {
    
        (function (pos) {
            setTimeout(function () {
                digita2.innerHTML += secundo.charAt(pos);
            }, 400 * pos);
        })(index);
    


}
