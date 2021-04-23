import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushIcon from "@material-ui/icons/Brush";
import logoicon from './../..//assests/pin note.jpg';
import './AddNote.scss';
import DisplayIcons from "../displayIcons/DisplayIcons"; 
import { Button } from "@material-ui/core";
import userServices from '../../Services/userServices';

var checkOpen = "open";

export default function AddNote(props) {
  const services = new userServices();

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleAddNote = (e) => {
    e.stopPropagation()
    let data = {
      title: title,
      description:description,
    };
   addNote(data);
  };
  const addNote=(data)=>{
    services.AddNotes(data)
    .then((data) => {
      console.log(data);

    })
    .catch((err) => {
      console.log("Error", err);
    });
  }
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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button size="small" className="closeButton" onClick={(e)=>{NotePadOpenClose();handleAddNote(e)}}  >
            Close
              </Button>
            <DisplayIcons/>
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