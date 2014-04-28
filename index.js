var arp_table = require('./lib/arp_table.js');
var arp_packet = require('./lib/packet.js');

exports.send = arp_packet.send;
exports.table = arp_table.fetch;
