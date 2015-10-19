//Buffer copy
var buffer1 = new Buffer('buffer1 content');
var buffer2 = new Buffer(16);
buffer1.copy(buffer2);
console.log(buffer2.toString());