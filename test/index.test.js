var expect = require('chai').expect;
var index = require('../index.js');

describe('Testando a aplicação', function(){
    it('Teste de Igualdade entre objetos com sucesso.', function(){
        expect(true).to.be.equal(index.isEqual(2,2));
    });
    it('Teste de Igualdade entre objetos com falha', function(){
        expect(false).to.be.equal(index.isEqual(2,3));
    });
    it('teste commit',function(){
        
    });
});