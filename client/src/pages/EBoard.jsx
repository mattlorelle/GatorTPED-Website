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

import { getPostsEB } from '../actions/postsEB';
import PostsEB from '../components/PostsEB/PostsEB';
import FormEB from '../components/Form/FormEB';

const EBoard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsEB());
  }, [currentId, dispatch]);

  console.log(currentId);

  const isAdmin = user?.result.isAdmin;


  return (
    isAdmin ? (
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
              <FormEB currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={8} sm={7}>
              <PostsEB setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    ) : (
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={8} sm={7}>
              <PostsEB setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      
    )
  );
};

export default EBoard;