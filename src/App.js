import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Checkout from "./components/checkoutComponent/Checkout";
import Footer from "./components/footerComponent/Footer";
import Header from "./components/headerComponent/Header";
import Home from "./components/homeComponent/Home";
import Login from "./components/loginComponent/Login";
import { useStateValue } from "./components/stateProvider/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
