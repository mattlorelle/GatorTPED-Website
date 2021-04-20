//import React from 'react';

import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
import Posts from '../components/Posts/Posts';

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
    paddingTop: "125px"
  }
}));


const ProjectSearch = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    //find a new way to display all of the projects
      return (
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} className={classes.gridContainer}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      )


};
export default ProjectSearch;

