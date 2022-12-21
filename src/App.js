import Welcome from "./components/Welcome.jsx";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Description from "./components/Description";
import Persona from "./components/Persona.jsx";
import Cards from "./components/Cards.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Pokemon from "./components/Pokemon.jsx";
import Multiplicator from "./components/Multiplicator.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import { useState } from "react";

function App() {
  // let name = "Pepe";

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      {/* <Welcome name={name} />
      <Title />
      <Subtitle />
      <Description name={name} />
      <Persona name={name} age={18} />
      <Container>
        <Row>
          <Cards
            name={"Spiderman"}
            year={2009}
            image={
              "https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg"
            }
            rating="bueno"
          />
          <Cards
            name={"Batman"}
            year={2019}
            image={
              "https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
            }
            rating="No la vi"
          />
          <Cards
            name={"Batman y Robin"}
            year={2022}
            image={
              "https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"
            }
            rating="Regular"
          />
        </Row>
      </Container>
      <Container>
        <Row>
          <Pokemon />
        </Row>
      </Container>
      <Container>
        <Multiplicator />
      </Container> */}
      <Container>
        <Row>
          <Products cart={cart} setCart={setCart} />
          <Cart cart={cart} setCart={setCart} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
