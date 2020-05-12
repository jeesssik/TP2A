const mongoclient = require('mongodb').MongoClient;
const chalk = require('chalk');

const uri = "mongodb+srv://jeesssik:asdzxc@cluster0-k7it0.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoclient(uri, {useNewUrlParser:true, useUnifiedTopology:true});





/****************READ************* */
function mostrarValor() {
        return new Promise((resolve,reject)=>{
                client.connect()
                .then(function (AEjecutar) {
                        let collection = AEjecutar.db("sample_mflix").collection("users");
                        collection.find({name: "Ned Stark"}).limit(1).toArray() //muestra a Ned Stark
                        .then((AEjecutar)=>{
                                console.log(AEjecutar);
                        }).catch((error)=>{
                                reject(error);
                        }) 
                })
        })
        
}

async function mostrarCampo() {
        const valor=await mostrarValor();

        client.close();
}
        

/**************** CREATTE ***************** */


function agrega() {
        return new Promise((resolve,reject)=>{
                client.connect()
                .then(function(AEjecutar){
                        let collection = AEjecutar.db("sample_mflix").collection("users");
                        let personaje={
                                _id:"a2233bb44ccdd344eeff",
                                name:"Jesica",
                                email: "Jeesssiii@gmail.com",
                                password: "ASDFGHH"
                        }
                
                        collection.insertOne(personaje).then((AEjecutar)=>{
                                console.log(chalk.magenta("User agregado"));
                        }).catch((error)=>{
                                console.log(chalk.red(error));
                        }) 
                })
        })
        
}

async function agregaDatos() {
        const valor=await agrega();

        client.close();
}
        
/********************Mostrar Creado******************** */


function mostrarCreado() {
        return new Promise((resolve,reject)=>{
                client.connect()
                .then(function (AEjecutar) {
                        let collection = AEjecutar.db("sample_mflix").collection("users");
                        collection.find({name: "Jesica"}).limit(1).toArray() //muestra a Ned Stark
                        .then((AEjecutar)=>{
                                console.log(AEjecutar);
                        }).catch((error)=>{
                                reject(error);
                        }) 
                })
        })
        
}



async function mostrarCread() {
        const valor=await mostrarCreado();

        client.close();
}


/********************Modificar*********************** */


function modificar() {
        return new Promise((resolve,reject)=>{
                client.connect()
                .then(function(AEjecutar){
                        let collection = AEjecutar.db("sample_mflix").collection("users");
                        collection.updateOne( {name:"Jesica"},{$set:{password:"SoyunpasswordSEGURO"}} )
                        .then((AEjecutar)=>{
                                console.log(chalk.green("usuario modificado"));
                        }).catch((error)=>{
                                console.log(chalk.red(error));
                        }) 
                })
        })
        
}



async function modify() {
        const valor=await modificar();

        client.close();
}




/*****************************DELETE***************** */



function borrar() {
        return new Promise((resolve,reject)=>{
                client.connect()
                .then(function(AEjecutar){
                        let collection = AEjecutar.db("sample_mflix").collection("users");
                        collection.deleteOne( {name:"Jesica"} )
                        .then((AEjecutar)=>{
                                console.log(chalk.yellow("usuario ELIMINADO"));
                        }).catch((error)=>{
                                console.log(chalk.red(error));
                        }) 
                })
        })
        
}



async function deletee() {
        const valor=await borrar();

        client.close();
}







//mostrarCampo();
//agregaDatos();
//mostrarCread();
//modify();
//mostrarCread();
deletee();