var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://127.0.0.1:27017/"
var data = require("./data.js").data

const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("Books");
        database.dropDatabase()
        database = client.db("Books");
        const book = database.collection("lists");
        const result = await book.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
    await client.close();
    }
}
run()