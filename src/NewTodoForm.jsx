
// import { useState } from "react";

// export function NewTodoForm({ onSubmit }) {
//   const [newItem, setNewItem] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (newItem === "") return;
//     onSubmit(newItem);
//     setNewItem("");
//   }

//   return (
//     <form onSubmit={handleSubmit} className="new-item-form">
//       <div className="form-row">
//         <label htmlFor="item">New Item</label>
//         <input
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//           type="text"
//           id="item"
//         />
//       </div>
//       <button type="submit" className="btn">Add</button>
//     </form>
//   );
// }

import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return; // check for empty or whitespace-only input
    onSubmit(newItem.trim()); // trim input to avoid unintended spaces
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          name="item"  // added name for accessibility
        />
      </div>
      <button type="submit" className="btn">Add</button> {/* Explicitly set button type */}
    </form>
  );
}