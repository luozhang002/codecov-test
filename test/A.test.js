var sum = require('../src/A.js')

var assert = require('chai').assert


describe('add加法测试',function() {
	it ('1 + 1 = 2 ',function(){
		assert.equal(sum(1,1),2)
	})

	it ('2 + 0 = 2',function(){
		assert.equal(sum(2,0),2)
	})
})