let documentNum = document.getElementById('document-number').childNodes[1];
let leftButton = document.getElementById('left-button');
let documentImg = document.getElementById('document-image');
let rightButton = document.getElementById('right-button');

let allImg = [
    'url(./images/courses/sololearn-js.jpg)',
    'url(./images/courses/sololearn-css.jpg)',
    'url(./images/courses/sololearn-html.jpg)',
    'url(./images/courses/coursera-js.jpg)'
];
let num = 0;

function reduceNumber(){
    let p = `[ ${num + 1} / 4 ]`;
    return p;
}
function increaseNumber(){
    let p = `[ ${num - 1} / 4 ]`;
    return p;
}

function prev(){
    num--;
    if (num < 0) {
        num = allImg.length - 1;
    }
    documentImg.style.backgroundImage = allImg[num];

    documentNum.removeChild(documentNum.childNodes[0]);
    let text = document.createTextNode( reduceNumber() );
    documentNum.appendChild(text);
}    
function next(){
    num++;
    if (num >= allImg.length) {
        num = 0;
    }
    documentImg.style.backgroundImage = allImg[num];

    documentNum.removeChild(documentNum.childNodes[0]);
    let text = document.createTextNode( reduceNumber() );
    documentNum.appendChild(text);
}

leftButton.onclick = function() {
    prev();
}
rightButton.onclick = function() {
    next();
}

if (window.innerWidth < window.innerHeight ) {
    alert('Для отображения сайта на мобильном устройстве прошу Вас использовать поворот экрана (портретный режим), а после обновить страницу. \nПриношу свои извинения за доставленные неудобства');
    document.body.style.display = 'none';
}
