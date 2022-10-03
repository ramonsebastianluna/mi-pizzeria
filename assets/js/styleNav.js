const links = document.querySelectorAll(".menu__item");

function reset(links){
    for (let i=0; i < links.length; i++){
        links[i].classList.remove("activo");
    }
}

function addEvents(links){
    for (let i=0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            reset(links);
            links[i].classList.add("activo");
        });
    }
}

addEvents(links);