const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'hbs')
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/project', (req, res) => {
  res.render('project')
})

app.post('/project', (req, res) => {
    console.log(req.body)

    res.redirect('/')
})


app.get('/detail/:id', (req, res) => {
    let id = req.params.id
    res.render('detail', {
        id,
        judul: "Project Baru",
        konten: "lorem ipsummm"
    })
})


app.listen(port, () => {
  console.log(`Server Running on Port ${port}`)
})