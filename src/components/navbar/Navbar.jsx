import React, { useEffect, useState } from 'react';
import GoogleKeepdp from './../..//assests/GoogleKeepdp.png';
import MenuBar from './../..//assests/menuBar.png';
import './Navbar.scss';
import SearchIcon from "@material-ui/icons/Search";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import NoteIcon from './../..//assests/NoteIcon.png';
import EditLabel from './../..//assests/Editlabel.png';
import ReminderIcon from './../..//assests/Reminder-Icon.png';
import Archive from './../..//assests/ArchiveIcon.png';
import Edit from './../..//assests/pencil.png';
import Trash from './../..//assests/delete.png';
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushIcon from "@material-ui/icons/Brush";
import logoicon from './../..//assests/pin note.jpg';
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import userServices from '../../Services/userServices';

const style = {
  left: 150,
};

let checkOpen = "open";
const services = new userServices();

function Navbar() {
  const [menuButtonStatus, setMenuButtonStatus] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [myNote, setMyNote] = React.useState([]);
  useEffect(() => {
    getNotes();
  }, [])
  const getArchiveNotes = () => {
    services.GetAllArchiveNotes()
      .then((data) => {
        console.log(data.data.data);
        setMyNote(data.data.data)

      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getTrashNotes = () => {
    services.GetAllTrashNotes()
      .then((data) => {
        console.log(data.data.data);
        setMyNote(data.data.data)

      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getNotes = () => {
    services.GetAllNotes()
      .then((data) => {
        console.log(data.data.data);
        setMyNote(data.data.data)

      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleMenuClick = () => {
    if (menuButtonStatus) {
      setMenuButtonStatus(false);
    }
    else {
      setMenuButtonStatus(true);
    }
  }

  const NotePadOpenClose = () => {
    if (checkOpen === "close") {
      setOpen(true);
      checkOpen = "open";
    }
    else if (checkOpen === "open") {
      setOpen(false);
      checkOpen = "close";
    }
    console.log(checkOpen);
  };
  const displayNotes = () => {
    return (
      <div className="mainDisplayDiv">
      {myNote.map(key => (
      <div className="containBox containerBox1" key={key.noteId}>
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
            </div>
          </div>
        
        <br></br>
      </div>
      ))}
      </div>

    )
  }

  const navIcons = (
    <div className="sideBar">
      <div className="notes">
        <img src={NoteIcon} alt="NoteIcon" />
        <div className="noteContent" onClick={(e)=>getNotes(e)}>
          Notes
            </div>
      </div>
      <div className="notes">
        <img src={ReminderIcon} alt="ReminderIcon" />
        <div className="noteContent">
          Reminders
            </div>
      </div>

      <div className="notes">
        <img src={EditLabel} alt="EditLabel" />
        <div className="noteContent">
          Hello Geeks
            </div>
      </div>
      <div className="notes">
        <img src={Edit} alt="Edit" />
        <div className="noteContent">
          Edit labels
            </div>
      </div>
      <div className="notes">
        <img src={Archive} alt="Archive" />
        <div className="noteContent" onClick={(e)=>getArchiveNotes(e)}>
          Archive
            </div>
      </div>
      <div className="notes">
        <img src={Trash} alt="Trash" />
        <div className="noteContent" onClick={(e)=>getTrashNotes(e)}>
          Trash
            </div>
      </div>
    </div>
  )
  const popBoxOpen = (
    <div className="contain container1">
      <div className="note1">
        <div className="title pd">
          <InputBase
            placeholder="Title..."
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
            <ArchiveOutlinedIcon fontSize="small" />
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
          <Button size="small" style={style} onClick={NotePadOpenClose} >
            Close
              </Button>

        </div>
      </div>
      <br></br>
    </div>
  )

  const titleBoxOpen = (
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


  )
  return (
    <div className="navbar">
      <div className="mainbar">
        <div className="navbar-main-compo">
          <img src={MenuBar} alt="Menubar" className="nav-menubar" onClick={() => handleMenuClick()} />
          <img src={GoogleKeepdp} alt="GoogleKeepdp" className="nav-menubar-keepicon" />
          <div className="headerTitle">
            <span style={{ color: "#0606f8" }}>F</span>
            <span style={{ color: "#d10303" }}>u</span>
            <span style={{ color: "#f0b000" }}>n</span>
            <span style={{ color: "#0606f8" }}>d</span>
            <span style={{ color: "green" }}>o</span>
            <span style={{ color: "#d10303" }}>o</span>
          </div>
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <div className="insideSearch">Search</div>

          </div>
          <IconButton aria-label="open drawer" className="button">
            <ReplayOutlinedIcon />
          </IconButton>

          <IconButton aria-label="open drawer" className="button">
            <DnsRoundedIcon />
          </IconButton>

          <IconButton aria-label="open drawer" className="button">
            <SettingsSharpIcon />
          </IconButton>

          <IconButton aria-label="open drawer" className="button">
            <AppsRoundedIcon />
          </IconButton>

        </div>
      </div>


      {menuButtonStatus ? navIcons : null}
      {open ? popBoxOpen : titleBoxOpen}
      {displayNotes()}




    </div>


  )
}
export default Navbar;