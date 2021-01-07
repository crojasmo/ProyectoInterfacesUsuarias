import './App.css';
import Header from "./Components/header";
import Footer from "./Components/footer";
import Trueque from "./Components/Trueque";
import Vendedor from "./Components/vendedor";
import Contacto from "./Components/Contacto";
import Compra from "./Components/Compra";
import Comentario from "./Components/comentario";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Container} from "react-bootstrap";
import Item from "./Components/item";
import Home from "./Components/home";




function App() {
  return (
    <div className="App">
<BrowserRouter>
            <Switch>
             
              <Route path="/trueque">
                <Header/>
                <Trueque/>
                </Route>
                <Route path="/vendedor">
                <Header/>
                <Vendedor/>
                </Route>

                <Route path="/contacto">
                <Header/>
                <Contacto/>
                </Route>

                <Route path="/compra">
                <Header/>
                <Compra/>
                </Route>

              <Route path="/">
                <Header/>
                <Home/>
              </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
