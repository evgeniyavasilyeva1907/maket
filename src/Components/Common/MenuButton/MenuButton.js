import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';


const options = [
  'First',
  'Second',
  'Third',
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  menu: {
    transform: 'translateX(-80%) !important',
  },
  button:{
    transform: 'none',
    borderRadius: '50%',
    backgroundColor: '#fff',
    width: ' 20px',
    height: ' 20px',
    marginRight: ' 10px'
  },
  icon:{
    width:'16px',
    height:'16px'
  }
}));

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.button}
      >
        <MoreVertIcon className={classes.icon} />
      </IconButton>
      
        <Menu
          classes={{
            paper:
              classes.menu
          }}
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
              backgroundColor: '#fff'
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      

    </div>
  );
}