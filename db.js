import mongoose from 'mongoose'


 
mongoose.connect(mongodbURL);


const db=mongoose.connection;

db.on('error',()=>{
  console.log("mongodb not connected ");
})

 db.on('connected',()=>{
   console.log('mongodb connected');
 })

export default db;
