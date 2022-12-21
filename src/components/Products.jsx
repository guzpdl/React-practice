import React from "react";
import groceries from "../data/groceries";
import ListGroup from "react-bootstrap/ListGroup";

const Products = ({ cart, setCart }) => {
  return (
    <div style={{ width: "40%" }}>
      <h1>Available products</h1>
      <ListGroup style={{ width: "18rem" }}>
        {groceries.map((groceryInfo) => {
          return (
            <ListGroup.Item
              action
              key={groceryInfo.id}
              onClick={() => {
                setCart([...cart, groceryInfo]);
              }}
            >
              {groceryInfo.name} (${groceryInfo.unitPrice} c/u)
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Products;
