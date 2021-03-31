import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardLogin from './pages/dashboard-Login/Dashboard-Login';
import DashboardFP from './pages/dashboard-ForgetPassword/Dashboard-ForgetPassword';
import DashboardRegistration from './pages/dashboard-Registration/Dashboard-Registration';
import DashboardNavbar from './pages/dashboard-Navbar/Dashboard-Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={DashboardNavbar}/>
          <Route path="/DashboardRegistration" exact component={DashboardRegistration} />
          <Route path="/DashboardFP" exact component={DashboardFP} />
          <Route path="/DashboardLogin" exact component={DashboardLogin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
