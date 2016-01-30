var Record = require ('./record');
var _ = require ('lodash');
var Customer = require ('./customer');

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
  sellRecord: function(recordTitle, customer){
    for(record of this.inventory){
      if(record.title === recordTitle){
        var sale = record.price;
        var sold = _.remove(this.inventory, {
          title: recordTitle
        });
      }
    }
    customer.inventory.push(sold[0]);
    this.bankBalance += sale;
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



module.exports = RecordStore;