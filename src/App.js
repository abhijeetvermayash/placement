import React from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
