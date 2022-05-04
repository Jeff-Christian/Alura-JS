let botaoAdicionar = document.querySelector("#btn-adicionar");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#pokemon-form");

    // função de recebimento dos dados do formulario
    
    let pokemon = obtemDadosDoFormulario(form);

    // monta a tabela

    let pokemonTr = montaTr(pokemon);

    let tabela = document.querySelector("#tabela-pokemons");

    tabela.appendChild(pokemonTr);

    // reseta o formulario

    form.reset();
});

// como o nome da função diz, obtem os dados do formulario vindo do html.
function obtemDadosDoFormulario(form){
    var pokemon = {
     nome: form.nome.value,
     numero: form.numero.value,
     habilidade: form.habilidade.value,
     tipo: form.tipo.value,
     apelido: form.apelido.value
    }

    return pokemon;
}

// monta as celulas da tabela e coloca as classes.
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

// monta as linhas e as classes da tabela.
function montaTr(pokemon){
    // cria a TR
    let pokemonTr = document.createElement("tr");
    pokemonTr.classList.add("pokemon");
    pokemonTr.appendChild(montaTd(pokemon.nome, "info-nome"));
    pokemonTr.appendChild(montaTd(pokemon.numero, "info-numero"));
    pokemonTr.appendChild(montaTd(pokemon.habilidade, "info-habilidade"));
    pokemonTr.appendChild(montaTd(pokemon.tipo, "info-tipo"));
    pokemonTr.appendChild(montaTd(pokemon.apelido, "info-apelido"));

    return pokemonTr;
}