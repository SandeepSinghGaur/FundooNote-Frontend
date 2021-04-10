import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushIcon from "@material-ui/icons/Brush";
import logoicon from './../..//assests/pin note.jpg';
import './AddNote.scss';
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

var checkOpen = "open";

export default function AddNote() {

  const [open, setOpen] = React.useState(false);
  const NotePadOpenClose = () => {
    if (checkOpen === "close") {
      setOpen(true);
      checkOpen = "open";
    } else if (checkOpen === "open") {
      setOpen(false);
      checkOpen = "close";
    }
    console.log(checkOpen);
  };

  return (
    <div className="notesone">
      {open ? (
        <div className="contain container1">
          <div className="note1">
            <div className="title pd">
              <InputBase
                placeholder="Title..."
                fullWidth
                name="title"
              />
              <IconButton>
                <img className="logoIcon" src={logoicon} alt="logoicon" size="small" />
              </IconButton>
            </div>
            <div className="note pd">
              <InputBase
                placeholder="Take a note..."
                fullWidth
                name="description"
              />
              <IconButton aria-label="Remind me" edge="start">
        <AddAlertOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Collaborator">
        <PersonAddOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Change color" >
        <ColorLensOutlinedIcon fontSize="small" />
      </IconButton>
          <IconButton>
            <ImageOutlinedIcon />
          </IconButton>
          <IconButton aria-label="Archive note">
        <ArchiveOutlinedIcon fontSize="small"  />
      </IconButton>
      <IconButton aria-label="More">
        <MoreVertOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="UndoIcon">
        <UndoIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="RedoIcon">
        <RedoIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="More">
        <MoreVertOutlinedIcon fontSize="small" />
      </IconButton>
            </div>
          </div>
          <br></br>
        </div>
      ) : (
        <div className="contain container">
          <div className="note">
            <InputBase
              placeholder="Take a note..."
              fullWidth
              onClick={NotePadOpenClose}
            />
          </div>
          <IconButton>
            <CheckBoxOutlinedIcon />
          </IconButton>
          <IconButton>
            <BrushIcon />
          </IconButton>
          <IconButton>
            <ImageOutlinedIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
}