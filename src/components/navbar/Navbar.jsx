import React, { useState } from 'react';
import GoogleKeepdp from './../..//assests/GoogleKeepdp.png';
import MenuBar from './../..//assests/menuBar.png';
import './Navbar.scss';
import SearchIcon from "@material-ui/icons/Search";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import IconButton from "@material-ui/core/IconButton";
import NoteIcon from './../..//assests/NoteIcon.png';
import EditLabel from './../..//assests/Editlabel.png';
import ReminderIcon from './../..//assests/Reminder-Icon.png';
import Archive from './../..//assests/ArchiveIcon.png';
import Edit from './../..//assests/pencil.png';
import Trash from './../..//assests/delete.png';
import TextField from '@material-ui/core/TextField';
import Pin from './../..//assests/pin note.jpg';
import collaborator from './../..//assests/contact.png';
import alarm from './../..//assests/bell-ring-alarm.png';
import color from './../..//assests/color-palette.png';
import imageIcon from './../..//assests/imageIcon.png';
import folder from './../..//assests/folder2.png';
import more from './../..//assests/more.png';
import undo from './../..//assests/undo.png';
import redo from './../..//assests/redo.png';


function Navbar() {
    const [menuButtonStatus, setMenuButtonStatus] = useState(false)
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
                <div className="noteContent">
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
                <div className="noteContent">
                    Trash
            </div>
            </div>
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
                    {/* <div className="buttonContainer">
                        <div className="button">
                            <IconButton aria-label="open drawer" className="button">
                                <ReplayOutlinedIcon />
                            </IconButton>
                        </div>
                    </div> */}
                    <IconButton aria-label="open drawer" className="button">
                            <DnsRoundedIcon />
                        </IconButton>
                    {/* <div className="button">
                        <IconButton aria-label="open drawer">
                            <DnsRoundedIcon />
                        </IconButton>
                    </div> */}
                    <IconButton aria-label="open drawer" className="button">
                            <SettingsSharpIcon />
                        </IconButton>
                    {/* <div className="button">
                        <IconButton aria-label="open drawer">
                            <SettingsSharpIcon />
                        </IconButton>
                    </div> */}
                    {/* <div className="button">
                            <IconButton aria-label="open drawer">
                                <AppsRoundedIcon />
                            </IconButton>
                        </div> */}
                         <IconButton aria-label="open drawer" className="button">
                                <AppsRoundedIcon />
                            </IconButton>
                    {/* <div className="appsContainer">
                        
                    </div> */}
                </div>
            </div>

            {menuButtonStatus ? navIcons : null}
            <div className="infoContent">
                <div className="infoBox">
                    <img className="pinImage" src={Pin} alt="Pin" />
                    <div className="createnote-title">
                        <TextField id="titleNote" label="Title" InputLabelProps={{ style: { fontSize: '20px', }, }} InputProps={{ disableUnderline: true }} />
                        <TextField id="takeNote" label="Take a note..." InputProps={{ disableUnderline: true }} />
                        <div className="iconBox">
                            <div className="iconContainer">
                                <img className="allIcon" src={alarm} alt="alarm" />
                                <img className="allIcon" src={collaborator} alt="collaborator" />
                                <img className="allIcon" src={color} alt="color" />
                                <img className="allIcon" src={imageIcon} alt="imageIcon" />
                                <img className="allIcon" src={folder} alt="folder" />
                                <img className="allIcon" src={more} alt="more" />
                                <img className="allIcon" src={undo} alt="undo" />
                                <img className="allIcon" src={redo} alt="redo" />

                            </div>

                            <div className="closeIcon"  >Close</div>
                        </div>
                    </div>
                </div>
            </div> 
             <div className="infoContent1">
                <div className="infoBox1">
                    <img className="pinImage" src={Pin} alt="Pin" />
                    <div className="createnote-title1">
                        <TextField id="titleNote" label="Title" InputLabelProps={{ style: { fontSize: '20px', }, }} InputProps={{ disableUnderline: true }} />
                        <TextField id="takeNote" label="Take a note..." InputProps={{ disableUnderline: true }} />
                        <div className="iconBox1">
                            <img className="allIcon1" src={alarm} alt="alarm" />
                            <img className="allIcon1" src={collaborator} alt="collaborator" />
                            <img className="allIcon1" src={color} alt="color" />
                            <img className="allIcon1" src={imageIcon} alt="imageIcon" />
                            <img className="allIcon1" src={folder} alt="folder" />
                            <img className="allIcon1" src={more} alt="more" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar;