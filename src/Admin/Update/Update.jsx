import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Dialogg({ open, onClose, Data }) {
  console.log(Data);
  const [question, setQuestion] = useState(
    Data?.questionText?.[0]?.questionText || ""
  );
  // const [Options, setOptions] = useState([]);
  // const [CorrectOption, setCorrectOption] = useState('');
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        disableScrollLock
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const form = {
              title: Data.title,
              mode: Data.mode,
              questions: [
                {
                  questionText: question,
                  //   options: Options,
                  //   correctAnswer: Options[CorrectOption],
                },
              ],
            };
            console.log(form);
          },
        }}
      >
        <DialogTitle>Quiz Update</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="name"
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
            id="name"
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
            id="name"
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
            id="name"
            name="Question"
            label="Question"
            type="text"
            fullWidth
            variant="standard"
            value={Data.questionText[0].questionText}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Option 1"
            label="Option 1"
            type="text"
            fullWidth
            variant="standard"
            value={Data.questionText[0].options[0]}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Option 2"
            label="Option 2"
            type="text"
            fullWidth
            variant="standard"
            value={Data.questionText[0].options[1]}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Option 3"
            label="Option 3"
            type="text"
            fullWidth
            variant="standard"
            value={Data.questionText[0].options[2]}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Option 4"
            label="Option 4"
            type="text"
            fullWidth
            variant="standard"
            value={Data.questionText[0].options[3]}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Correct Option"
            label="Correct Option"
            type="text"
            fullWidth
            variant="standard"
            value={Data.questionText[0].correctAnswer}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
