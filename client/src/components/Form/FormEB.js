import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

//make a create eboard and update eboard
import { createPostEB, updatePostEB } from '../../actions/postsEB';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

  const FormEB = ({ currentId, setCurrentId }) => {
    const [postDataEB, setPostDataEB] = useState({ name: '', position: '', aboutMe: '', classOf: '', major: '', creator: '', picture: '' });
    const postEB = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
  
    useEffect(() => {
      if (postEB) setPostDataEB(postEB);
    }, [postEB]);
  
    const clear = () => {
      setCurrentId(0);
      setPostDataEB({ name: '', position: '', aboutMe: '', classOf: '', major: '', creator: '', picture: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPostEB({ ...postDataEB, name: user?.result?.name }));
        clear();
      } else {
        dispatch(updatePostEB(currentId, { ...postDataEB, name: user?.result?.name }));
        clear();
      }
    };
  
    const token = user?.token;
  
  
    return (
        //at the outermost part of the form, must make only visible to users of type isAdmin === true
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? `Editing "${postEB.name}"` : 'Add an E-Board Member'}</Typography>
          <TextField name="name" variant="outlined" label="Name" fullWidth value={postDataEB.name} onChange={(e) => setPostDataEB({ ...postDataEB, name: e.target.value })} />
          <TextField name="position" variant="outlined" label="Club Position" fullWidth value={postDataEB.position} onChange={(e) => setPostDataEB({ ...postDataEB, position: e.target.value })} />
          <TextField name="aboutMe" variant="outlined" label="About Me" fullWidth multiline rows={5} value={postDataEB.aboutMe} onChange={(e) => setPostDataEB({ ...postDataEB, aboutMe: e.target.value })} />
          <TextField name="classOf" variant="outlined" label="Class of" fullWidth value={postDataEB.classOf} onChange={(e) => setPostDataEB({ ...postDataEB, classOf: e.target.value })} />
          <TextField name="major" variant="outlined" label="Major" fullWidth value={postDataEB.major} onChange={(e) => setPostDataEB({ ...postDataEB, major: e.target.value })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostDataEB({ ...postDataEB, picture: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    );
  };
  
  export default FormEB;
