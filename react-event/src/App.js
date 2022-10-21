import './App.css';
import EventChangeComp from './components/EventChangeComp';
import EventChangeFuncComp from './components/EventChangeFuncComp';
import EventRefComp from './components/EventRefComp';
import EventRefCompTest from './components/EventRefCompTest';

function App() {
  return (
    <div className="App">
      <EventChangeComp />
      <EventChangeFuncComp />

      <EventRefComp />
      <EventRefCompTest />
    </div>
  );
}

export default App;
