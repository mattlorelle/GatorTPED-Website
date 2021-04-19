import express from 'express';
import mongoose from 'mongoose';

import PostEBmem from '../models/postEBmem.js';

const router = express.Router();

export const getPostsEB = async (req, res) => { 
    try {
        const postEBmems = await PostEBmem.find();
                
        res.status(200).json(postEBmems);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostEB = async (req, res) => { 
    const { id } = req.params;

    try {
        const postEB = await PostEBmem.findById(id);
        
        res.status(200).json(postEB);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPostEB = async (req, res) => {
    const postEB = req.body;

    const newPostEBmem = new PostEBmem({ ...postEB, creator: req.userId });

    try {
        await newPostEBmem.save();

        res.status(201).json( newPostEBmem );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePostEB = async (req, res) => {
    const { id } = req.params;
    const { name, position, aboutMe, classOf, major, creator, picture } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No EB mem with id: ${id}`);

    const updatedPostEB = { name, position, aboutMe, classOf, major, creator, picture, _id: id };

    await PostEBmem.findByIdAndUpdate(id, updatedPostEB, { new: true });

    res.json(updatedPostEB);
}

export const deletePostEB = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No EB mem with id: ${id}`);

    await PostEBmem.findByIdAndRemove(id);

    res.json({ message: "Executive Board member deleted successfully." });
}


export default router;