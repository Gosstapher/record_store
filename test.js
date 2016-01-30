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
  it('should be possible to create multiple records', function(){
    var record1 = new Record('Tom Jones', 'Praise and Blame', 4.99);
    var record2 = new Record('Con Bro Chill', 'We Came to Party', 7.99);
    var record3 = new Record('Zoë Keating', 'Into The Trees', 14.99);
    assert.equal('Tom Jones', record1.artist);
    assert.equal('Con Bro Chill', record2.artist);
    assert.equal('Zoë Keating', record3.artist);
    });
});












