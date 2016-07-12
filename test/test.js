// test/test.js
var assert = require("assert")
describe('Array', function() {
    describe('#indexOf(0)', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    })
})

var 
    assert = require('assert'),
    request = require("request"),
    http = require('http');
var port = 3000;

describe('server', function() {
    describe('Server status and Message', function() {
        it('status response should be equal 200', function(done) {
            request.get('http://localhost:' + port, function(err, response, body) {
                assert.equal(response.body, 'Hello World \n');    
                assert.equal(response.statusCode, 200);
                done();
            });
        });
    });
});
