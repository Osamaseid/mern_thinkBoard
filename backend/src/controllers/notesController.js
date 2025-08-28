import Notes from '../models/notes.js';


export async function getAllNotes(req, res){
    try{
        const notes = await Notes.findx();
            res.status(200).json(notes);

    }catch(error){
        res.status(500).json({message: "Internal server error"})
        console.log("error in getAllNotes:", error.message);
    }    
}

export function createNote(req, res){
    res.status(201).json({message:"note created"});
}

export function deleteNote(req, res){
    res.status(200).json({message:"note deleted"});
}

export function updateNote(req, res){
    res.status(200).json({message: "note updated"});
}

