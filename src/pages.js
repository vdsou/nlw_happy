const Database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js');

module.exports = {
    index(req, res){
        return res.render("index");
    },
    async orphanages(req, res){
        
        const db = await Database;
        try {
            const orphanages = await db.all("SELECT * FROM orphanages");
        
            return res.render("orphanages", { orphanages });
            
        } catch (error) {
            console.log(error);
            return res.send("Erro no banco de dados.");
        }
    },
    async orphanage(req, res){
        try {
            const id = req.query.id;
            const db = await Database;
            const select = await db.all(`SELECT * FROM orphanages WHERE id = '${id}'`)
            const orphanage = select[0];
            orphanage.openOnWeekends = orphanage.openOnWeekends == 1 ? true : false;
            orphanage.images = orphanage.images.split(",");
            
            return res.render("orphanage", { orphanage });
            
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }
    },
    createOrphanage(req, res){
        return res.render("create-orphanage")
    },
    async saveOrphanage(req, res) {
        const fields = req.body;

        if(Object.values(fields).includes('')){
            return res.send("Erro! Preencha todos os campos, por favor!")
        }

        try {
            const db = await Database;
            await saveOrphanage(db, fields);
            return res.redirect('/orphanages');
            
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }

    }
}