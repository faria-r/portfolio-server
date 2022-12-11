const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
  

// setting up middlewares
app.use(cors());
app.use(express.json());
//common index api

app.get('/',(req,res)=>{
    res.send(' server is Currently Active')
})

//connecting mongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wxeycza.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//creating a async function
async function run(){
try{
  //data collections
  const projectCollection = client.db('portfolio').collection('projects');
  

  

app.get('/details/:id',async(req,res)=>{
  const id = req.params.id;
  const query = {id:id};
  const cursor = projectCollection.find(query);
  const project = await cursor.toArray();
  res.send(project)
});




}
finally{
    
}
}
run().catch(e=> console.error(e))



app.listen(port,()=> console.log('server is running on port:',port))