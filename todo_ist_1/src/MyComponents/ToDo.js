import React from 'react'
import ToDoItem from './ToDoItem'

function ToDo(props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (


        <div className="container" style={myStyle}>
            <h3 className="text-center">ToDo List</h3>
            {props.ToDo_List.length === 0 ? "no such data available" :
                
                    props.ToDo_List.map((todo) => {
                        return (
                            <ToDoItem todo={todo} key={todo.Sno} onDelete={props.onDelete} />
                        )

                    })
                
            }

        </div>


    )
}

export default ToDo