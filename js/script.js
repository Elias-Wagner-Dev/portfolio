let menu = document.querySelector('.canvas');
let textoArray = document.querySelector('.digitar');
function ativa() {
    if (menu.classList.contains('ativar')) {
        menu.classList.remove('ativar');
        document.querySelector('.menuMobile').src = "/img/Menu.svg";
    } else {
        menu.classList.add('ativar');
        document.querySelector('.menuMobile').src = "/img/close.svg";
    }
}

