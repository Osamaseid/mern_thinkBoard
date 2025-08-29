import { response } from 'express';
import Notes from '../models/notes.js';


export async function getAllNotes(req, res){
    try{
        const notes = await Notes.find();
            res.status(200).json(notes);

    }catch(error){
        res.status(500).json({message: "Internal server error"})
        console.log("error in getAllNotes:", error.message);
    }    
}

export async function createNote(req, res){
    try{
        const {title, content} = req.body;
        if(!title || !content){
            return res.status(400).json({message: "Title and content are required"});
        }
        const newNote = new Notes({title, content});
        await newNote.save();

    }
    catch(error){
        res.status(500).json({message: "Internal server error"})
        console.log("error in createNote:", error.message);
    }
}

export async function deleteNote(req, res){
    try{
        const deleteNote= await Notes.findByIdAndDelete(req.params.id);
        if(!deleteNote) return response.status(404).json({message: "Note not found"});
    }
    catch(error){
        res.status(500).json({message: "Internal server error"})
        console.log("error in deleteNote:", error.message);
        res.status(200).json({message: "Note deleted successfully"});           
    }

}

export async function updateNote(req, res){
    try{
        const {title, content}=req.body;
        const updateNote= await Notes.findByIdAndUpdate(req.params.id,{title, content});
        if(!updateNote) return response.status(404).json({message: "Note not found"});
    }
    catch(error){
        res.status(500).json({message: "Internal server error"})
        console.log("error in updateNote:", error.message);
        res.status(200).json({message: "Note updated successfully"});           
    }
   
}
