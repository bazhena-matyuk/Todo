import React from 'react';
import ReactDOM from 'react-dom';
import SearchBlock from './components/SearchBlock'

const Header = () => {
  return <h1>My Todo List</h1>
}



const TodoList = () => {
  return (
    <ul>
      <li>Learn html</li>
      <li>Learn css</li>
      <li>Learn react</li>
    </ul>
  );
}

const App = () => {
  return (
    <div>
      <Header />
      <SearchBlock />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
