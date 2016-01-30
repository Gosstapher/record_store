var Record = require ('./record');

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
}

module.exports = RecordStore;