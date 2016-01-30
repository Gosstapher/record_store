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
  }
};




module.exports = RecordStore;