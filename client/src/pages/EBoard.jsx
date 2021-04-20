// import React from 'react';

// const EBoard = () => {

//     return (
//         <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
//             THIS IS THE EBOARD PAGE
//         </div>
//     )
// };

// export default EBoard;


import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme} from '@material-ui/core/styles';

import { getPostsEB } from '../actions/postsEB';
import PostsEB from '../components/PostsEB/PostsEB';
import FormEB from '../components/Form/FormEB';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: '20%',
    zIndex: 10,
  },
  gridContainer: {
    paddingTop: "100px"
  }
}));

const EBoard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsEB());
  }, [currentId, dispatch]);

  console.log(currentId);

  const isAdmin = user?.result.isAdmin;

  const classes = useStyles();

  return (
    isAdmin ? (
      <Grow in>
        <Container>
          <Grid container justify="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={8}>
              <PostsEB setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={8} >
              <FormEB currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    ) : (
      <Grow in>
      <Container>
        <Grid container justify="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={8}>
            <PostsEB setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
    )
  );
};

export default EBoard;