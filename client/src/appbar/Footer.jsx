import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'sticky',
    marginTop: '-100px',
    bottom: 0,
    backgroundColor: 'white',
    opacity: '0.25',
    height: '100px'
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      {/* <AppBar className={classes.appBar}> */}
        <Toolbar>

        </Toolbar>
      {/* </AppBar> */}
    </div>
  );
}