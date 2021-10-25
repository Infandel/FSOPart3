const personsRouter = require('express').Router()
const Person = require('../models/person')

personsRouter.get('/info', (request, response, next) => {
  Person.countDocuments({})
  .then(counter => {
    response.send(`
      <a href='/'>Home</a>
      <p>Phonebook has info for ${counter} people<p>
      <p>${new Date}<p>
    `)
  })
  .catch(error => next(error))
})

personsRouter.get('/', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

personsRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id)
  .then(person => {
    if (person) {
    response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
})

personsRouter.post('/', (request, response, next) => {
  const body = request.body
  const person = new Person ({
    name: body.name,
    number: body.number
  })
  person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
})

personsRouter.delete('/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
  .then(() => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

personsRouter.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    content: body.content,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true, runValidators: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

module.exports = personsRouter