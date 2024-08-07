document.addEventListener('DOMContentLoaded',function(){
    const menuIcon=document.querySelector(".menu-icon");
    const dropdownMenu=document.querySelector(".dropdown-menu");

    menuIcon.addEventListener('click',function(){
        dropdownMenu.classList.toggle('show');
    })
    window.addEventListener('click',function(event){
        if(!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)){
            dropdownMenu.classList.remove('show')
        }
    })
})