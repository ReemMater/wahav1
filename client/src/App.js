import React from 'react';
import AppAr from './components/AppAr';
import AppEn from './components/AppEn';

import AboutAr from './components/ar/about/AboutAr';
import GalleryAr from './components/ar/gallary/GalleryAr';
import ServicesAr from './components/ar/services/ServicesAr';
import ContactAr from './components/ar/contactus/ContactAr';

import AboutEn from './components/en/about/AboutEn';
import GalleryEn from './components/en/gallary/GalleryEn';
import ServicesEn from './components/en/services/ServicesEn';
import ContactEn from './components/en/contactus/ContactEn';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PaymentFail from './components/ar/payment/PaymentFail';
import PaymentSuccess from './components/ar/payment/PaymentSuccess';
import OnlinePayment from './components/ar/payment/OnlinePayment';
import AlwahaNewsAr from './components/ar/alwahanews/AlwahaNewsAr';
import Login from './components/admin/Login';
import AlertState from './context/alert/AlertStete';
import AuthState from './context/auth/AuthState';
import Admin from './components/admin/Admin';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utilts/setAuthToken';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {

  return (

    <AlertState>
      <AuthState>
        <Router>

          <Switch>  <Route exact path="/">
            <Redirect to="/ar" />
          </Route>
            <Route exact path="/ar">
              <AppAr />
            </Route>
            <Route exact path="/en">
              <AppEn />
            </Route>


            <PrivateRoute exact path="/admin/login" component={Login} />

            <PrivateRoute exact path={"/Admin"} component={Admin} />


            <Route exact path="/ar/about">
              <AboutAr />
            </Route>
            <Route exact path="/ar/gallery">
              <GalleryAr />
            </Route>
            <Route exact path="/ar/services">
              <ServicesAr />
            </Route>
            <Route exact path="/ar/contact">
              <ContactAr />
            </Route>
            <Route exact path="/ar/alwahaNews">
              <AlwahaNewsAr />
            </Route>
            <Route exact path="/ar/paymentfail">
              <PaymentFail />
            </Route>
            <Route exact path="/ar/paymentsuccess">
              <PaymentSuccess />
            </Route>
            <Route exact path="/ar/payment">
              <OnlinePayment />
            </Route>

            <Route exact path="/en/about">
              <AboutEn />
            </Route>
            <Route exact path="/en/gallery">
              <GalleryEn />
            </Route>
            <Route exact path="/en/services">
              <ServicesEn />
            </Route>
            <Route exact path="/en/contact">
              <ContactEn />
            </Route>

          </Switch>
        </Router>
      </AuthState>
    </AlertState>

  );
};

export default App;
