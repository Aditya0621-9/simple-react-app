import React from "react";
// import './App.css';
import HelloWorld from "./Components/HelloWorld";
// import CounterExample from './Components/CounterExample';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <Header />

        <HelloWorld name="Aditya" />

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">This is HomePage</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl">This is About page</h1>
          </Route>
          <Route path="/more">
            <h1 className="font-bold text-2xl">know more about us</h1>
          </Route>
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
