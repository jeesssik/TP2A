let data = require('./data');
//console.log(data);


const items = data.split('<');


/* busca flex box video y arma array nuevo*/
console.log("Muestro solo Flexbox video")
var textToSearch = "Flexbox Video";
var filteredArray = items.filter((str)=>{
  return str.toLowerCase().indexOf(textToSearch.toLowerCase()) >= 0; 
});


console.log(filteredArray)

console.log("-------------------------")
/* arma array solo de los tiempos*/
var filter= filteredArray.map((str)=>{
	return(str.slice(str.indexOf('"')+1,str.lastIndexOf('"')));
});


console.log(filter)
console.log(filter[1])