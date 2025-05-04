
export default function(server,db) {

    server.get('/frutas', (req, res) => {
        console.log("🙋 Recebi requisição GET em /frutas");    
        let dados = db.get("/frutas")
        res.json(dados);
    });
    
    server.get('/frutas/:id', (req, res) => {
        console.log("🙋 Recebi requisição GET em /frutas/:id")  
        console.log("o que tem no req.params",req.params)  
        let dados = db.get("/frutas/"+req.params.id)
        res.json(dados);
    });
    
    server.post('/frutas/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /frutas/:id")  
        console.log("o que tem no req.params",req.params)  
        console.log("o que tem no req.body",req.body)
        let fruta = db.get("/frutas/"+req.params.id)
        if(fruta != null) {
            res.json({ error: true, msg: "Fruta já existe!" })
            return
        }
        let elem = {
            id: req.params.id,
            nome: req.body.nome,
            cor: req.body.cor
        }  
        console.log("elem: ",elem);    
        db.set("/frutas/"+req.params.id, elem)
        res.json({ msg: "ok", elem });
    });
    
    server.put('/frutas/:id', (req, res) => {
        console.log("🙋 Recebi requisição PUT em /frutas/:id")  
        console.log("o que tem no req.params",req.params)  
        console.log("o que tem no req.body",req.body)
        let fruta = db.get("/frutas/"+req.params.id)
        if(fruta == null) {
            res.json({ error: true, msg: "Fruta não existe!" })
            return
        }
        let elem = {
            id: req.params.id,
            nome: req.body.nome,
            cor: req.body.cor
        }  
        console.log("elem: ",elem);    
        db.set("/frutas/"+req.params.id, elem)
        res.json({ msg: "ok", elem });
    });
    
    server.delete('/frutas/:id', (req, res) => {
        console.log("🙋 Recebi requisição DELETE em /frutas/:id")  
        console.log("o que tem no req.params",req.params)  
        let fruta = db.get("/frutas/"+req.params.id)
        if(fruta == null) {
            res.json({ error: true, msg: "Fruta não existe!" })
            return
        }
        db.set("/frutas/"+req.params.id, null)
        res.json({ msg: "remoção ok" })
    });


}