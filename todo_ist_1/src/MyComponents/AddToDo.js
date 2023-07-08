import React, { useState } from 'react'

function AddToDo({addToDo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc]  = useState("");
    const onsubmit = (event) =>{
        event.preventDefault();
          if(!title||!desc){
          alert("Please enter details");
          }
          else{
            addToDo(title, desc);
            setTitle("");
            setDesc("");
          }
    }
    return (
        <div className="container">
            <h4>Add a ToDo</h4>
            <form onSubmit={onsubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(event)=>{setTitle(event.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(event)=>{setDesc(event.target.value)}} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddToDo