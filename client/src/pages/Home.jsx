import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { getFeaturedPosts } from '../actions/posts';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import logo from '../images/TPED.png';
import team from '../images/team.webp';
import Paper from '@material-ui/core/Paper';

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
    paddingTop: "130px"
  }
}));

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedPosts());
  }, [currentId, dispatch]);

  const classes = useStyles();

  return (
    <Grow in>
      <Container>
        <Grid container justify="center" alignItems="center" direction="column" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12}>
            <img src={logo} style={{width: "600px"}}/>;
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" align="center" style={{color: "white"}}>
              What We're About
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" align="center" style={{color: "white"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={team} style={{width: "400px"}}/>;
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" align="center" style={{color: "white"}}>
              Mission Statement
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" align="center" style={{color: "white"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h2" align="center" style={{color: "white"}}>
              Featured Posts
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>

      </Container>
    </Grow>

  );
};

export default Home;


