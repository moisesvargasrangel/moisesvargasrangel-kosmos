  import logo from './logo.svg';
  import './App.css';

  //Components
  import Navbar from './components/navbar/navbar';
  import Todo from './components/Todo/Todo';
  function App() {
    return (
      <div className="App">
        <Navbar/>
        <Todo/>
      </div>
    );
  }

  export default App;
