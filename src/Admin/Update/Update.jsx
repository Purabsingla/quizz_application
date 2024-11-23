import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Dialogg({ open, onClose, Data, updateData }) {
  const [question, setQuestion] = useState(
    Data?.questionText?.[0]?.questionText || ""
  );
  const [options, setOptions] = useState(
    Data?.questionText?.[0]?.options || ["", "", "", ""]
  );
  const [correctOption, setCorrectOption] = useState(
    Data?.questionText?.[0]?.correctAnswer || ""
  );
  const oldQuestion = Data?.questionText?.[0]?.questionText;
  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleCorrectOptionChange = (event) => {
    setCorrectOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = {
      title: Data.title,
      mode: Data.mode,
      oldQuestionText: oldQuestion,
      updatedQuestion: {
        questionText: question,
        options: options,
        correctAnswer: correctOption,
      },
    };
    updateData(form);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        disableScrollLock
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Quiz Update</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            name="Skill / Role"
            label="Skill / Role"
            type="text"
            fullWidth
            variant="standard"
            value={Data.role || "none"}
          />
          <TextField
            disabled
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={Data.title || "none"}
          />
          <TextField
            disabled
            margin="dense"
            name="Mode"
            label="Mode"
            type="text"
            fullWidth
            variant="standard"
            value={Data.mode || "none"}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="Question"
            label="Question"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleQuestion}
            value={question}
          />
          {options.map((option, index) => (
            <TextField
              key={index}
              autoFocus
              required
              margin="dense"
              label={`Option ${index + 1}`}
              type="text"
              fullWidth
              variant="standard"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}
          <TextField
            autoFocus
            required
            margin="dense"
            name="Correct Option"
            label="Correct Option"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleCorrectOptionChange}
            value={correctOption}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
