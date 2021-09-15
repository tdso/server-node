const conexao = require('../infra/conexao')

class Tabelas {

  init(conexao) {
    this.conexao = conexao;
    this.criarTabelas();
  }
  criarTabelas() {
    const sqlTableDiario = "CREATE TABLE IF NOT EXISTS Diario (id bigint(20) DEFAULT NULL AUTO_INCREMENT," +
      " tarefa varchar(100) NOT NULL," +
      " observacao varchar(100) DEFAULT NULL," +
      " data datetime," +
      " PRIMARY KEY (id) );"
    const sqlTableArquivos = "CREATE TABLE IF NOT EXISTS Arquivos (id int NOT NULL AUTO_INCREMENT," +
      "nomearquivo varchar(100) NOT NULL, data datetime, PRIMARY KEY (id));"

    this.conexao.query(sqlTableDiario, erro => {
      if (erro) {
        console.log("erro criacao na tabela diario")
        throw new Exception("Erro ao criar tabela do banco de dados")
      } else {
        console.log("******************************")
        console.log("Tabela Diario criada")
      }
    })
    this.conexao.query(sqlTableArquivos, erro => {
      if (erro) {
        console.log("erro criacao na tabela arquivo")
        throw new Exception("Erro ao criar tabela do banco de dados")
      } else {
        console.log("******************************")
        console.log("Tabela Arquivo criada")
      }
    })


  }
}
module.exports = new Tabelas()


/*
 CREATE TABLE `Diario` (
          `id` bigint(20) DEFAULT NULL AUTO_INCREMENT,
          `tarefa` varchar(100) NOT NULL,
          `observacao` varchar(100) DEFAULT NULL,
          `data` datetime,
          PRIMARY KEY (id)
        )  ;"

*/