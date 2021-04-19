import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import { deletePost, switchFeatured } from '../../../actions/posts';
import useStyles from './styles';

import {
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import SwitchLabel from './SwitchLabel.js';



const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  console.log("Post.js consolelog", post._id, post.isFeaturedPost);

  return (
    // <div>
    //   <Card className={classes.card}>
    //     <CardImg top width="100%" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle tag="h3"> {post.title} </CardTitle>
    //       <CardText tag="h4"> {post.major} </CardText>
    //       <CardText tag="h5"> {post.message} </CardText>
    //       <CardText tag="h5"> {moment(post.createdAt).fromNow()} </CardText>
    //     </CardBody>
    //   </Card>
    // </div>

    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography className={classes.major} gutterBottom variant="h6" component="h3">{post.major}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <Typography className={classes.title} gutterBottom variant="h4" component="h1">{post.title}</Typography>
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?._id === post?.creator || user?.result?.isAdmin) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
      <CardActions>
      {(user?.result?.isAdmin) && (
        <Button size="small" color="secondary" onClick={() => dispatch(switchFeatured(post._id, post.isFeaturedPost))}>
             <StarOutlineIcon fontSize="small" /> Change Feature Status 
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
