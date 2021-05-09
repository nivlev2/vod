import './App.css';
import {Route,Switch} from 'react-router-dom'
import AppVod from './AppVod';
import SingleMovie from './SingleMovie';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AppVod}/>
        <Route exact path="/movie/:id" component={SingleMovie}/>
      </Switch>
      
      <AppVod/>
    </div>
  );
}

export default App;
