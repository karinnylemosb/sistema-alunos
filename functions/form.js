var botaoAdicionar = document.querySelector('#adicionar-aluno');
var botaoLixeira = document.getElementsByClassName('imagem-excluir');

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');

  var aluno = obtemAlunoDoFormulario(form);

  var alunoTr = montaTr(aluno);

  var tabela = document.querySelector('#tabela-alunos');
  tabela.appendChild(alunoTr);
  form.reset();
});

function adicionaAlunoNaTabela(aluno) {
  var alunoTr = montaTr(aluno);
  var tabela = document.querySelector('#tabela-alunos');
  tabela.appendChild(alunoTr);
}

function obtemAlunoDoFormulario() {
  var form = document.querySelector('#form-adiciona');
  var aluno = {
    nome: form.nome.value, //vem do 'name' no html
    matricula: form.matricula.value,
    nota1: form.nota1.value,
    nota2: form.nota2.value,
    nota3: form.nota3.value,
  };

  return aluno;
}

function montaTr() {
  var aluno = obtemAlunoDoFormulario();

  nota1 = parseFloat(aluno.nota1);
  nota2 = parseFloat(aluno.nota2);
  nota3 = parseFloat(aluno.nota3);
  media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

  var alunoTr = document.createElement('tr');
  // alunoTr.classList.add('aluno');

  alunoTr.appendChild(montaTd(aluno.nome, 'info-nome'));
  alunoTr.appendChild(montaTd(aluno.matricula, 'info-matricula'));
  alunoTr.appendChild(montaTd(aluno.nota1, 'info-nota1'));
  alunoTr.appendChild(montaTd(aluno.nota2, 'info-nota2'));
  alunoTr.appendChild(montaTd(aluno.nota3, 'info-nota3'));

  if (media >= 7) {
    alunoTr.classList.add('aprovado');
  } else {
    alunoTr.classList.add('reprovado');
  }
  alunoTr.appendChild(montaTd(media, 'info-media'));

  return alunoTr;
}

function montaTd(dado, classe) {
  var td = document.createElement('td'); //Criando a td
  td.textContent = dado; //Dizendo o q tem dentro.
  td.classList.add(classe);
  return td;
}
