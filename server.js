var express = require('express')
var app = express()

app.use(express.static(__dirname))

var messages = [
    {name: 'Abeer', message: 'still working'},
    {name: 'Kenan', message: 'still crying'}
]
app.get('/messages', (req, res) =>{
    res.send(messages)
})

app.listen(3000, ()=>{
	console.log('server listening on port 3000')
})