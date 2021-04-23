import React from 'react'
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import IconButton from "@material-ui/core/IconButton";
import './DisplayIcons.scss';

function DisplayIcons() {
    return (
        <div className="displayIcon">
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
        </div>
    )
}

export default DisplayIcons
