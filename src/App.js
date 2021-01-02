import './App.css';
import Header from "./Components/header";
import Footer from "./Components/footer";
import Trueque from "./Components/Trueque"
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
             
              <Route path="/trueque">
                <Header/>
                <Trueque/>
                </Route>
              
              <Route path="/">
              <Header/>
              </Route>
            </Switch>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
