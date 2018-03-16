var suma = 0;
var l = (process.argv).length;
for (var i=2; i< l; i++) {
  var x = Number(process.argv[i])
  suma += x;
}
console.log(suma);