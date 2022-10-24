import './App.css';
import ClassNameComp from './components/ClassNameComp';
import DataPlusDelete from './components/DataPlusDelete';
import LifeCycleComp from './components/LiftCycleComp';
import MapComp from './components/MapComp';
import MapCompTest from './components/MapCompTest';

function App() {
  return (
    <div className="App">
      <MapComp />
      <DataPlusDelete />
      <MapCompTest />

      <LifeCycleComp />

      <ClassNameComp />
    </div>
  );
}

export default App;
