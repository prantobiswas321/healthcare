
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Account from './components/Account/Account';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/PageNotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/account">
              <Account></Account>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/details/:idNumber">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
