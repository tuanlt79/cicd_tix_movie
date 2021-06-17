import "./App.scss";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
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
import EditUser from "./Component/Admin/EditUser";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <Loading />
          <Switch>
            <Route exact path="/home" component={Home} />
            <HeaderTemplate exact path="/detail/:id" Component={Detail} />
            <Route exact path="/checkout/:id" component={Checkout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <HeaderTemplate exact path="/profile" Component={Profile} />
            <Route exact path="/admin" component={AdminB} />
            {/* <Route exact path="/admin/edituser/:id" component={EditUser} /> */}
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
