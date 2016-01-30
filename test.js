var assert = require ('assert');
var Record = require ('./record');
var RecordStore = require ('./recordStore');

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

describe('Record Store', function(){
  it('should possible to create a Record Store with name', function(){
    var recordStore1 = new RecordStore('Unknown Pleasures', 'Edinburgh');
    assert.equal('Unknown Pleasures', recordStore1.name);
  });
  it('should possible to create a Record Store with city', function(){
    var recordStore1 = new RecordStore('Unknown Pleasures', 'Edinburgh');
    assert.equal('Edinburgh', recordStore1.city);
  });
  it('should possible to create a Record Store with an inventory', function(){
    var recordStore1 = new RecordStore('Unknown Pleasures', 'Edinburgh');
    assert.deepEqual([], recordStore1.inventory);
  });
  it('should possible to create a Record Store with a bank balance', function(){
    var recordStore1 = new RecordStore('Unknown Pleasures', 'Edinburgh');
    assert.equal(0, recordStore1.bankBalance);
  });
});












