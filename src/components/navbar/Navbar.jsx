import React from 'react';
import GoogleKeepdp from './../..//assests/GoogleKeepdp.png';
import MenuBar from './../..//assests/menuBar.png';
import './Navbar.scss';
import SearchIcon from "@material-ui/icons/Search";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import IconButton from "@material-ui/core/IconButton";

function Navbar() {
    return (
        <header>
            <div className="mainbar">
                <div className="menubar">
                    <img src={MenuBar} alt="Menubar" />
                </div>
                <div className="picture">
                    <img src={GoogleKeepdp} alt="GoogleKeepdp" />
                </div>
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
                    <div className="buttonContainer">
                        <div className="button">
                            <IconButton aria-label="open drawer">
                                <ReplayOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="button">
                        <IconButton aria-label="open drawer">
                            <DnsRoundedIcon />
                        </IconButton>
                    </div>
                    <div className="button">
                        <IconButton aria-label="open drawer">
                            <SettingsSharpIcon />
                        </IconButton>
                    </div>
                    <div className="appsContainer">
                        <div className="button">
                            <IconButton aria-label="open drawer">
                                <AppsRoundedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </header>



    )
}
export default Navbar;