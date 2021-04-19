import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import PostEB from './PostEB/PostEB';
import useStyles from './styles';

const PostsEB = ({ setCurrentId }) => {
  const postsEB = useSelector((state) => state.postsEB);
  const classes = useStyles();

  return (
    //posts ? 
    !postsEB.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {postsEB.map((postEB) => (
          <Grid key={postEB._id} item xs={20} sm={16} md={12}>
            <PostEB postEB={postEB} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
    // : (
    //   <Grid>

    //   </Grid>
    // )

  );
};

export default PostsEB;
