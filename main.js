// ================Beknazar Oltiboyev=================

let menuList = document.getElementById('menu_list')
let toggleIcon = document.querySelector('.toggleMenu')
menuList.style.maxHeight = '0px'

toggleIcon.addEventListener('click', ()=>{
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '350px'
    }else{
        menuList.style.maxHeight = '0px'
    }
})