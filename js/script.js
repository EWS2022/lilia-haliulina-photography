let body = document.querySelector('body');
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav__links');
let navLinksAll = document.querySelectorAll('.nav__links a');
let formIframe = document.querySelector('iframe');
let formWrapper = document.querySelector('.form__wrapper');
hamburger.onclick = function(){
    hamburger.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active');
    body.classList.toggle('scroll__none');
}

for (let navLinksNumber = 0; navLinksNumber < 4; navLinksNumber++){
    console.log(navLinksNumber);
    navLinksAll[navLinksNumber].onclick = function(){
        hamburger.classList.remove('hamburger_active');
        navLinks.classList.remove('nav__links_active');
        body.classList.remove('scroll__none');
    }
}

new Swiper ('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1500,
    loop: true,
    effect: 'cards',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

formIframe.onload = function(){
    formWrapper.classList.add('form__wrapper_active');
    setTimeout(()=>{
        document.forms.order.reset();
        formWrapper.classList.remove('form__wrapper_active');
    }, 3000)
}

//-------------------------------------------------------------
let nav = document.querySelector('nav');
let startPosition = window.scrollY;//переменная в которую попала стартавая высота
window.onscroll = function(){//запускаем функцию в момент прокрутки страницы
    let scrollPosition = window.scrollY;//переменная в котору попадает текушая высота на которую мы опустились или поднялись
    if(scrollPosition == 0){//поднелись на самый верх сайта
        nav.classList.remove('nav__hide');
    }else if(startPosition < scrollPosition){//если стартовая высота меньше чем текущая
        if(scrollPosition > 100){
            console.log('down');
            nav.classList.add('nav__hide');
        }
    }else{//иначе если стартовая высота больше чем текущая
        console.log('up');
        nav.classList.remove('nav__hide');
    }
    startPosition = window.scrollY;//меняем стартоаую позицию на ту на которой мы остановились
}