## arpjs

### Send ARP packets and read ARP tables using Javascript


#### Features

*  Send ARP packets with complete control.
*  Parse the OS ARP table.
*  ARP Poison a given target.


#### Install

`npm install arpjs`

#### Usage

###### Include arpjs in your code
```javascript
var arp = require('arpjs');
```

###### Send an ARP Request

```javascript
arp.send({
  'op': 'request',
  'src_ip': '10.105.50.100',
  'dst_ip': '10.105.50.1',
  'src_mac': '8f:3f:20:33:54:44',
  'dst_mac': 'ff:ff:ff:ff:ff:ff'
  });
```

###### Read the ARP Table

```javascript
arp.table(function(err, table){
  console.log(table);
});
```

###### Poison ARP Entries on the network
Tells 192.168.2.5 that I am 192.168.2.3, a.k.a. Sends a gratuitous ARP Reply
 to 192.168.2.5 telling that the MAC Address of 192.168.2.3 is its own MAC.
```javascipt
arp.poison('192.168.2.5', '192.168.2.3');
```

#### Available Options
###### Send API
```javascript
  'hw_type': Hardware Type ([0x00, 0x01] -> Ethernet]), // Array
  'proto_type': Protocol Type ([0x08, 0x00] -> IPv4), // Array
  'hw_len': Hardware Length [0x06],// Array
  'proto_len': Protocol Length [0x04], // Array
  'op': Type of ARP Operation [request, reply], // String
  'src_ip': Source IP (192.168.1.2), // String
  'dst_ip': Destination IP (8.2.3.1), // String
  'src_mac': Source MAC (8f:3f:20:33:54:44), // String
  'dst_mac': Destination MAC (02:86:32:1f:2e:7c) // String
```


#### Prerequisite

*  **Libpcap**, used by node-pcap. We use LIBPCAP's send binding for ARP packets.

#### Platforms tested

*  **Mac OSX** - 10.9.2


#### Modules used / Credits
* [node_pcap](https://github.com/mranney/node_pcap)
* [node-ip](https://github.com/indutny/node-ip)
* [getmac](https://www.npmjs.org/package/getmac)
