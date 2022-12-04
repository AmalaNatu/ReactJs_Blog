import "./App.css"
import { Component } from "react";
import Posts from "./component/Posts/Posts";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Blog from "./component/Blog";
import Nav from "./component/Nav";
import Twitter from "./component/twitter";

class App extends Component{

  render() {
      return (
        <Router>
          <div className="App">
            <Header />
            <div className="App-leftdiv" style={{flexGrow: 7}}>
              <Switch>
                <Route exact path ="/" component={ Posts } />
                <Route path="/blog/:id" component={ Blog } />
              </Switch>
            </div>
            <div className="App-rightdiv" style={{flexGrow: 3}}>
              <Nav />
              <div className="twitterApi">
                <Twitter />
              </div>
          </div>
            <Footer />
          </div>
        </Router>
      );
  }
}

export default App;