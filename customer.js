var _ = require ('lodash');

var Customer = function(name){
  this.name = name;
  this.inventory = [];
}

Customer.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  listInventory: function(){
    console.log("records in inventory : ")
    for(record of this.inventory){
      console.log(record.artist," - ", record.title);
    }
  },
}


module.exports = Customer;