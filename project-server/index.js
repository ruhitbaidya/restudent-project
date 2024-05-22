const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://restudent-project:EzSoW6ZnIQxLe5l8@datafind.xfgov3s.mongodb.net/?retryWrites=true&w=majority&appName=datafind";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const reviewCollection = client.db("restudent-project").collection("clientReview");
    const productCollection = client.db("restudent-project").collection("product-item");
    const productaddcard = client.db("restudent-project").collection("card_add_product");
    const userInfos = client.db("restudent-project").collection("userInfos");
    app.get("/review", async (req, res) => {
      try {
        const result = await reviewCollection.find().toArray();
        res.send(result);
      } catch {}
    });

    app.get("/product", async (req, res) => {
      try {
        const result = await productCollection.find().toArray();
        res.send(result);
      } catch {}
    });
    app.post("/userGet", async(req, res)=>{
      console.log(req.body)
      const users = req.body;
      const match = {email : req.body.email};
      const isaxist = await userInfos.findOne(match)
      if(isaxist){
        res.send({success : false, message : "user Already exist"})
      }
      const result = await userInfos.insertOne(users);
      res.send(result)
    })
    app.post("/cards", async (req, res) => {
      const datas = req.body;
      const ids = { _id: new ObjectId(req.body._id) };
      const isExist = await productCollection.findOne(ids);
      if (isExist) {
        return res.send({
          success: false,
          message: "This product already exist in your card",
        });
      } else {
        const result = await productaddcard.insertOne(datas);
        res.send(result);
      }
    });

    app.post("/deleteCardItem/:id", async (req, res) => {
      const ids = { _id: new ObjectId(req.params.id) };
      const isExists = await productaddcard.findOne(ids);
      console.log(isExists);
    });

    app.get("/cards", async (req, res) => {
      const result = await productaddcard.find().toArray();
      res.send(result);
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(5000, () => {
  console.log("route is running");
});

//restudent-project
//EzSoW6ZnIQxLe5l8
