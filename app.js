const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json(`Questo è il server del mio blog, vai a visualizzare i post http://localhost:${port}/bacheca`)
})

app.get('/bacheca', (req, res) => {
    res.json([
        {
            title :'ciao a tutti',
            image: `http://localhost:${port}/images/ciambellone.jpeg`,
            bodyPost : 'lorem ipsum'
        },
        {
            title :'ciao a tutti',
            image: `http://localhost:${port}/images/cracker_barbabietola.jpegp`,
            bodyPost : 'lorem ipsum'
        }, {
            title :'ciao a tutti',
            image: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
            bodyPost : 'lorem ipsum'
        }, {
            title :'ciao a tutti',
            image: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
            bodyPost : 'lorem ipsum'
        }, {
            title :'ciao a tutti',
            image: `http://localhost:${port}/images/torta_paesana.jpeg`,
            bodyPost : 'lorem ipsum'
        },
    ])
})
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})