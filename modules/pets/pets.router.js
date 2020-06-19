const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/cats', (req, res) => {
  // Return all pets currently up for adoption.
  const cat = Pets.getCats()
  res.status(200).json(cat)
})
router.get('/dogs', (req, res) => {
  // Return all pets currently up for adoption.
  const dog = Pets.getDogs()
  res.status(200).json(dog)
})

router.delete('/:type', json, (req, res) => {
  // Remove a pet from adoption.
  const type = req.params.type
  const toDequeue = Pets.dequeue(type)
  res.status(201).json(toDequeue)
})

module.exports = router
