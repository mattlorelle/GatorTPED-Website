import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getFeaturedPosts } from '../actions/posts';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedPosts());
  }, [currentId, dispatch]);

  console.log();

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3} style={{ position: 'absolute', left: '60%', top: '50%', transform: 'translate(-50%, -50%)'}}>
          <Grid item xs={8} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>

  );
};

export default Home;


