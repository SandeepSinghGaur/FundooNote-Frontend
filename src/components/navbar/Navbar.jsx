import React, { useEffect, useState } from 'react';
import GoogleKeepdp from './../..//assests/GoogleKeepdp.png';
import MenuBar from './../..//assests/menuBar.png';
import './Navbar.scss';
import NoteIcon from './../..//assests/NoteIcon.png';
import ReminderIcon from './../..//assests/Reminder-Icon.png';
import EditLabel from './../..//assests/Editlabel.png';
import Edit from './../..//assests/pencil.png';
import Archive from './../..//assests/ArchiveIcon.png';
import Trash from './../..//assests/delete.png';
import SearchIcon from "@material-ui/icons/Search";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import IconButton from "@material-ui/core/IconButton";
import AddNote from "../addNote/AddNote"
import DisplayNote from "../displayNotes/DisplayNotes"
import userServices from '../../Services/userServices';


const services = new userServices();
function Navbar() {
  const [menuButtonStatus, setMenuButtonStatus] = useState(false)
  const [myNote, setMyNote] = React.useState([]);
  useEffect(() => {
    getNotes();
  }, [])
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
  const navIcons = (
    <div className="sideBar">
      <div className="notes">
        <img src={NoteIcon} alt="NoteIcon" />
        <div className="noteContent" >
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
        <div className="noteContent">
          Archive
            </div>
      </div>
      <div className="notes">
        <img src={Trash} alt="Trash" />
        <div className="noteContent" >
          Trash
            </div>
      </div>
    </div>
  )
  return (
    <div className="navbar">
      <div className="mainbar">
        <div className="navbar-main-compo">
          <img src={MenuBar} alt="Menubar" className="nav-menubar"  onClick={() => handleMenuClick()} />
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
     <AddNote notes={myNote}/>
     <DisplayNote notes={myNote}/>
    </div>
  )
  
}
export default Navbar;