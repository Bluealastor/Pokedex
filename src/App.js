import './App.css'
import { TopBar } from "./component/TopBar/TopBar";
import { BottomBar } from './component/BottomBar/BottomBar';
import { PokeList } from './component/PokeList/PokeList';


function App() {
  return (
    <div className="app">
      <TopBar/>
      <PokeList/>
      <BottomBar/>
    </div>
  );
}

export default App;
