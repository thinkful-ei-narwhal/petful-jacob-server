const Queue = require('../queue/Queue')
const store = require('../../store')
const { cats, dogs } = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))
// --------------------
module.exports = {
  getCats() {
    // Return the pets next in line to be adopted.
    return pets.cats.show()
  },
  getDogs() {
    return pets.dogs.show()
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type === 'cat') {
      return pets.cats.dequeue()
    }
    else {
      return pets.dogs.dequeue()
    }
  }
}
