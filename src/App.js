import './App.css';
import React from "react";
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
import Publicar from "./Components/publicar";




class App extends React.Component{

  constructor(props) {
    super(props);

    this.productData = [
      { name: "PlayStation 5", price: "150.000",description: "Consola recien comprada practicamente sin uso, por favor coordinar entrega via mensaje", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 0},
      { name: "Nintendo Switch", price: "423.000",description: "Consola recien comprada practicamente sin uso, por favor coordinar entrega via mensaje", images: ["https://cdn.pocket-lint.com/r/s/970x/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg?v1"], owner: 1},
    ]
    this.owners = [
      {name:"César Paulangelo", rating: "5", image: "https://www.gravatar.com/avatar/ce49c4d6f05fae900bf273022a789e94", phone: "+569 12345678", location:"RM"},
      {name:"Otra persona", rating: "4", image: "https://www.gravatar.com/avatar/ce49c4d6f05fae900bf273022a789e94"},
    ]
    let id = 0
    this.state = {
      product: this.productData[id],
      owner: this.owners[this.productData[id].owner]
    }
    this.setProductAndOwner = this.setProductAndOwner.bind(this)
  }

  setProductAndOwner(product) {
    console.log(product)
    this.setState({product, owner:this.owners[product.owner]})
  }

  render() {
    return <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/trueque">
            <Header/>
            <Trueque productData={this.productData} product={this.state.product} owner={this.state.owner}/>
          </Route>

          <Route path="/vendedor">
            <Header/>
            <Vendedor owner={this.owners} productData={this.productData}/>
          </Route>

          <Route path="/contacto">
            <Header/>
            <Contacto owner={this.state.owner}/>
          </Route>

          <Route path="/compra">
            <Header/>
            <Compra owner={this.state.owner} productData={this.state.product}/>
          </Route>

          <Route path="/publicar">
            <Header/>
            <Publicar/>
          </Route>

          <Route path="/">
            <Header/>
            <Home setProduct={this.setProductAndOwner} productData={this.productData}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  };
}

export default App;
