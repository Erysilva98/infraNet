const db = require('../data/db');

const AvisosModel = {
    getAllAvisos: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT id, img_path, prioridade, data_publicacao, link, titulo, subtitulo FROM avisos ORDER BY data_publicacao DESC LIMIT 100';
            db.query(query, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    getAvisos: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT id, img_path, prioridade, data_publicacao, link, titulo, subtitulo, descricao FROM avisos WHERE id = ?';
            db.query(query, [id], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
            });
        });
    },
};

module.exports = AvisosModel;
