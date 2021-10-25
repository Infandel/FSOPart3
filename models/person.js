const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'should be at least 3 characters long'],
    unique: [true, 'should be unique'],
    uniqueCaseInsensitive: true,
    required: [true, ' is required'],
  },
  number: {
    type: String,
    required: [true, ' is required'],
    validate: {
      validator: function(v) {
        return /\d{8,}/.test(v)
      },
      message: 'should contain 8 digits at least'
    },
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

personSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Person', personSchema)