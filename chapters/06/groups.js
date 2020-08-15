class Group {
  constructor() {
    this.data = [];
  }

  add(element) {
    if (!this.data.includes(element)) {
      this.data.push(element);
    }
  }

  delete(element) {
    let index = this.data.indexOf(element);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  has(element) {
    return this.data.includes(element);
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
};


////////////////////////////////////////////////////////////////////////
// Iterable Groups
////////////////////////////////////////////////////////////////////////

// The lazy way they say not to do:
Group.prototype[Symbol.iterator] = function () {
  return this.data[Symbol.iterator]();
}

// The way they want us to do it:
class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index == this.group.data.length) {
      return { done: true }
    }

    let value = this.group.data[this.index];
    this.index++;
    return { value: value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
}
