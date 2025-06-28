import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Init empty arrow
  const [headingInput, setHeadingInput] = useState(''); // init empty String
  const [listInputs, setListInputs] = useState({}); // Init empty object

  // Arrow function to handle add todo
  const handleAddTodo = () => {
    // Get read of white space and see if string is empty
    if (headingInput.trim() !== '') { 
        setTodos([...todos, {heading: headingInput, lists: [] }]); // Spreads todos into new array and appends a new object to it. Contains a heading and list property
        setHeadingInput('');
    }
  }

  const handleAddList = (index) => {
    // Check if input for the given isnot empty or just whtiespace
    if (listInputs[index] && listInputs[index].trim() != '') {
        const newTodos = [...todos]; // Create copy for current todos
        newTodos[index].lists.push(listInputs[index]); // Add new list item to corresponding index
        setTodos(newTodos); // Update todos state with the new list item
        setListInputs({...listInputs, [index]: ''}); // Clear input field for that index
    }
  }

  // Function to update list input value for a specific heading index
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
    };

    const handleDeleteTodo = (index) => {
        // Create a shallow copy of the current todos array
        const newTodos = [...todos];
        // Remove the todo at inded
        newTodos.splice(index,1);
        // Updatesate with the new array
        setTodos(newTodos)
    };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput State
            
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
        <div className="todo_main">
            {todos.map((todo, index) => ( // Iterate over each todo item in the todos array
                <div key={index} className="todo-card">
                    <div className="heading_todo">
                    {/* Display the heading text of the current todo item */}
                        <h3>{todo.heading}</h3> {/* Display the heading here */}

                    {/* Button to delete the current heading by passing its index */}
                        <button className="delete-button-heading" onClick={handleDeleteTodo}>Delete Heading </button>
                    </div>
                      <ul>
                        {/* Iterate over each list item inside the current todo */}
                        {todo.lists.map((list, listIndex) => (
                        <li key={listIndex} className='todo_inside_list'>
                            {/* Display the text content of the list item */}
                            <p>{list}</p>
                        </li>
                        ))}
                    </ul>
                    <div className='add_list'>
                    {/* Input field for adding a new item under a specific heading */}
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={listInputs[index] || ''}// Use the value from listInputs array based on the current heading index
                                onChange={(e) => handleListInputChange(index, e.target.value)}/>
                    {/* Button to add the list item to the corresponding heading */}
                            <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                            </div>
                </div>
            ))}
        </div>
        
      </div>
    </>
  );
};

export default TodoList;
