//import React from 'react';

import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';


const ProjectSearch = () => {

    // return (
    //     <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
    //         THIS IS THE PROJECT SEARCH PAGE
    //     </div>
    // )

    const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  //find a new way to display all of the projects
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

    )


};
export default ProjectSearch;

