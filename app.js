const express = require('express')
const app = express()
const path = require('path')
const port = 3030
/* const archivosEstaticos =  path.resolve(__dirname,'public' )

app.use(express.static(archivosEstaticos)) */
app.use(express.static('public'))
app.listen(port,()=>console.log(`servidor corriendo en puerto ${port}`))
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))