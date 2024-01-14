var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("Publications");
        database.dropDatabase()
        database = client.db("Publications");
        const book = database.collection("books");
        const result = await book.insertOne({name:"Гордость"});
        console.log(`${result} documents were inserted`);
    } finally {
    await client.close();
    }
}
run()