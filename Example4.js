//Buffer concatenation
var buffer1 = new Buffer('Sample buffer1');
var buffer2 = new Buffer('Sample buffer2');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3 content:'+buffer3.toString());
