import express from 'express';

import { getPostsEB, createPostEB, updatePostEB, deletePostEB } from '../controllers/postsEB.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPostsEB);
router.post('/', auth, createPostEB);
router.patch('/:id', auth, updatePostEB);
router.delete('/:id', auth, deletePostEB);

export default router;