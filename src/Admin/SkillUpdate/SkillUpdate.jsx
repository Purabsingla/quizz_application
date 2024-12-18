import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import "../RoleUpdate/roleLoader.css";
import Dialogg from "../Update/Update";
const columns = [
  { id: "role", label: "Role", minWidth: 200 },
  { id: "mode", label: "Mode", minWidth: 100 },
  {
    id: "Question",
    label: "Question",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Option1",
    label: "Option1",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Option2",
    label: "Option2",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Option3",
    label: "Option3",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Option4",
    label: "Option4",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Answer",
    label: "Answer",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Operation",
    label: "Operation",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const Skill = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "C Programming",
  "C++ Programming",
  "Java Programming",
  "Python Programming",
  "PHP",
  "Kortlin Programming",
  "Flutter Programming",
  ".NET (C#)",
  "React Native",
  "R Language",
];

export default function StickyHeadTable() {
  const [filteredData, setFilteredData] = React.useState([]);
  const [Data, setData] = React.useState([]);
  const [Skills, setSkills] = React.useState("");
  const [Mode, setMode] = React.useState("");
  const [json, setJSON] = React.useState({});

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (row, mode, questionText) => {
    setOpen(true);
    console.log(mode);
    console.log(
      row.modes[mode].questions.filter(
        (ques) => ques.questionText === questionText
      )
    );
    const json = {
      title: row.title,
      mode: mode,
      questionText: row.modes[mode].questions.filter(
        (ques) => ques.questionText === questionText
      ),
      role: "Skill",
    };
    setJSON(json);
    // console.log(row.modes[mode]); title role mode questiontext options correct answer
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateData = async (data) => {
    console.log(data, " From Table Side ");
    await axios
      .post("http://localhost:3001/api/updateQuestion", data)
      .then((response) => {
        if (response.data) {
          setData([]);
          setSkills("");
          setMode("");
          fetchData();
          handleClose();
        }
      })
      .catch((error) => console.error(error));
    handleClose();
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:3001/api/getalldata")
      .then((res) => {
        console.log(res.data);
        console.log(
          res.data.filter((row) => row && row.Data && row.Data.title)
        );
        if (Array.isArray(res.data)) {
          setData(res.data);
          setFilteredData(res.data);
        } else {
          console.error("Unexpected data format:", res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const HandleChange = (event) => {
    setSkills(event.target.value);
    setMode("");
    console.log(
      filteredData.filter((data) => data.Data.title === event.target.value)
    );
    setData(
      filteredData.filter((data) => data.Data.title === event.target.value)
    );
  };

  const HandleMode = (event) => {
    setMode(event.target.value);
    console.log(event.target.value);
    const modesss = event.target.value;
    const filteredDataTemp = filteredData
      .filter(
        (data) =>
          data.Data.title === Skills && // Check if the title matches
          Object.keys(data.Data.modes).includes(event.target.value) // Check if the selected mode exists
      )
      .map((data) => ({
        _id: data._id, // Keep the ID
        Data: {
          title: data.Data.title, // Keep the title
          modes: {
            [modesss]: {
              questions: data.Data.modes[event.target.value].questions,
            },
          }, // Include the selected mode
        },
      }));

    console.log(filteredDataTemp);

    setData(filteredDataTemp);
  };

  const DeleteData = async (row, mode, questionText) => {
    const json = {
      title: row.title,
      mode: mode,
      questionText: row.modes[mode].questions.filter(
        (ques) => ques.questionText === questionText
      )[0].questionText,
    };
    await axios
      .post("http://localhost:3001/api/deleteQuestion", json)
      .then((response) => {
        console.log(response.data);
        setData([]);
        setSkills("");
        setMode("");
        fetchData();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Box
        sx={{
          marginLeft: 32,
          marginTop: 1,
        }}
      >
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Box
            sx={{
              marginTop: 1,
              marginBottom: 1,
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <FormControl sx={{ minWidth: 340 }}>
              <InputLabel id="demo-simple-select-label">Skill</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Role"
                value={Skills}
                onChange={HandleChange}
              >
                {Skill.map((item) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 340 }}>
              <InputLabel id="demo-simple-select-label">Mode</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Mode"
                onChange={HandleMode}
                value={Mode}
              >
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TableContainer
            sx={{ maxHeight: 648, overflowX: "auto", overflowY: "auto" }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Data && Data.length > 0 ? (
                  Data.map((row) => (
                    <React.Fragment key={row._id}>
                      {/* Title Row */}
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell colSpan={columns.length}>
                          <strong>{row.Data.title}</strong>
                        </TableCell>
                      </TableRow>

                      {/* Mode Rows */}
                      {Object.keys(row.Data.modes).map((mode) => (
                        <React.Fragment key={mode}>
                          {/* Mode Header */}
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell colSpan={columns.length}>
                              <em>{mode}</em>
                            </TableCell>
                          </TableRow>

                          {/* Questions */}
                          {row.Data.modes[mode].questions.map(
                            (question, qIndex) => (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={qIndex}
                              >
                                <TableCell>{row.Data.title}</TableCell>
                                <TableCell>{mode}</TableCell>
                                <TableCell>{question.questionText}</TableCell>
                                {question.options.map((option, oIndex) => (
                                  <TableCell key={oIndex}>{option}</TableCell>
                                ))}
                                <TableCell>{question.correctAnswer}</TableCell>
                                <TableCell>
                                  {/* Add actions like Edit/Delete */}
                                  <IconButton
                                    aria-label="edit"
                                    size="small"
                                    onClick={() =>
                                      handleClickOpen(
                                        row.Data,
                                        mode,
                                        question.questionText
                                      )
                                    }
                                  >
                                    <FaRegEdit />
                                  </IconButton>
                                  <IconButton
                                    aria-label="delete"
                                    size="small"
                                    onClick={() => {
                                      DeleteData(
                                        row.Data,
                                        mode,
                                        question.questionText
                                      );
                                    }}
                                  >
                                    <MdDeleteOutline />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  )) /* From Uiverse.io by andrew-demchenk0 */
                ) : (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="cube-loader mb-6">
                      <div className="cube-top"></div>
                      <div className="cube-wrapper">
                        <span style={{ "--i": 0 }} className="cube-span"></span>
                        <span style={{ "--i": 1 }} className="cube-span"></span>
                        <span style={{ "--i": 2 }} className="cube-span"></span>
                        <span style={{ "--i": 3 }} className="cube-span"></span>
                      </div>
                    </div>
                    <h1 className="text-xl font-bold">Loading...</h1>
                  </div>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <React.Fragment>
        {open && (
          <Dialogg
            open={open}
            onClose={handleClose}
            Data={json}
            updateData={updateData}
          />
        )}
      </React.Fragment>
    </>
  );
}
