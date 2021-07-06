const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.end('' +
    ` <div>
        <h1>Home page</h1>
        <a href="/about">about</a>
      </div>`)
})
app.get('/about', (req, res) => {
  res.end(`<h1>About page</h1>
<a href="/">home</a>`)
})

app.listen(PORT, () => {
  console.log('server has been started on port:' + PORT)
})