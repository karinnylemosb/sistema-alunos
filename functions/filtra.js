var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {
  var alunos = document.querySelectorAll('.aluno');

  if (this.value.length > 0) {
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      var tdNome = aluno.querySelector('.info-nome');
      var nome = tdNome.textContent;

      // Usando Expressão regular:
      var expressao = new RegExp(this.value, 'i');
      if (!expressao.test(nome)) {
        aluno.classList.add('invisivel');
      } else {
        aluno.classList.remove('invisivel');
      }
    }
  } else {
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      aluno.classList.remove('invisivel');
    }
  }
});

// Eu também poderia fazer sem a expressão regular, mas precisaria digitar a palavra toda e não ir buscando letra por letra:
// Escondendo o aluno que for diferente do que é digitado no input:
// if (nome != this.value){
//     aluno.classList.add ("invisivel")
// } else {
//     aluno.classList.remove ("invisivel")
// }

//

// As expressões regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings, facilitando quando o termo for maior. Pode ser uma busca simples, como no nosso caso, em que queremos identificar quais nomes contêm determinadas letras; ou casos complexos, se queremos pesquisar se o parágrafo contém a palavra "nome", por exemplo, é como quando os editores de texto buscam por uma palavra usando o comando "CTRL + F".

// O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque). Por exemplo, podemos definir que não queremos que haja distinção entre letras maiúsculas e minúsculas, através da flag i.
