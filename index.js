var arp_table = require('./lib/arp_table.js');
var arp_packet = require('./lib/packet.js');

exports.send = arp_packet.send;
exports.setInterface = arp_packet.setInterface;
exports.table = arp_table.fetch;

// Sends a Gratiutious ARP packet poisoning the given IP
exports.poison = function(ip1, ip2){
  arp_packet.send({
    'op': 'reply',
    'src_ip': ip2,
    'dst_ip': ip1,
    'dst_mac': 'ff:ff:ff:ff:ff:ff'
  });
}
