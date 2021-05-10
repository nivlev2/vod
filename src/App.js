import './App.css';
import {Route,Switch} from 'react-router-dom'
import AppVod from './AppVod';
import SingleMovie from './SingleMovie';

function App() {
  return (
    <div className="App">
      <Switch>                
        <Route exact path="/" component={AppVod}></Route>
        <Route exact path="/:id" component={AppVod}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
