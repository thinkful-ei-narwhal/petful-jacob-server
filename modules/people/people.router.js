const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const person = People.get()
  res.status(200).json(person)
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const person = req.body.name
  console.log('body', req.body.name)
  People.enqueue(person)
  res.status(201).json(person)
})

router.delete('/', json, (req, res) => {
  const toDequeue = People.dequeue()
  res.status(204)
})

module.exports = router
