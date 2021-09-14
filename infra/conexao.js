const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "senha",
    database: "example-node"
})

module.exports = conexao;