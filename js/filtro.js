let campoPesquisa = document.querySelector("#pesquisar-pokemon");

campoPesquisa.addEventListener("input", function(){

    let pokemons = document.querySelectorAll(".pokemon");

    // verificar se algo foi digitado, buscando teste

    if (this.value.length > 0){
        for (let i = 0; i < pokemons.length; i++){
            let pokemon = pokemons[i];
            // adicionando as celulas
            let tdNome = pokemon.querySelector(".info-nome");
            let nome = tdNome.textContent;
            // Expressão do JS
            let expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
                pokemon.classList.add("esconder");
            }else{
                pokemon.classList.remove("esconder");
            }
        }
    }else{
        for (let i = 0; i < pokemons.length; i++){
            let pokemon = pokemons[i];
            pokemon.classList.remove("esconder");
        }
    };
});