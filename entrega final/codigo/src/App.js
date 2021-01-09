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
      {name:"Carlos Rojas", rating: "4.3", image: "https://static.wikia.nocookie.net/ssbb/images/4/46/Kirby_en_Kirby_Star_Allies.png/revision/latest?cb=20180527161543&path-prefix=es", phone: "+569 12345678", location:"RM"},
      {name:"Sebastián Gutierrez", rating: "4.7", image: "https://slm-assets.secondlife.com/assets/21570626/view_large/41020339_1867137726704604_3642968071938768896_n.jpg?1536725381", phone: "+569 12345678", location:"RM"},
      {name:"Felipe Sanchez", rating: "3.4", image: "https://www.pdvg.it/wp-content/uploads/2017/11/Sanic-Sonic-Forces-PDV.jpg", phone: "+569 12345678", location:"Antofagasta"},
      {name:"Mateo Vajalar", rating: "4", image: "data:image/jpeg;base64,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", phone: "+569 12345678", location: "Copiapo"},
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
