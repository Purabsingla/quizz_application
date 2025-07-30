const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/quiz";
const database = async () => {
  const client = new MongoClient(url);
  const dbName = "quiz";
  await client.connect();
  const db = client.db(dbName);
  return db;
};

module.exports = { database };
