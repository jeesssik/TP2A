let data = require('./data');
//console.log(data);


const items = data.split('<');
/* busca flex box video y arma array nuevo*/
//console.log("\nMuestro solo Flexbox video\n");
var filteredArray = items.filter((str)=>{return str.includes('Flexbox Video'); });

//console.log(filteredArray);

console.log("\nsolo de los tiempos de Flexbox video\n");
var mapeado= filteredArray.map((str)=>{
	return(str.slice(str.indexOf('"')+1,str.lastIndexOf('"')).split(':'));

});







console.log(mapeado)
