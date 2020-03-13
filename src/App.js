import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import Layout from './containers/Layout';
import NavigationBar from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/home' component = {Home} />
            <Route  path='/about' component = {About} />
            <Route  path='/contact' component = {Contact} />
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Layout>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
