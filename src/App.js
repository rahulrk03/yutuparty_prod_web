import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Room from './Component/Room/Room'
import {
  Switch,
  Route
} from "react-router-dom";
// import VideoUrlInput from './Component/Room/VideoUrlInput';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component= {Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/room" component={Room}></Route>
        </Switch> 
    </div>
  );
}

export default App;
