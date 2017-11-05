import $ from './cssFramework'

document.addEventListener('DOMContentLoaded', modCss);


function modCss() {

    // можно чейнить
    $(document.body).addClass('bgcolor_red').addClass('bgcolor_blue').removeClass('bgcolor_red');

    // обращение через селектор
    $('.sss').addClass("active");

    // обращение через id
    $('#mcl').addClass('visited').toggleClass("active");

    console.log($('.sss').hasClass('visited'));

}

