const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://restudent-project:EzSoW6ZnIQxLe5l8@datafind.xfgov3s.mongodb.net/?retryWrites=true&w=majority&appName=datafind";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const reviewCollection = client.db("restudent-project").collection("clientReview");
    const productCollection = client.db("restudent-project").collection("product-item");
    app.get("/review", async(req, res)=>{
        try{
            const result = await reviewCollection.find().toArray();
            res.send(result)
        }
        catch{

        }
    })

    app.get("/product" , async(req, res)=>{
        try{
            const result = await productCollection.find().toArray();
            res.send(result);
        }
        catch{

        }
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(5000, ()=>{
    console.log("route is running")
})



//restudent-project
//EzSoW6ZnIQxLe5l8