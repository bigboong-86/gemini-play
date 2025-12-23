
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // --- Styles ---
  const styles = {
    container: {
      backgroundColor: '#0d0d0d',
      color: '#00ff00',
      minHeight: '100vh',
      fontFamily: '"Courier New", Courier, monospace',
      padding: '20px',
      boxSizing: 'border-box',
      textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00',
    },
    header: {
      textAlign: 'center',
      fontSize: '50px',
      color: '#ff00ff',
      textShadow: '0 0 5px #ff00ff, 0 0 15px #ff00ff, 0 0 25px #ff00ff',
      marginBottom: '30px',
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px',
    },
    input: {
      backgroundColor: '#1a1a1a',
      color: '#00ff00',
      border: '2px solid #00ffff',
      padding: '10px 15px',
      fontSize: '16px',
      boxShadow: '0 0 10px #00ffff inset',
      outline: 'none',
      marginRight: '10px',
      flex: '1',
      maxWidth: '500px',
    },
    addButton: {
      backgroundColor: 'transparent',
      border: '2px solid #ff00ff',
      color: '#ff00ff',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      boxShadow: '0 0 10px #ff00ff',
      transition: 'all 0.3s ease',
    },
    list: {
      listStyle: 'none',
      padding: '0',
      maxWidth: '600px',
      margin: '0 auto',
    },
    listItem: {
      backgroundColor: '#1a1a1a',
      borderLeft: '5px solid #00ffff',
      padding: '15px',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '18px',
      wordBreak: 'break-all',
    },
    deleteButton: {
      backgroundColor: 'transparent',
      border: '1px solid #ff3333',
      color: '#ff3333',
      padding: '5px 10px',
      cursor: 'pointer',
      fontSize: '14px',
      boxShadow: '0 0 5px #ff3333',
      transition: 'all 0.3s ease',
    }
  };
  
  // --- Handlers ---
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>CYBERPUNK TO-DO</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={styles.input}
          placeholder="Enter new task..."
        />
        <button 
            style={styles.addButton} 
            onClick={handleAddTodo}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 20px #ff00ff, 0 0 5px #ff00ff inset'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 10px #ff00ff'}
        >
            ADD
        </button>
      </div>
      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.listItem}>
            <span>{todo.text}</span>
            <button 
                style={styles.deleteButton} 
                onClick={() => handleDeleteTodo(todo.id)}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff333322'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
                DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
