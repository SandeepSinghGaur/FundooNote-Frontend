import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/dashboard-Login/Dashboard-Login';
import ForgetPassword from './pages/dashboard-ForgetPassword/Dashboard-ForgetPassword';
import Registration from './pages/dashboard-Registration/Dashboard-Registration';
import Navbar from './pages/dashboard-Navbar/Dashboard-Navbar';
import Reset from './pages/dashboard-Reset/Dashboard-Reset';
import AddNote from './pages/dashboard-AddNote/Dashboard-AddNote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Navbar}/>
          <Route path="/AddNote" exact component={AddNote}/>
          <Route path="/Registration" exact component={Registration} />
          <Route path="/ForgetPassword" exact component={ForgetPassword} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Reset" exact component={Reset} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
