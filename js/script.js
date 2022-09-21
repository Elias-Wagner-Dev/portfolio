let menu = document.querySelector('.canvas');
let p = document.querySelector('.digitar');
let p2 = document.querySelector('#ew');
let digita2 = document.querySelector('.digitarp');

function ativa() {
    if (menu.classList.contains('ativar')) {
        menu.classList.remove('ativar');
        document.querySelector('.menuMobile').src="img/Menu.svg";
        digita2.classList.remove('opa');
        p.classList.remove('opa');
        p2.classList.remove('opa');
    } else {
        menu.classList.add('ativar');
        document.querySelector('.menuMobile').src="img/Close.svg";
        digita2.classList.add('opa');
        p.classList.add('opa');
        p2.classList.add('opa');
    }
}


const secundo = 'Portifolio.';



for (let index = 0; index < (secundo.length); index++) {
    
        (function (pos) {
            setTimeout(function () {
                digita2.innerHTML += secundo.charAt(pos);
            }, 200 * pos);
        })(index);
    


}
