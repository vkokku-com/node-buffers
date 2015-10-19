//Buffer comparison
var buffer1 = new Buffer('sample buffer1');
var buffer2 = new Buffer('sample buffer2');
var result = buffer1.compare(buffer2);
if (result > 0) {
    console.log(buffer1 + 'comes before' + buffer2);
} else if (result == 0) {
    console.log('Both are equal');
} else {
    console.log(buffer1 + 'comes after' + buffer2);
}
