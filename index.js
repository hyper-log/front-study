//add module

const { format } = require('date-fns');

var d = new Date();
var formatedD = format(d, 'yyyy-MM-dd');
//포맷 변환
console.log(formatedD); 