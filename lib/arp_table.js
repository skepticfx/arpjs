var spawn = require('child_process').spawn;

// Works on Mac.
// TODO: Linux - Ubuntu et al.

function get_arp_table(callback){
  var arp = spawn('arp', ['-a']);
  var arp_str = "";

  arp.stdout.setEncoding('utf8');
  arp.stdout.on('data', function(data){
    arp_str = data;
  });
  arp.on('close', function(x){
    callback(null, parse_arp_table(arp_str));
    //arp.kill();
  });

}

// Parse ARP details from table
// TODO: Validate and format IP and MAC Addresses
function parse_arp_table(arpt){

  var arp_arr = [];
  arpt = arpt.split('\n');
  var x;
  for(x in arpt){
    var entry = arpt[x];
    var arp_obj = {};

    // Get the IP from the "(1.2.3.4)" fromat
    var ip_start = entry.indexOf('(');
    if(ip_start === -1)
      continue;
    var ip_end = entry.indexOf(')');
    var ip = entry.slice(ip_start + 1, ip_end);
    arp_obj['ip'] = ip;

    // Get the Corresponding MAC Addres by splitting 'at'
    var mac = entry.split(' at ')[1];
    mac = mac.split('on')[0].trim();
    arp_obj['mac'] = mac;

    arp_arr.push(arp_obj);
  }

return arp_arr;
}

exports.fetch = get_arp_table;
