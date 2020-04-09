import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import Appointment from './Component/Appointment/Appointment';
import NotFound from './Component/NotFound/NotFound';
import DoctorDashbord from './Component/DoctorDashbord/DoctorDashbord';
import DoctorAppointmentDashbord from './Component/DoctorAppointmentDashbord/DoctorAppointmentDashbord';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route path="/doctor/dashboard">
            <DoctorDashbord/>
          </Route>
          <Route path="/doctor/appointment/dashboard">
            <DoctorAppointmentDashbord/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="*">
              <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
