export function TodoItem ({completed,id,title,toggle}){
    return(
        <li>
            <label>
                <input 
                type="text"
                checked={completed}
                onChange={e => toggleTodo(id,e.target.checked)} />

                {title}
            </label>
            <button
                onClick ={() => deleteTodo(id)}
                className="btn btn-danger">
                    Delete
                
            </button>
        </li>

    )
}