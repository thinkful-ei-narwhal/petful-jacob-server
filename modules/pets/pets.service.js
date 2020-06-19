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
  refresh(type) {
    console.log('refresh', type)
    switch(type) {
      case 'cat': 
        store.cats.forEach(cat => pets.cats.enqueue(cat))
        break;
      
      case 'dog': 
        store.dogs.forEach(dog => pets.dogs.enqueue(dog))
        break;
    }
  },
  getCats() {
    // Return the pets next in line to be adopted.
    if(pets.cats.last === null) {
      this.refresh('cat')
    }

    return pets.cats.show()
  },
  getDogs() {
    if(pets.dogs.last === null) {
      this.refresh('dog')
    }
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
