var Record = require ('./record');
var _ = require ('lodash');

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
  }
};



module.exports = RecordStore;