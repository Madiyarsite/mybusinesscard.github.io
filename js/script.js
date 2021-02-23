let next = document.querySelectorAll('.slide_next'),
    before = document.querySelectorAll('.slide_before'),
    cub = document.querySelector('.cub__container'),
    more = document.querySelectorAll('.btn__more'),
    deactive = document.querySelectorAll('.deactive'),
    cubItem = document.querySelectorAll('.cub__item'),
    whatsapp = document.querySelectorAll('.new'),
    number = document.querySelectorAll('.num'),
    tel = document.querySelector('.whatsapp'),
    cubContent = document.querySelectorAll('.cub__content');
let num = 0;
    next.forEach((item)=> item.addEventListener('click', ()=>{
        num -= 90;
        cub.style.transform = `rotateY(${num}deg)`;
    }));
        
   
        
    
    before.forEach((item)=> item.addEventListener('click', ()=>{
        num += 90;
        cub.style.transform = `rotateY(${num}deg)`;
    }));
        
  
    // function deactivee(){
    //     cubContent.forEach((item)=> item.classList.add('deactive'));
    // }
    // deactivee();
    function deactivee(){
        cubContent[0].classList.add('deactive');
    }
    deactivee();
    let chek = 0;
   
more.forEach((item, i)=> item.addEventListener('click', function(){
   
    cubItem[i].classList.add('deactive');
    cubContent[i].classList.remove('deactive');
    
}));


let check = 0,
    checked = -1;
function plus(){
    check += 1;
    if(check > 4){
        check = 0;
    }
    
}
function minus(){
    checked += 1;
    if(checked > 4){
        checked = 0;
    }
    
}

function slide(){
    whatsapp[check].style.color = '#c70039';
    whatsapp[checked].style.color = '#fff';
    

}
function cheking(){
    if(tel.classList.contains('whatsapp')){
        setInterval(plus, 1000);
        setInterval(minus, 1000);
        setInterval(slide, 100);
    }
}
cheking();



