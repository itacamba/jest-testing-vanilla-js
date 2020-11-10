const { test, expect } = require("@jest/globals")
const sum = require("./sum")

test("properly adds two numbers", () => {
    expect(
        sum(3,2)
    )
    .toBe(5)
})