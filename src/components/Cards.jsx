import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          {props.name} ({props.year})
        </Card.Title>
        <Card.Title>{props.rating}</Card.Title>
      </Card.Body>
    </Card>

    // <div>
    //   <h1>{props.name}</h1>
    //   <h1>{props.year}</h1>
    //   <h2>{props.rating}</h2>
    //   <img src={props.image} alt="movie cover" />
    // </div>
  );
};

export default Cards;
