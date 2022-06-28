import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const add_Note = (note) => {
    setAddItem((old_Data) => {
      return [...old_Data, note];
    });

  };


  const onDelete = (id) =>{
    setAddItem((oldData) => 
      oldData.filter((currdata, indx) =>{
        return indx !== id;
    })
  )  
}
  return (
  <>
  <Header/>
  <CreateNote passNote = {add_Note}/>
  {
    addItem.map((val, index)=>{
      return( 
      <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        delete_Item = {onDelete}
        />
        );
      })}
  <Footer/>
  </>
  );
}; 

export default App
