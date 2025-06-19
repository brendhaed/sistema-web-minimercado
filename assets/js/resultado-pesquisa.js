function Pesquisa(event) {
    event.preventDefault(); 

    let pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    let section = document.getElementById("resultado");
    let resultado = "";

    if (pesquisa.trim() === "") {
        section.innerHTML = "<p class='text-center'>Digite algo para buscar!</p>";
        return;
    }

    for (let produto of produtos) {
        let categoria = produto.categoria.toLowerCase();
        let nomeProduto = produto.nomeProduto.toLowerCase();
        let preco = produto.preco.toLowerCase();

        if (
            nomeProduto.includes(pesquisa) ||
            categoria.includes(pesquisa) ||
            preco.includes(pesquisa)
        ) {
           resultado += `
           <div class="row justify-content-center gx-0 my-3">
           <div class="col-10 col-md-6 col-lg-4">
           <div class="card h-100 shadow-sm text-center">
           <img src="${produto.img}" class="card-img-top" alt="${produto.nomeProduto}">
           <div class="card-body d-flex flex-column">
          <h5 class="card-title">${produto.nomeProduto}</h5>
          <p class="card-text fs-5 fw-bold">R$ ${produto.preco}</p>
          <a href="#" class="btn btn-primary mt-auto">Adicionar ao carrinho</a>
          <button type="button" class="btn btn-light mt-2">
            <i class="bi bi-star"></i> Favoritar
          </button>
        </div>
      </div>
    </div>
  </div>
`;

        }
    }

    if (resultado === "") {
        resultado = "<p class='text-center'>Produto não encontrado!</p>";
    }

    section.innerHTML = resultado;
}
