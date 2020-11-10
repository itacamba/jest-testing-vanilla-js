const { clone } = require('@babel/types')
const { test, expect } = require('@jest/globals')
const { not } = require('expect')
const cloneArray = require('./cloneArray')

test("Properly clones array", () => {
    const arr = [1,2,3,4,5]
    expect(cloneArray(arr)).not.toBe(arr)
    expect(cloneArray(arr)).toEqual(arr)
    // toBe fails because arr does not occupy the same space in memory when its cloned.
    // toEqual checks if both have the same structure

})