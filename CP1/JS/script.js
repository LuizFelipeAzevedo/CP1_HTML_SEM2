const listaDeTarefas = [];

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa(descricao, autor, departamento, importancia) {
  const novaTarefa = {
    descricao: descricao,
    autor: autor,
    departamento: departamento,
    importancia: importancia,
  };

  listaDeTarefas.push(novaTarefa);
}

// Função para excluir tarefa concluída
function excluirTarefaConcluida(descricao) {
  const indice = listaDeTarefas.findIndex(tarefa => tarefa.descricao === descricao);

  if (indice !== -1) {
    listaDeTarefas.splice(indice, 1);
  }
}

// Função para adicionar campo valor em tarefa
function adicionarValorTarefa(descricao, valor) {
  const tarefa = listaDeTarefas.find(tarefa => tarefa.descricao === descricao);

  if (tarefa) {
    tarefa.valor = valor;
  }
}

// Função para adicionar campo duração em tarefa
function adicionarDuracaoTarefa(descricao, duracao) {
  const tarefa = listaDeTarefas.find(tarefa => tarefa.descricao === descricao);

  if (tarefa) {
    tarefa.duracao = duracao;
  }
}

// Função para criar lista das tarefas por ordem de importância
function listarTarefasPorImportancia() {
  const tarefasOrdenadas = listaDeTarefas.slice().sort((a, b) => b.importancia - a.importancia);
  const descricaoTarefasOrdenadas = tarefasOrdenadas.map(tarefa => tarefa.descricao);
  return descricaoTarefasOrdenadas;
}

// Exemplos de uso
adicionarTarefa("Fazer relatório mensal", "João", "Contabilidade", 3);
adicionarTarefa("Reunião de equipe", "Maria", "RH", 4);
adicionarTarefa("Verificação mensal", "Luiz", "RH", 2);

//console.log(listaDeTarefas);

//excluirTarefaConcluida("Fazer relatório mensal");
//console.log(listaDeTarefas);

adicionarValorTarefa("Reunião de equipe", 150); 
adicionarValorTarefa("Verificação mensal", 100); 
adicionarDuracaoTarefa("Reunião de equipe", "2 horas");
adicionarDuracaoTarefa("Verificação mensal", "1 hora");
console.log(listaDeTarefas);

const tarefasPorImportancia = listarTarefasPorImportancia();
console.log(tarefasPorImportancia);
