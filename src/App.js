import './App.css';
import Header from "./header";
import Footer from "./footer";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import 'smart-webcomponents-react/source/styles/smart.default.css';



function App() {
  return (
    <div className="App">
<BrowserRouter>
            <Switch>
              <Route path="/:carr/prioridad">
                <Header/>
                <Accordion>  
   <AccordionItem label="First Item">First Item Content.</AccordionItem>  
   <AccordionItem label="Second Item">Second Item Content.</AccordionItem>  
   <AccordionItem label="Third Item">Third Item Content.</AccordionItem>  
   <AccordionItem label="Fourth Item">Fourth Item Content.</AccordionItem>  
 </Accordion>  
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
