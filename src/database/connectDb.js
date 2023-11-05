/* eslint-disable no-undef */
const mongoose = require('mongoose')
const { mongodbServer } = require('../config/index')
const connectDb = async () => {
  try {
    await mongoose.connect(mongodbServer)
    console.log('MongoDd Connetc Succesfull')
  } catch (err) {
    console.log('Mongodb Connetion faild', err)
  }
}

module.exports = { connectDb }
