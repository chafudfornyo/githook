var expect = require('chai').expect;
var index = require('../index.js');

describe('Testando a aplicação', function(){
    it('Igualdade entre objetos', function(){
        expect(true).to.be.equal(index.isEqual(2,2));
    });
});