const Express = require("express");
const router = Express.Router();

const { storeData, getData } = require("../Components/InsertData");

router.get("/getdata", getData);
router.post("/setdata", storeData);
router.get("/show", async (req, res) => {
  res.send({
    message: "Hello from Skill Quiz App",
    version: "1.0.0",
  });
});

module.exports = router;
