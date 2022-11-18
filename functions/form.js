var botaoAdicionar = document.querySelector('#adicionar-aluno');
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault(); // Evita o recarregamento automático

  var form = document.querySelector('#form-adiciona');
  // Extraindo informacoes do aluno do form
  var aluno = obtemalunoDoFormulario(form);
  // Cria a tr e a td do aluno
  var alunoTr = montaTr(aluno);

  var tabela = document.querySelector('#tabela-alunos');
  tabela.appendChild(alunoTr);
  form.reset();
});

function adicionaalunoNaTabela(aluno) {
  var alunoTr = montaTr(aluno);
  var tabela = document.querySelector('#tabela-alunos');
  tabela.appendChild(alunoTr);
}

function obtemalunoDoFormulario(form) {
  var aluno = {
    nome: form.nome.value, //vem do 'name' no html
    matricula: form.matricula.value,
    nota1: form.nota1.value,
    nota2: form.nota2.value,
    nota3: form.nota3.value,

    media: calculaMédia(form.nota1.value, form.nota2.value, form.nota3.value),
  };
  return aluno;
}

function montaTr(aluno) {
  var alunoTr = document.createElement('tr');
  alunoTr.classList.add('aluno'); //Deixando com a class igual aos de origem

  alunoTr.appendChild(montaTd(aluno.nome, 'info-nome'));
  alunoTr.appendChild(montaTd(aluno.matricula, 'info-matricula'));
  alunoTr.appendChild(montaTd(aluno.nota1, 'info-nota1'));
  alunoTr.appendChild(montaTd(aluno.gordura, 'info-nota2'));
  alunoTr.appendChild(montaTd(aluno.imc, 'info-nota3'));

  alunoTr.appendChild(montaTdLixeira('imagem-excluir'));

  return alunoTr;
}

function montaTd(dado, classe) {
  var td = document.createElement('td'); //Criando a td
  td.textContent = dado; //Dizendo o q tem dentro.
  td.classList.add(classe);

  return td;
}

function montaTdLixeira(classe) {
  var td = document.createElement('td'); //Criando a td
  td.innerHTML = '<img src ="./img/excluir.png" width="18px">';
  td.classList.add(classe);

  return td;
}
