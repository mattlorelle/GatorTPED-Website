import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

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

  const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title: '', message: '', major: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
  
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  
    const clear = () => {
      setCurrentId(0);
      setPostData({ title: '', message: '', major: '', selectedFile: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        clear();
      }
    };
  
    const token = user?.token;
  
  
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Posting a Project'}</Typography>
          <TextField name="title" variant="outlined" label="Project Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="major" variant="outlined" label="Major" fullWidth value={postData.major} onChange={(e) => setPostData({ ...postData, major: e.target.value })} />
          <TextField name="message" variant="outlined" label="Project Description" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    );
  };
  
  export default Form;
