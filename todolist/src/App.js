import './App.css';
import ClockComp from './components/ClockComp';
import LoginComp from './components/LoginComp';
import TodoComp from './components/TodoComp';

function App() {
  return (
    <div className="App">
      <ClockComp />
      <LoginComp />
      <hr />
      <TodoComp />
    </div>
  );
}

export default App;
