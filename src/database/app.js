/* eslint-disable no-undef */
const express = require('express')
// const cors    = require("cors");
const app = express()
app.use(express.json())
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
  })
})

module.exports = app
