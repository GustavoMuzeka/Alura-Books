const html = document.querySelector('#livros')

let livros = []
const endpointdaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointdaAPI)
    livros = await res.json()
    livros.forEach((livro) => { 
        if (livro.quantidade < 1){
            livros.disponibilidade = 'indisponivel'
        }else{
            livros.disponibilidade = 'disponivel'
        }
        html.innerHTML += `<div class="livro">
      <img class="livro__imagens ${livros.disponibilidade}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}0</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    })
}

