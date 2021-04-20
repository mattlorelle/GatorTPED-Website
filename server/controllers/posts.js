import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFeaturedPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find({ isFeaturedPost: true });
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const switchFeatured = async (req, res) => {
    try {

        
        console.log("This is a request: ", req.params, req.body);

        const { id } = req.params;
        const { isFeaturedPost } = req.body;

        console.log('before change:', isFeaturedPost);
        //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        
        var changer = !isFeaturedPost;
        console.log('AFter change:', changer);
        //await PostMessage.findByIdAndUpdate(id, {$set: { isFeaturedPost: changer }});

        await PostMessage.findByIdAndUpdate(id, {$set: { isFeaturedPost: changer }});

    } catch (error) {
        res.status(404).json({ message: error.message });
    }


}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString(), isFeaturedPost: false });
    
    try {
        await newPostMessage.save();

        res.status(201).json( newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;