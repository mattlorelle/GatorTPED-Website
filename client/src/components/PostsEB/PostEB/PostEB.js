import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePostEB } from '../../../actions/postsEB';
import useStyles from './styles';

const PostEB = ({ postEB, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={postEB.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={postEB.name} />
      <div className={classes.overlay}>
        <Typography variant="h6">{postEB.name}</Typography>
        <Typography variant="body2">{postEB.position}</Typography>
      </div>
      {(user?.result?._id === postEB?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(postEB._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{postEB.major}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{postEB.classOf}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{postEB.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{postEB.aboutMe}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?._id === postEB?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePostEB(postEB._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PostEB;
