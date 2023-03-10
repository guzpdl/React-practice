import React from "react";
import { Card } from "react-bootstrap";
import pokemons from "../data/pokemons";

const Pokemon = () => {
  return (
    <>
      {pokemons.map((pokemonInfo) => {
        return (
          <Card key={pokemonInfo.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{pokemonInfo.name}</Card.Title>
              <Card.Img variant="top" src={pokemonInfo.image} />
              <Card.Text>{pokemonInfo.type}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Pokemon;
