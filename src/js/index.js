// Passo 1 - Pega o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// Passo 2 - Identificar o clique do usuário no botão

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
   
    // Passo 3 - Desmarcar o botão selecionado anterior

    desativarBotaoSelecionado();

    // Passo 4 - Marcar o botão clicado como "selecionado"
    
    marcarBotaoSelecionado(botao);

    // Passo 5 - Esconder a imagem anteriormente selecionada

    esconderImagemAtiva();

    //Passo 6 - Fazer aparecer a imagem correspondente ao botão

    mostrarImagemDeFundo(indice);

    //Passo 7 - Esconder a informação do dragão anterior

    esconderInformacoesAtiva();

    //Passo 8 -  Mostrar a informação do dragão referente ao botão clicado

    mostrarInformacoes(indice);
  });
});
function marcarBotaoSelecionado(botao) {
   botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
   informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtiva() {
   const informacoesAtiva = document.querySelector(".informacoes.ativa");
   informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
   imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
   const imagemAtiva = document.querySelector(".ativa");
   imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
   const botaoSelecionado = document.querySelector(".selecionado");
   botaoSelecionado.classList.remove("selecionado");
}

