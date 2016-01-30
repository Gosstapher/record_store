var Record = require ('./record');
var _ = require ('lodash');

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.bankBalance = 0;
  this.inventoryValue = 0;
  this.currentValue = 0;
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
  sellRecord: function(recordTitle){
    for(record of this.inventory){
      if(record.title === recordTitle){
        var sale = record.price;
        _.remove(this.inventory, {
          title: recordTitle
        });
      }
    }
    this.bankBalance += sale;
    return this.bankBalance;
  },
  calculateInventoryValue: function(){
    var stockValue = 0;
    for(record of this.inventory){
      stockValue += record.price
    }
    this.inventoryValue = stockValue
  },
  calculateCurrentValue: function(){
    var value = 0;
    value += this.bankBalance;
    value += this.inventoryValue;
    this.currentValue = value;
  },
  displayValue: function(){
    this.calculateInventoryValue();
    this.calculateCurrentValue();
    console.log("The current bank balance is : " + this.bankBalance);
    console.log("The current value of the records in stock is : " + this.inventoryValue);
    console.log("Thhe total store value is : " + this.currentValue);
  }
};

// var recordStore1 = new RecordStore('Unknown Pleasures', 'Edinburgh');
// var record1 = new Record('Tom Jones', 'Praise and Blame', 4.99);
// var record2 = new Record('Con Bro Chill', 'We Came to Party', 7.99);
// var record3 = new Record('Zoë Keating', 'Into The Trees', 14.99);
// recordStore1.addRecord(record1);
// recordStore1.addRecord(record2);
// recordStore1.addRecord(record3);
// recordStore1.sellRecord("Praise and Blame");
// recordStore1.displayValue();

module.exports = RecordStore;