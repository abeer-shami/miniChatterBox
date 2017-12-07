var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'Abeer', message: 'still working'},
    {name: 'Kenan', message: 'still crying'}
]
app.get('/messages', (req, res) =>{
    res.send(messages)
})

app.post('/messages', (req, res) =>{
    messages.push(req.body)
    res.sendStatus(200)
})

app.listen(2017, ()=>{
	console.log('server listening on port 2017')
})