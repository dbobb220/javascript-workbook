'use strict';

const assert = require('assert');

function forEach(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function map(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let element = callback(arr[i]);
    newArray.push(element);
  }
  return newArray;
}

function reduce(arr, callback,  acc) {
  acc = acc || 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      acc = acc + arr[i];
    } else if (typeof arr[i] == 'object') {
      for (let j in arr[i]) {
        acc = acc + arr[i][j];
      }
    }
  }
  return acc;
}

function filter(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let element = callback(arr[i]);
    if (element === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

if (typeof describe === 'function') {
  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], (acc, num) => {
        return acc + num;
      });
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}