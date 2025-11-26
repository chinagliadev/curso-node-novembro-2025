const express = require('express') 
const app = express() 

app.use(express.json())

const herois = [
    'Mulher Maravilha', 
    'Superman',
    'Batman'
]

app.get('/herois', function(req, res){ 
    res.send(herois)
})

app.get('/herois/:id', (req, res) =>{
    const id = req.params.id 
    res.send(herois[id-1])
})

app.post('/herois', (req, res)=>{
    let novoHeroi = req.body.nome
    herois.push(novoHeroi)
    res.send('Novo heroi cadastrado com sucesso !')
})

app.listen(3000, () =>{
    console.log('Rodando na porta 3000')
}) 