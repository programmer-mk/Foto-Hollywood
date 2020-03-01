import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
//React Router Import
import  {Switch, Route} from 'react-router-dom';
//Import pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Reviews from './components/pages/Reviews';
import Details from './components/pages/Details';
import Contacts from './components/pages/Contacts';
import Products from './components/pages/Products';
import Portfolio from './components/pages/Portfolio';
import UploadImages from './components/pages/UploadImages';
import Login from './components/pages/Login';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/details" component={Details} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/products" component={Products} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/upload-photos" component={UploadImages} />
          <Route path="/login" component={Login} />
          <Route  component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
