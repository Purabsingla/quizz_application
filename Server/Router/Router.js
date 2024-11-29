const Express = require("express");
const router = Express.Router();

const {
  storeData,
  getData,
  getAllData,
  getAllDataRole,
  deleteQuestion,
  updateQuestion,
} = require("../Components/InsertData");
const {
  storeDataRole,
  deleteQuestionRole,
  updateQuestionRole,
} = require("../Components/rolebased");

const { FindData } = require("../Components/QuizData");
router.get("/getdata", getData);
router.post("/getdatabytitle", FindData);
router.get("/getalldata", getAllData);
router.get("/getalldatarole", getAllDataRole);

//POST
router.post("/updateQuestion", updateQuestion);
router.post("/updateQuestionRole", updateQuestionRole);
router.post("/setdata", storeData);
router.post("/deleteQuestion", deleteQuestion);
router.post("/setdataRole", storeDataRole);
router.post("/deleteQuestionRole", deleteQuestionRole);
router.get("/show", async (req, res) => {
  res.send({
    message: "Hello from Skill Quiz App",
    version: "1.0.0",
  });
});

module.exports = router;
