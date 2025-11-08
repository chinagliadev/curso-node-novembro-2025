const express = require('express') 
const app = express() 

app.get('/', function(req, res){ 
    res.send('aaa world')
})

app.get('/pastel', (req, res) => {res.send('seu paster chegou bb')})


app.listen(3000) 