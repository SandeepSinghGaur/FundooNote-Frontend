import React from 'react'
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './DisplayIcons.scss';
import userServices from '../../Services/userServices';

function DisplayIcons(props) {
  const services = new userServices();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isDeleted=()=>{
    let data = {
      noteId:[props.notes.noteId],
      isTrash:true,
  };
  deletePerticularNote(data);
};
  const deletePerticularNote=(data)=>{
    services.deleteNotes(data)
    .then((data) => {
      console.log(data);

    })
    .catch((err) => {
      console.log("Error", err);
    });
  }
  
 
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
          <IconButton aria-label="More" onClick={handleClick}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={isDeleted}>Delete</MenuItem>
      </Menu>
        </div>
    )
}

export default DisplayIcons
