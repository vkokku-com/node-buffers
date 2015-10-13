var buffer = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buffer[i] = i + 97
}
console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii', 0, 5));
console.log(buffer.toString('utf8'));
console.log(buffer.toString(undefined,0,5));
