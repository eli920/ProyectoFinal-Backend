const mongoose= require('mongoose');
require('dotenv').config();

const DATABASE= process.env.DATABASE_URL || "";

const connectionDB= async ()=>{
    try{
        await mongoose.connect(DATABASE);
        console.log('Base de datos conectada con éxito')
    }catch(error){
        console.log(error);
    }
}
connectionDB();