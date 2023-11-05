/* eslint-disable no-unused-vars */
/* eslint-disable no-loss-of-precision */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const app = require('./database/app')
const { port } = require('../src/config/index')
const { connectDb } = require('./database/connectDb')
connectDb()

let x = 333333333333333333333

const data = 'dslklsd'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
