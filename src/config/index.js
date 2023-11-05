// eslint-disable-next-line no-undef
const dotent = require('dotenv')
dotent.config()
// eslint-disable-next-line no-undef
const port = process.env.PORT
// eslint-disable-next-line no-undef
const mongodbServer = process.env.DATABASE
// eslint-disable-next-line no-undef
module.exports = { port, mongodbServer }
