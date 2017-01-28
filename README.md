## arpjs

### Send ARP packets and read ARP tables using Javascript

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

#### Features

*  Send ARP packets with complete control.
*  Parse the OS ARP table.
*  ARP Poison a given target.


#### Install

`npm install arpjs`

#### Usage

###### Include arpjs in your code
```javascript
var arp = require('arpjs')
```

###### Send an ARP Request

```javascript
arp.send({
  'op': 'request',
  'src_ip': '10.105.50.100',
  'dst_ip': '10.105.50.1',
  'src_mac': '8f:3f:20:33:54:44',
  'dst_mac': 'ff:ff:ff:ff:ff:ff'
  })
```

###### Selecting a network interface

By default, arpjs selects one of the active network interfaces to send the packet.
If you want to select a particular interface, use the `setInterface` method.

```javascript
arp.setInterface('wlan0')
arp.send(packet)
```

###### Read the ARP Table

```javascript
arp.table(function(err, table){
  console.log(table)
})
```

###### Poison ARP Entries on the network
Tells 192.168.2.5 that I am 192.168.2.3, a.k.a. Sends a gratuitous ARP Reply
 to 192.168.2.5 telling that the MAC Address of 192.168.2.3 is its own MAC.
```javascript
arp.poison('192.168.2.5', '192.168.2.3')
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

#### Debug

    $ sudo DEBUG=arpjs:* node example.js

#### Prerequisite

*  **Libpcap**, used by node-pcap. We use LIBPCAP's send binding for ARP packets.

#### Platforms tested (Works on platforms with libpcap installed)

*  **Mac OSX** - 10.9.2
*  **Ubuntu** - 12.04

#### Modules used / Credits
* [node_pcap](https://github.com/mranney/node_pcap)
* [node-ip](https://github.com/indutny/node-ip)
* [getmac](https://www.npmjs.org/package/getmac)
* [debug](https://www.npmjs.org/package/debug)

#### License

The MIT License (MIT)

Copyright (c) 2014 Ahamed Nafeez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
