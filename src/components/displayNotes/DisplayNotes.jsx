import React from 'react'
import './DisplayNotes.scss';
import InputBase from "@material-ui/core/InputBase";
import logoicon from './../..//assests/pin note.jpg';
import { IconButton } from '@material-ui/core';
import DisplayIcons from "../displayIcons/DisplayIcons"; 
export default function DisplayNotes(props) {
 
  return (
    <div>
      <div className="mainDisplayDiv">
        {props.notes.map(key=>(
          <div className="containBox containerBox1" key={key.noteId} >
            <div className="note2" >
              <div className="title pd">
                <InputBase
                  placeholder="Title..."
                  value={key.title}
                  fullWidth
                  name="title"
                />
                <IconButton>
                  <img className="logoIcon" src={logoicon} alt="ogoicon" size="small" />
                </IconButton>
              </div>
              <div className="note pd">
                <InputBase
                  placeholder="Take a note..."
                  value={key.description}
                  fullWidth
                  name="description"
                />
                <DisplayIcons/>
              </div>
            </div>
            <br></br>
          </div>
          ))}
      </div>
    </div>
  )
}
