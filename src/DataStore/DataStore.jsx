import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function DataStore() {
  const [Type, setType] = useState("");
  const [question, setQuention] = useState("");
  const [Options, setOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [CorrectOption, setCorrectOption] = useState(0);
  const [mode, setMode] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChange2 = (event) => {
    setCorrectOption(event.target.value);
  };
  const handleChange3 = (event) => {
    setMode(event.target.value);
  };

  const handleOption = (event) => {
    setOptions({ ...Options, [event.target.name]: event.target.value });
  };

  const HandleClick = () => {
    // const form = {
    //   title: Type,
    //   modes: {
    //     [mode]: {
    //       questions: [
    //         {
    //           questionText: question,
    //           options: Options,
    //           correctAnswer: CorrectOption,
    //         },
    //       ],
    //     },
    //   },
    // };
    const form = {
      title: Type,
      mode: mode,
      questions: {
        questionText: question,
        options: Options,
        correctAnswer: CorrectOption,
      },
    };
    console.log(form);
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-6xl font-extrabold font-Cabin">Quiz Data</h1>
      </div>
      <Box
        sx={{
          minWidth: 230,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          flexDirection: "column",
        }}
      >
        <FormControl sx={{ width: 200, marginBottom: 5 }}>
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Type}
            label="Title"
            onChange={handleChange}
          >
            <MenuItem value={"HTML"}>HTML</MenuItem>
            <MenuItem value={"CSS"}>CSS</MenuItem>
            <MenuItem value={"JS"}>JAVASCRIPT</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200, marginBottom: 5 }}>
          <InputLabel id="demo-simple-select-label">MOde</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            label="Mode"
            onChange={handleChange3}
          >
            <MenuItem value={"Easy"}>Easy</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Hard"}>Hard</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Enter Question"
          variant="outlined"
          name="Question"
          value={question}
          sx={{ marginBottom: 5, width: 800 }}
          onChange={(e) => setQuention(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: 5,
            marginLeft: 30,
          }}
        >
          <Box>
            <TextField
              id="outlined-basic"
              label="Option 1"
              variant="outlined"
              name="option1"
              sx={{ marginBottom: 5, width: 400 }}
              onChange={handleOption}
            />
            <TextField
              id="outlined-basic"
              label="Option 3"
              variant="outlined"
              name="option3"
              sx={{ marginBottom: 5, width: 400 }}
              onChange={handleOption}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="Option 2"
              variant="outlined"
              name="option2"
              sx={{ marginBottom: 5, width: 400 }}
              onChange={handleOption}
            />
            <TextField
              id="outlined-basic"
              label="Option 4"
              variant="outlined"
              name="option4"
              sx={{ marginBottom: 5, width: 400 }}
              onChange={handleOption}
            />
          </Box>
        </Box>
        <FormControl sx={{ width: 300, marginBottom: 5 }}>
          <InputLabel id="demo-simple-select-label">Correct Option</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={CorrectOption}
            label="Correct Option"
            onChange={handleChange2}
          >
            <MenuItem value={1}>first</MenuItem>
            <MenuItem value={2}>Sencond</MenuItem>
            <MenuItem value={3}>Third</MenuItem>
            <MenuItem value={4}>Fourth</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={HandleClick}>
          Save
        </Button>
      </Box>
    </>
  );
}
