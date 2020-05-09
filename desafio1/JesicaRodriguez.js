let data = require('./data');
let items = data.split('<');
let mapeado = items.filter((str)=>{return str.includes('Flexbox Video'); }).map((str)=>{
    return(str.slice(str.indexOf('"')+1,str.lastIndexOf('"')).split(':'));
});
map2= mapeado.map((val)=>{ 
switch (val.length){     
            case 3:
                return parseInt(val[0]*3600) , (val[1]*60) + parseInt(val[2]);
            case 2:
                 return  parseInt(val[0]*60) +  parseInt(val[1]) ;
            default:
                return parseInt(val[0]) ;
        }
}) 
console.log("\nTotal de segundos: " +map2.reduce((total, current) => total + current, 0));