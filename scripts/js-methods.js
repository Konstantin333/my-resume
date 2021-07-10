/* Стрелка вверх, перемещающая к началу страницы: */
let arrowTop = document.getElementById('arrowTop');
arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
};
window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
/* ------------------------------- */

/* Взаимодействие панели навигации с элементами таблицы (путём наведения на элемент): */
let navElementButtons = document.getElementsByClassName('navigation-elements');
let tableElements = document.getElementById('elements-table').getElementsByTagName('tr');

let disableItemSelection = document.getElementById('disable-selection');
let disableSelectionButton = disableItemSelection.childNodes[1];

function useElementNavigation() {
    for(let i = 0; i < navElementButtons.length; i++){
        navElementButtons[i].addEventListener('click', function() {
            tableElements[i + 1].scrollIntoView();
            for (let j = 0; j < navElementButtons.length; j++){
                tableElements[j + 1].style.opacity = 0.1;
                tableElements[i + 1].style.opacity = 1;
                disableItemSelection.style.display = 'block';
            }
        })
    }
}
function useShutdownButton() {
    disableSelectionButton.addEventListener('click', function() {
        disableItemSelection.style.display = 'none';
        for (let i = 0; i < navElementButtons.length; i++){
            tableElements[i + 1].style.opacity = 1;
        }
    })
}

useElementNavigation();
useShutdownButton();
/* ------------------------------- */
if (window.innerWidth < window.innerHeight ) {
    alert('Для отображения сайта на мобильном устройстве прошу Вас использовать поворот экрана (портретный режим), а после обновить страницу. \nПриношу свои извинения за доставленные неудобства');
    document.body.style.display = 'none';
}
