import React from "react";
import groceries from "../data/groceries";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

const Products = ({ cart, setCart }) => {
  return (
    <div style={{ width: "40%" }}>
      <h1 style={{ display: "flex", justifyContent: "left" }}>
        Available products
      </h1>
      <ListGroup style={{ width: "18rem" }}>
        {groceries.map((groceryInfo) => {
          return (
            <ListGroup.Item
              style={{ display: "flex", justifyContent: "left" }}
              action
              key={groceryInfo.id}
              onClick={() => {
                setCart([...cart, groceryInfo]);
              }}
            >
              <Badge bg="primary" pill>
                +
              </Badge>{" "}
              {groceryInfo.name} (${groceryInfo.unitPrice} c/u)
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Products;
