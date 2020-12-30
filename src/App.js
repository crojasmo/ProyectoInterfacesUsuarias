import logo from './logo.svg';
import './App.css';
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import 'smart-webcomponents-react/source/styles/smart.default.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Accordion>  
   <AccordionItem label="First Item">First Item Content.</AccordionItem>  
   <AccordionItem label="Second Item">Second Item Content.</AccordionItem>  
   <AccordionItem label="Third Item">Third Item Content.</AccordionItem>  
   <AccordionItem label="Fourth Item">Fourth Item Content.</AccordionItem>  
 </Accordion>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
