function menuLiClick(num){
   let menus = document.querySelectorAll("ul#web-menu li")
   for(let i = 0; i< menus.length; i ++ ){
        menus[i].className = menus[i].className.replace('menu__item--button' , '')
   }
   document.querySelector(`ul#web-menu li:nth-child(${num})`).className = document.querySelector(`ul#web-menu li:nth-child(${num})`).className + ' menu__item--button'
   
}

function menuLiClick_mobile(num) {
    if( num == 4 ){
        let child = document.querySelector('.mobile-menu__child')
        console.log(child.className);
        if(child.className.includes('show') != true){
            child.className = child.className.replace('hidden', '')
            child.className = child.className + ' show'
        }
        else{
            child.className = child.className.replace('show', '')
            child.className = child.className + ' hidden'
        }
        // return;
    }
    let menuss = document.querySelectorAll("ul.mobile-menu li")
    for(let i = 0; i< menuss.length; i ++ ){
         menuss[i].className = menuss[i].className.replace('mobile-menu__item--button' , '')
    }
    document.querySelector(`ul.mobile-menu li:nth-child(${num})`).className = document.querySelector(`ul.mobile-menu li:nth-child(${num})`).className + ' mobile-menu__item--button'
}