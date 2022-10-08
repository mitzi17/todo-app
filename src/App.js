import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      
      <div className='main-todo-list'>
        <h1>My To-do's:</h1>
        <Todo />
      </div>
      
    </div>

  );
}

export default App;
