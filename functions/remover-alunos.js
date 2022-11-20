var tabela = document.querySelector('#tabela-alunos');

tabela.addEventListener(deletar());

function deletar() {
  tabela.addEventListener('click', function (event) {
    event.target.parentNode.remove();
  });
}
