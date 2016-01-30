var assert = require ('assert');
var Record = require ('./record');

describe('Record', function(){
  it('should be possible to create a record with an artist', function(){
    var record1 = new Record('Tom Jones', 'Praise and Blame', 4.99);
    assert.equal('Tom Jones', record1.artist)
  });
  it('should be possible to create a record with an title', function(){
    var record1 = new Record('Tom Jones', 'Praise and Blame', 4.99);
    assert.equal('Praise and Blame', record1.title)
  });
  it('should be possible to create a record with an price', function(){
    var record1 = new Record('Tom Jones', 'Praise and Blame', 4.99);
    assert.equal(4.99, record1.price)
  });
});