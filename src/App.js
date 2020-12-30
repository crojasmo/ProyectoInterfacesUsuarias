import './App.css';
import Header from "./header";
import Footer from "./footer";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";




function App() {
  return (
    <div className="App">
<BrowserRouter>
            <Switch>
              <Route path="/:carr/prioridad">
                <Header/>
                 
              </Route>
              <Route path="/:carr/personal">
                <Header/>
              </Route>
              <Route path="/:carr">
                <Header/>
              </Route>
              <Route path="/prioridad/">
                <Redirect to="/INF/prioridad"/>
              </Route>
              <Route path="/personal/">
                <Redirect to="/INF/personal"/>
              </Route>
              <Route path="/">
                <Redirect to="/INF"/>
              </Route>
            </Switch>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
