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
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import userServices from '../../Services/userServices';

function DisplayIcons(props) {
  const services = new userServices();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleUpdateNote = (e) => {
    e.stopPropagation()
    let data = {
      title: title,
      description:description,
    };
   updateNote(data);
  };
  const updateNote=(data)=>{
    services.updateNotes(data)
    .then((data) => {
      console.log(data);

    })
    .catch((err) => {
      console.log("Error", err);
    });
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };
  const isDeleted = () => {
    let data = {
      noteId: props.pass,
      isTrash: true,
    };
    deletePerticularNote(data);
  };
  const deletePerticularNote = (data) => {
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
      <IconButton aria-label="Archive note " onClick={handleClickOpen}>
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
      <div>
        <Dialog open={open} onClose={handleClose1} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" onClick={(e)=>handleUpdateNote(e)}>Update Note</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="Title"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Take a Note"
              type="Take a Note"
              fullWidth
              onChange={(e) => setDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1} color="primary">
              Cancel
          </Button>
            <Button onClick={handleClose1} color="primary">
              Update Note
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default DisplayIcons
