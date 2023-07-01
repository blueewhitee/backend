const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.get('/page1', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
    res.send('Hello to access different pages /n localhost:3001/page1 or json or html')
  })
  
app.get('/json', (req, res) => {
  res.json({
    name: "Ashutosh",
    yoo:"aayila json file bana dia",
  })
})
app.get('/html', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})