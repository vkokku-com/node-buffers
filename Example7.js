//Buffer slice
var buffer1 = new Buffer('sample buffer1');
var buffer2 = buffer1.slice(5, 10);
console.log(buffer2.toString());
//Buffer length
console.log('buffer1 length:' + ' ' + buffer1.length);
console.log('buffer2 length:' + ' ' + buffer2.length);
