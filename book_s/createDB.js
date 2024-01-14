var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://127.0.0.1:27017/"
var data = require("./data.js").data

const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("Publications");
        database.dropDatabase()
        database = client.db("Publications");
        const book = database.collection("books");
        const result = await book.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
    await client.close();
    }
}
run()