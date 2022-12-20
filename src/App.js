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

function App() {
  let name = "Pepe";
  return (
    <div className="App">
      <Welcome name={name} />
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
            name={"Pito peludo"}
            year={2019}
            image={
              "https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
            }
            rating="No la vi"
          />
          <Cards
            name={"Ganaron la 3ra"}
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
    </div>
  );
}

export default App;
