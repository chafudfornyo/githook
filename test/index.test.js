var expect = require('chai').expect;
var index = require('../index.js');


describe('Testando a aplicação', function(){
    it('Primeiro teste', function(){
        expect(true).to.be.equal(index != null);
    });
});