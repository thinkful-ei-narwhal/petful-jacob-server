class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null
    this.last = null 
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data, null)

    if (this.first === null) {
      this.first = node
    }
    if (this.last) {
      this.last.next = node
    }
    this.last = node
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next

    if (node === this.last) {
      this.last = null
    }

    return node.value
  }

  dequeuePerson() {
    if (this.first === null) {
      return
    }
    const node = this.last
    // this.first = this.first.next
    if (node === this.last) {
      this.last = null
    }
    return node
  }

  show() {
    // Return the next item in the queue.
    if (!this.first) {
      return null
    }
    return this.first.value
  }

  all() {
    // Return all items in the queue.
    let node = this.first
    let peopleQueue = []
    while (node) {
      peopleQueue.push(node.value)
      node = node.next
    }
    return peopleQueue
  }
}

module.exports = Queue
