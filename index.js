var arp_table = require('./lib/arp_table.js');

arp_table.fetch(function(err, data){

  console.log(data);
})
