var Multiple = require('../src/B.js')

var assert = require('chai').assert


describe('Multiple乘法测试',function() {
	it ('1 * 1 = 1 ',function(){
		assert.equal(Multiple(1,1),1)
	})

	it ('2 * 0 = 0',function(){
		assert.equal(Multiple(2,0),0)
	})

	it ('100 * 10 = 1000',function(){
		assert.equal(Multiple(100,10),1000)
	})
})