import express from 'express';

import { getPosts, getFeaturedPosts, createPost, updatePost, deletePost, switchFeatured } from '../controllers/posts.js';
//how do i implement that 
const router = express.Router();
import auth from "../middleware/auth.js";

//router.get('/', getPost);
router.get('/', getPosts);
router.get('/featured', getFeaturedPosts);
router.post('/', auth, createPost);
router.put('/:id', switchFeatured);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;