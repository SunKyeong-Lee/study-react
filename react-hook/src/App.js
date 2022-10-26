import './App.css';
import CallbackComp from './components/CallbackComp';
import ContextCompAll from './components/ContextCompAll';
import ContextParentComp1 from './components/ContextParentComp1';
import ReducerComp from './components/ReducerComp';
import StateEffectHookComp from './components/StateEffectHookComp';
import UseMemoComp from './components/UseMemoComp';

function App() {
  return (
    <div className="App">
      {/**
       * 콘솔 창 어지러워서 주석 처리
       * <StateEffectHookComp />
       */}
      <ReducerComp />
      <UseMemoComp />
      <br />
      <CallbackComp />
      <ContextCompAll />
      <ContextParentComp1 />
    </div>
  );
}

export default App;
