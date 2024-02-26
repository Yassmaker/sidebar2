var sidebar = document.querySelector('.sidebar');
var menu = document.querySelector('#menu');
var counter = 0

window.addEventListener('DOMContentLoaded' , () =>{
    menu.addEventListener('click', () =>{
        sidebar.style.display = 'block';
        if (window.innerWidth > 600 && window.innerWidth < 832)
        {
            counter++
            menu.innerHTML= 'close'
            if(counter == 2)
            
            {
                sidebar.style.display = 'none';
                counter = 0;
                menu.innerHTML= 'menu'
            }
        }
    })

    if(window.innerWidth <= 600){
        sidebar.style.display = 'none';

        close.addEventListener('click' , () =>{
            sidebar.style.display = 'none'
        })
    }
})
var close = document.querySelector('#close');


