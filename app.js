const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json')

app.get('/', (req, res, next) => {
  res.send('Dolly Quote Generator')
})

app.get('/data', (req, res, next) => {
  res.status(200).send({
    "message": "You Did It, good job",
    "data": data
  })
})

app.get('/:tag', (req, res, next) => {
  const tag = req.params.tag
  if(!data.tags.includes(tag)){
    res.status(404).send('You blew it')
  } else {
    const matching = data.songs.filter(song => song.tags.includes(tag))
      res.status(200).send(matching)
    }
  })


app.listen(port, ()=> console.log('Party on port 3000'))