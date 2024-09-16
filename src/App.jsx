import { useState } from "react"
import "./style.css"
export default function App(){
  const [newItem, setNewItem] = useState("item 1")
  const [todos, setTodos] = useState([])


  function handleSubmit(e) {e.preventDefault()

    setTodos([...todos,{id: crypto.randomUUID(),title:newItem, completed: false},
    ])

  }
  console.log(todos)
  return(
    <>
     <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} 
      onChange={e => setNewItem(e.target.value)}
      type="text" 
      id="item" />
    </div>
    <button className="btn">Add</button>

  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label htmlFor="">
        <input type="checkbox" />
        item1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label >
        <input type="checkbox" />
        <button className></button>
      </label>
    </li>

    <li>
      <label>
        <input type="checkbox" />
        item2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label >
        <input type="checkbox" />
        <button className></button>
      </label>
    </li>
  </ul>
  </>
  )
}
