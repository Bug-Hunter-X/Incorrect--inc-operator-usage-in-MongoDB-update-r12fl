```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Assuming default port and database
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Incorrect update operation
    const result = await collection.updateOne({
      _id: 1
    }, {
      $inc: {
        field: 'value'
      }
    });
    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```