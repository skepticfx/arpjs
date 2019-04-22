// Use require('arpjs') if youre running this example elsewhere.
var arp = require('../')
// arp.setInterface('en0');
arp.send({
  'op': 'request',
  'src_ip': '10.105.50.100',
  'dst_ip': '10.105.50.1',
  'src_mac': '8f:3f:20:33:54:44',
  'dst_mac': 'ff:ff:ff:ff:ff:11'
})
