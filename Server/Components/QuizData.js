const database = require("../DB/Db");

const FindData = async (req, res) => {
  const { title, mode } = req.body;

  try {
    // Validate input
    if (!title || !mode) {
      return res.status(400).json({ error: "Title and mode are required" });
    }

    const data = await database.database();
    const collection = data.collection("quizdata");
    const collection2 = data.collection("rolebased");

    // Find in the first collection
    const quiz = await collection.findOne(
      { "Data.title": title }, // Match the document with the title
      { [`Data.modes.${mode}`]: 1, _id: 0 } // Include only the specific mode
    );

    // If not found in the first collection, search in the second collection
    const quiz2 = !quiz
      ? await collection2.findOne(
          { "Data.title": title, [`Data.modes.${mode}`]: { $exists: true } }, // Match title and ensure mode exists
          { [`Data.modes.${mode}`]: 1, _id: 0 } // Include only the specific mode
        )
      : null;

    console.log(quiz2);

    // Respond with the found data or return 404 if not found
    if (quiz) {
      res.status(200).json(quiz);
    } else if (quiz2) {
      res.status(200).json(quiz2);
    } else {
      res.status(404).json({ error: "Quiz not found" });
    }
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { FindData };
