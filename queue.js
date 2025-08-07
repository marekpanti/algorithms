class Queue {
  constructor() {
    this.first = null;
    this.last = 0;
    this.size = 0;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.first = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  enqueue(val) {
    const newItem = new QueueNode(val);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
}

class QueueNode {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}
