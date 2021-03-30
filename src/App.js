import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
