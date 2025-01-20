const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.json(`Questo è il server del mio blog, vai a visualizzare i post http://localhost:${port}/bacheca`)
})

app.get('/bacheca', (req, res) => {
    res.json([
        {
            title :'ciao a tutti',
            bodyPost : 'lorem ipsum'
        },
        {
            title :'ciao a tutti',
            bodyPost : 'lorem ipsum'
        },
        {
            title :'ciao a tutti',
            bodyPost : 'lorem ipsum'
        },
        {
            title :'ciao a tutti',
            bodyPost : 'lorem ipsum'
        },
        {
            title :'ciao a tutti',
            bodyPost : 'lorem ipsum'
        }
    ])
})
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})