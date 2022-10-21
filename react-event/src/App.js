import './App.css';
import EventChangeComp from './components/EventChangeComp';
import EventChangeFuncComp from './components/EventChangeFuncComp';
import EventRefComp from './components/EventRefComp';
import EventRefCompTest from './components/EventRefCompTest';
import EventTest from './components/EventTest';
import RefComp from './components/RefComp';
import StoryBox from './components/StoryBox';

function App() {
  return (
    <div className="App">
      <EventChangeComp />
      <EventChangeFuncComp />

      <EventRefComp />
      <EventRefCompTest />
      <RefComp />

      <br />
      <EventTest />

      <br />
      <StoryBox />
    </div>
  );
}

export default App;
