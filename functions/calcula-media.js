var alunos = document.querySelectorAll('.aluno');

for (var i = 0; i < alunos.length; i++) {
  var aluno = alunos[i];

  var tdNota1 = aluno.querySelector('.info-nota1');
  var nota1 = tdNota1.textContent;

  var tdNota2 = aluno.querySelector('.info-nota2');
  var nota2 = tdNota2.textContent;

  var tdNota3 = aluno.querySelector('.info-nota3');
  var nota3 = tdNota3.textContent;

  function calculaMedia(nota1, nota2, nota3) {
    var media = 0;
    media = (nota1 + nota2 + nota3) / 3;
    return media;
    //N° de casas decimais
  }
}
