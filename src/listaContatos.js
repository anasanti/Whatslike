const knex = require('./database');

// listaContatos
module.exports = () => {
    const sql = `
        (
            SELECT pessoa.nome FROM pessoa
                WHERE id != 1
        ) UNION (
            SELECT grupo.nome FROM grupo
        ) ORDER BY nome ASC
    `;

    knex.raw(sql).then(([ registros ]) => {
            
        if (registros && registros.length > 0) {
            console.log('Lista de contatos e grupos');
            registros.forEach((registro) => {
                console.log(registro.nome)
            });
        } else {
            console.log('Sem contatos ou grupos registrados!');
        }
    });

};