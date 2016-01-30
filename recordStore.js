var Record = require ('./record');

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.bankBalance = 0;
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  listInventory: function(){
    console.log("records in inventory : ")
    for(record of this.inventory){
      console.log(record.artist," - ", record.title);
    }
  },
  // sellRecord: function(recordTitle){
  //   for(record of this.inventory){
  //     if(record.title === recordTitle){
  //       var sale = record.price;
  //       this.inventory
  //     }
  //     this.bankBalance += sale;
  //   }
  //   return this.bankBalance;
  // }
};
var recordStore1 = new RecordStore('Unknown Pleasures', 'Edinburgh');
var record1 = new Record('Tom Jones', 'Praise and Blame', 4.99);
var record2 = new Record('Con Bro Chill', 'We Came to Party', 7.99);
var record3 = new Record('Zoë Keating', 'Into The Trees', 14.99);
recordStore1.addRecord(record1);
recordStore1.addRecord(record2);
recordStore1.addRecord(record3);
console.log(recordStore1.inventory);


module.exports = RecordStore;