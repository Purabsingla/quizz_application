const database = require("../DB/Db");

const storeDataRole = async (req, res) => {
  const { title, mode, questions } = req.body;

  // Validation of the incoming data
  if (
    !title ||
    !mode ||
    !Array.isArray(questions) ||
    questions.length === 0 ||
    !questions.every(
      (q) =>
        q.questionText &&
        Array.isArray(q.options) &&
        typeof q.correctAnswer !== "undefined"
    )
  ) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  try {
    let data = await database.database();
    const collection = data.collection("rolebased");

    // Search for the quiz by title in the Data object
    const quizCard = await collection.findOne({ "Data.title": title });

    if (!quizCard) {
      // Create the new Data structure with modes and questions
      const newData = {
        Data: {
          title: title,
          modes: {
            [mode]: {
              questions: questions.map((q) => ({
                questionText: q.questionText,
                options: q.options,
                correctAnswer: q.correctAnswer,
              })),
            },
          },
        },
      };

      const insert = await collection.insertOne(newData);
      insert &&
        res.status(200).json({
          message: "Quiz Data Stored successfully",
        });
    } else {
      console.log("Else works of quizcard ");

      const existingQuestions = quizCard.Data.modes?.[mode]?.questions || []; // Retrieve existing questions for the mode
      const newQuestions = questions.filter(
        (q) =>
          !existingQuestions.some((eq) => eq.questionText === q.questionText)
      ); // Filter out duplicates

      if (newQuestions.length > 0) {
        if (quizCard.Data.modes && quizCard.Data.modes[mode]) {
          // If mode exists, push only the new questions into the existing mode
          const modeKey = `Data.modes.${mode}.questions`;
          const result = await collection.updateOne(
            { "Data.title": title },
            {
              $push: {
                [modeKey]: {
                  $each: newQuestions.map((q) => ({
                    questionText: q.questionText,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                  })),
                },
              },
            }
          );

          res.status(200).json({
            message: "New questions added to existing mode",
            addedQuestions: newQuestions,
            result,
          });
        } else {
          // If mode doesn't exist, create the new mode with the provided questions
          const newMode = {
            [`Data.modes.${mode}`]: {
              questions: newQuestions.map((q) => ({
                questionText: q.questionText,
                options: q.options,
                correctAnswer: q.correctAnswer,
              })),
            },
          };

          const result = await collection.updateOne(
            { "Data.title": title },
            { $set: newMode }
          );

          res.status(200).json({
            message: "New mode created and questions added",
            addedQuestions: newQuestions,
            result,
          });
        }
      } else {
        // No new questions to add
        res.status(200).json({
          message: "All questions already exist. No new questions added.",
        });
      }
    }
  } catch (err) {
    err && console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteQuestionRole = async (req, res) => {
  const { title, mode, questionText } = req.body;

  if (!title || !mode || !questionText) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  try {
    let data = await database.database();
    const collection = data.collection("rolebased");

    const result = await collection.updateOne(
      { "Data.title": title },
      {
        $pull: {
          [`Data.modes.${mode}.questions`]: { questionText: questionText }, // Removes the entire question object
        },
      }
    );

    if (result.modifiedCount > 0) {
      console.log("Deleted Sucessfully");
      res.status(200).json({ message: "Question deleted successfully" });
    } else {
      console.log("Something went wrong");
      res.status(404).json({ error: "Question not found or delete failed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const updateQuestionRole = async (req, res) => {
  const { title, mode, oldQuestionText, updatedQuestion } = req.body;

  if (!title || !mode || !oldQuestionText || !updatedQuestion) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  try {
    let data = await database.database();
    const collection = data.collection("rolebased");

    const result = await collection.updateOne(
      {
        "Data.title": title,
        [`Data.modes.${mode}.questions.questionText`]: oldQuestionText,
      },
      {
        $set: {
          [`Data.modes.${mode}.questions.$`]: {
            questionText: updatedQuestion.questionText,
            options: updatedQuestion.options,
            correctAnswer: updatedQuestion.correctAnswer,
          },
        },
      }
    );

    if (result.modifiedCount > 0) {
      console.log("updated sucessfully ");
      res.status(200).json({ message: "Question updated successfully" });
    } else {
      console.log("Something went wrong");
      res.status(404).json({ error: "Question not found or update failed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { storeDataRole, deleteQuestionRole, updateQuestionRole };
