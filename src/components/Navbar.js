import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Navbar.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    // marginBottom:'52px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
     color:'white',
     
    fontSize:'36px',
    fontWeight:'bold',
    fontFamily:'Rock Salt',
    paddingLeft:'48px'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#f20585'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shortly
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
