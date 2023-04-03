//add module

const { format } = require('date-fns');

var d = new Date();
var formatedD = format(d, 'yyyy-MM-dd');
console.log(formatedD); 