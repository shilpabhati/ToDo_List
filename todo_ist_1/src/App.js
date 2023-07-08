import './App.css';
import Navbar from './MyComponents/Navbar';
import ToDo from './MyComponents/ToDo';
import Footer from './MyComponents/Footer'
import React, { useDeferredValue, useEffect, useState } from 'react';
import AddToDo from './MyComponents/AddToDo';

function App() {
  let initToDo;
  if(localStorage.getItem("ToDo_List")==null){
     initToDo = [];
  }
  else {
    initToDo = JSON.parse(localStorage.getItem("ToDo_List"));
  }
 const onDelete = (todo)=>{
  console.log("I am on delete", todo);
  //This way does not work in react. to change state of react we have to use hooks.
  // let index = ToDo_List.indexOf(todo);
  // ToDo_List.splice(index,1);
  setToDo_List(ToDo_List.filter((deleted) =>{
    return deleted!==todo
  }));
 }
 
 const addToDo = (title, desc) => {
    let Sno;
    if(ToDo_List.length === 0){
      Sno = 0
    }
    else{
      Sno = ToDo_List[ToDo_List.length - 1] + 1;
    }
    const myToDo = {
      Sno : Sno,
      title : title,
      desc : desc
    }
    setToDo_List([...ToDo_List, myToDo]);

}

  const [ToDo_List, setToDo_List]= useState(initToDo);
  useEffect(() => 
    {localStorage.setItem("ToDo_List", JSON.stringify(ToDo_List))}, [ToDo_List]);
    
  return (
    <>
    <Navbar Nav_name="Todo List"/>
    <AddToDo addToDo={addToDo}/>
    <ToDo ToDo_List={ToDo_List} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
