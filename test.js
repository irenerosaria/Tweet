var assert = require('assert');
var ex = require('./index');
describe('testiamo il compito', function() {

	it('testiamo getPackage', function(){
		ex.reset();
		assert.equal(ex.getPackage().length, 0);
    })


	it("testiamo l'aggiunta di tweets e la funzione di eliminazione",function(){
        ex.reset();
        ex.addTweet("Pippo", "In morfologia la parola è definita come un elemento linguistico costituito da un morfema libero",Date());
        assert.equal(ex.getTweet().length, 1);
        assert.equal(ex.getTweet()[0].id, 0);
        ex.addUser("Sempronio", "Il suono trasmesso, pertanto, può essere oggetto di elaborazione acustica",Date());
        assert.equal(ex.getTweet().length, 2);
        assert.equal(ex.getTweet()[1].id, 1);
        ex.deleteById(0);
        ex.addUser("Caligola", "Elemento basilare della comunicazione verbale",Date());
        assert.equal(ex.getTweet().length, 2);
        assert.equal(ex.getTweet()[1].id, 2);

    } )

	it("testiamo il findTweetByWord  e findTeewtByAuthor",function(){
 		ex.reset();
        ex.addTweet("Pippo", "In morfologia la parola è definita come un elemento linguistico costituito da un morfema libero",Date());
        ex.addUser("Sempronio", "Il suono trasmesso, pertanto, può essere oggetto di elaborazione acustica",Date());
		ex.addUser("Pippo", "Il suono trasmesso, pertanto, può essere oggetto di elaborazione acustica",Date());
		var search=ex.findTeewtByAuthor("Pippo");
		assert(search.length,2);
		assert(search[0].author, "Pippo");
        assert(search[1].author, "Pippo");
        var user={
        	author: "Sempronio",
        	comment: "Il suono trasmesso, pertanto, può essere oggetto di elaborazione acustica",
        	date:Date(),
        	id: 1
        }
        assert.deepEqual(ex.findUserById(1), user);
})

})
