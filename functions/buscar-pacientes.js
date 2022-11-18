// Técnica AJAX, fazer requisição assíncrona (sem travar o JS);

var botaoAdicionar = document.querySelector('#importar-alunos');

botaoAdicionar.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  // Abrindo a requisição:
  xhr.open('GET', 'https://api-alunos.herokuapp.com/alunos');
  // Ouvindo a Resposta da requisição para quando ela tiver disponível e exibindo sua resposta em texto:
  xhr.addEventListener('load', function () {
    var resposta = xhr.responseText;
    var alunos = JSON.parse(resposta);

    alunos.forEach(function (aluno) {
      adicionaalunoNaTabela(aluno);
    });
  });
  // Enviando a requisição:
  xhr.send();
});
