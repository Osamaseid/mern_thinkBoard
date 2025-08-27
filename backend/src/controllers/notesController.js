export function getAllNotes(req, res){
    res.status(200).send("you just fetched all notes");
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

