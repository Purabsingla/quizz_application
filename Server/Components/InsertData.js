// const MongoClient = require("mongodb").MongoClient;
const { response } = require("express");
const database = require("../DB/Db");

const storeData = async (req, res) => {
  const { title, mode, questions } = req.body;

  // Validation of the incoming data
  if (!title || !mode || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  try {
    let data = await database.database();
    const collection = data.collection("quizdata");
    const quizCard = await collection.findOne({ title });

    if (!quizCard) {
      const modes = { [mode]: questions };
      const insert = await collection.insertOne({ title: title, modes: modes });
      console.log(insert);
      insert &&
        response.send({
          status: 200,
          message: "Quiz Data Stored successfully",
        });
    } else {
      console.log("Else works of quizcard ");
      // Update the document with new questions
      if (quizCard.modes && quizCard.modes[mode]) {
        // If mode exists, push new questions into the existing mode
        const modeKey = `modes.${mode}.questions`;
        const result = await collection.updateOne(
          { title },
          { $push: { [modeKey]: { $each: questions } } } // Add new questions to the existing mode
        );

        res
          .status(200)
          .json({ message: "Questions added to existing mode", result });
      } else {
        // If mode doesn't exist, create the new mode with the provided questions
        const newMode = {
          [`modes.${mode}`]: {
            questions: questions,
          },
        };

        const result = await collection.updateOne(
          { title },
          { $set: newMode } // Create a new mode and set its questions
        );

        res
          .status(200)
          .json({ message: "New mode created and questions added", result });
      }
    }
  } catch (err) {
    err && console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getData = async (req, res) => {
  try {
    const { title, mode } = req.body;
    console.log("Loading....");
    console.log("Title is : ", title, " And Mode is ", mode);
    let data = await database.database();
    const collection = data.collection("quizdata");
    const quiz = await collection.findOne({ "Data.title": title });
    console.log(quiz);
    if (quiz && quiz.Data.modes && quiz.Data.modes[mode]) {
      console.log(quiz.Data.modes[mode]);
      res.send({
        status: 200,
        Data: quiz.Data.modes[mode],
      });
    } else {
      res.status(404).json({ error: "Quiz not found" });
    }
  } catch (err) {
    err && res.send({ status: 404, message: err.message });
  }
};

const getAllData = async (req, res) => {
  try {
    let data = await database.database();
    const collection = data.collection("quizdata");
    const quiz = await collection.find().toArray();
    if (quiz) {
      console.log(quiz);
      res.status(200).json(quiz);
    } else {
      res.status(404).json({ error: "Quiz not found" });
    }
  } catch (err) {
    err && res.send({ status: 404, message: err.message });
  }
};
const getAllDataRole = async (req, res) => {
  try {
    let data = await database.database();
    const collection = data.collection("rolebased");
    const quiz = await collection.find().toArray();
    if (quiz) {
      console.log(quiz);
      res.status(200).json(quiz);
    } else {
      res.status(404).json({ error: "Quiz not found" });
    }
  } catch (err) {
    err && res.send({ status: 404, message: err.message });
  }
};

module.exports = { storeData, getData, getAllData, getAllDataRole };
