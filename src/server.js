const app = require('./database/app')
const { port } = require('../src/config/index')
const { connectDb } = require('./database/connectDb')
connectDb()

const data = 'dslklsd'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
