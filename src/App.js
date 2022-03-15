import React,{useState} from 'react'
import ToDoLists from './ToDoLists';


const App=()=>{
   const [InputList,setInputList]=useState("");
   const [Items,setItems]= useState([]);

   const onClick=()=>{
        
   }


   const itemEvent=(event)=>{
       setInputList(event.target.value);
         };

    const listofItems=()=>{
              setItems((oldItems)=>{
                return [...oldItems,InputList];                                                 //storing items in array
              });
              setInputList('')

    };

    const deleteItems=(id)=>{
      console.log("deleted");
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index!==id; 
  }); 

    });
  };


  return(
    <>
    <div className='main_div'>
       <div className='center_div'>
         <br/>
         <h1>Action Plan</h1>
         <br/>
         <input type='text' placeholder='Add an item' onChange={itemEvent} value={InputList}/>
         <button className="add" onClick={listofItems}>+</button>
          

        <ul>
        {Items.map((itemvalue,index)=>{
              return <ToDoLists key={index} 
              id={index} 
              text={itemvalue}
              onSelect={deleteItems}
              
              
              />   ;  // calling array to display
            })}
        
        </ul>


       </div>
    </div>
    </>
  )
}

export default App;
