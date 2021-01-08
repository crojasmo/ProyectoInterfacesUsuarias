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
      { name: "PlayStation 4", price: "100.000",description: "Consola recien comprada practicamente sin uso, por favor coordinar entrega via mensaje", images: ["https://http2.mlstatic.com/D_NQ_NP_609911-CBT44301935061_122020-O.jpg"], owner: 3},
      { name: "PlayStation 3", price: "80.000",description: "Consola muy usada, pero funciona super bien! Por favor coordinar entrega via mensaje", images: ["https://http2.mlstatic.com/D_NQ_NP_851533-MLC43239607820_082020-O.jpg"], owner: 0},
      { name: "PlayStation 2", price: "40.000",description: "Consola usada por mi primo, esta pirateada y el disco no funciona, por favor coordinar entrega via mensaje", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 0},
      { name: "PlayStation 1", price: "250.000",description: "Casi en perfecto estado, por favor coordinar entrega via mensaje", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 3},
      { name: "PlayStation 4", price: "160.000",description: "Consola recien comprada practicamente sin uso, por favor coordinar entrega via mensaje", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 2},
      { name: "PlayStation 4", price: "165.000",description: "Consola recien comprada practicamente sin uso, por favor coordinar entrega via mensaje", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 0},
      { name: "PlayStation 4", price: "120.000",description: "Consola recien comprada practicamente sin uso, por favor coordinar entrega via mensaje", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 2},
      { name: "Nintendo Switch", price: "423.000",description: "Consola recien comprada practicamente sin uso, por favor coordinar entrega via mensaje", images: ["https://cdn.pocket-lint.com/r/s/970x/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg?v1"], owner: 1},
      { name: "Autos de juguete", price: "15.000",description: "Juguetes de mi hijo, estan en buen estado y me gustaria que otro niño pueda disfrutar tambien", images: ["https://cdn.shopify.com/s/files/1/0273/6760/4324/products/102042304-1_600x.png?v=1596835341"], owner: 0},
      { name: "Estufa", price: "20.000",description: "Estufa a parafina, viene con el estanque medio lleno", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 2},
      { name: "Auto", price: "2.400.000",description: "Auto muy viejo, requiere mucho servicio tecnico", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 0},
      { name: "Tostadora", price: "180.000",description: "Modelo del año 2015, funciona bien, pero en mi casa ya no comemos pan, por lo que no tiene uso", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 3},
      { name: "Computador i3", price: "3000.000",description: "Es un PC de escritorio con procesador i3 de 6ta generación. tiene un disco duro de 1 Tera más una sssd de 200 GB. 16 gigas de ram y no tiene tarjeta grafica", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 1},
      { name: "Certificado de licenciatura falso", price: "50.000",description: "Tal cual lo que dice el titulo. los detalles los podemos conversar por mensajería", images: ["https://blog.es.playstation.com/tachyon/sites/14/2020/11/00-PlayStation-FAQ-featured-image-Cropped.jpg?resize=1088,612&crop_strategy=smart&zoom=1"], owner: 3},
    ]
    this.owners = [
      {name:"César Paulangelo", rating: "4.5", image: "https://www.gravatar.com/avatar/ce49c4d6f05fae900bf273022a789e94", phone: "+569 12345678", location:"RM"},
      {name:"Carlos Rojas", rating: "4.3", image: "https://www.gravatar.com/avatar/ce49c4d6f05fae900bf273022a789e94", phone: "+569 12345678", location:"RM"},
      {name:"Sebastián Gutierrez", rating: "4.7", image: "https://www.gravatar.com/avatar/ce49c4d6f05fae900bf273022a789e94", phone: "+569 12345678", location:"RM"},
      {name:"Felipe Sanchez", rating: "3.4", image: "https://www.gravatar.com/avatar/ce49c4d6f05fae900bf273022a789e94", phone: "+569 12345678", location:"Antofagasta"},
      {name:"Mateo Vajalar", rating: "4", image: "https://www.gravatar.com/avatar/ce49c4d6f05fae900bf273022a789e94", phone: "+569 12345678", location: "Copiapo"},
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
