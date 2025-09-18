import sqlite3 from "sqlite3";

const db = new sqlite3.Database('library_db.sqlite3', (err) => {
    if (err) {
        console.log("Erro na conexão com banco de dados: ", err.message);
    }else{
        console.log("Conectado ao banco de dados: ");
    }
})

export default db;