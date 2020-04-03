let data = require('./data');
//console.log(data);


const items = data.split('<');
/* busca flex box video y arma array nuevo*/

var filteredArray = items.filter((str)=>{return str.includes('Flexbox Video'); }).map((str)=>{return(str.slice(str.indexOf('"')+1,str.lastIndexOf('"')).split(':'));});

console.log(filteredArray);


