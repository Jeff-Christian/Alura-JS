let tabela = document.querySelector("#tabela-pokemons");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fade-out");

    setTimeout(function(){
        if (event.target.tagName == 'TD'){
            event.target.parentNode.remove()
        }
    }, 500);
});