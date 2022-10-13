import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      
      <div className='main-todo-list'>
        <h1>My To-do's:</h1>
        < TodoList />
      </div>
      
    </div>

  );
}

export default App;
