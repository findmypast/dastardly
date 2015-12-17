var should = require('should')

describe('Entry point', () => {
  it("Should load index successfully", () => {
    action = () => require('./src/index')
    action.should.not.throw
  })
})
