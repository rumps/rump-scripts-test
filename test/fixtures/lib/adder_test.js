require('should')
var adder = require('./adder')

describe('adder', function() {
  it('should be a function', function() {
    adder.should.be.a.Function()
  })

  it('returns a function', function() {
    var add3 = adder(3)
    add3.should.be.a.Function()
    add3(3).should.equal(6)
    add3(-4).should.equal(-1)
  })
})
