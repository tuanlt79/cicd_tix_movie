import "./App.scss";
import Home from "./Pages/Home/Home";
import { withRouter, Route, Router, Switch } from "react-router-dom";
import Loading from "./Component/Loading/Loading.jsx";
import Detail from "./Component/Detail/Detail";
import { HeaderTemplate } from "./template/HeaderTemplate";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import { createBrowserHistory } from "history";
import Register from "./Component/Register/Register";
import Profile from "./Component/Profile/Profile";
import { Provider } from "react-redux";
import AdminB from "./Component/Admin/AdminB";
import { store } from "./Redux/configStore";
import { useLayoutEffect } from "react";
import TestFE from "./Component/Project/TestFE";
export const history = createBrowserHistory();
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children || null;
});
function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <Loading />
          <ScrollToTop>
            <Switch>
              <Route exact path="/home" component={Home} />
              <HeaderTemplate exact path="/detail/:id" Component={Detail} />
              <Route exact path="/checkout/:id" component={Checkout} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <HeaderTemplate exact path="/profile" Component={Profile} />
              <Route exact path="/admin" component={AdminB} />
              <Route exact path="/" component={Home} />
              <Route exact path="/testfe" component={TestFE} />
            </Switch>
          </ScrollToTop>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
