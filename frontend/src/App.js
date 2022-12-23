import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GetAllVehiclesPage from "./components/Vehicles";
import GetOneVehiclePage from "./components/Vehicle"
import SplashPage from "./components/SplashPage"
import HomePage from "./components/HomePage";
import UnderDevelopmentPage from "./components/ComingSoon/UnderDevelopmentPage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/cars">
            <GetAllVehiclesPage />
          </Route>
          <Route path="/cars/:vehicleId">
            <GetOneVehiclePage />
          </Route>
          <Route path="/comingsoon">
            <UnderDevelopmentPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
