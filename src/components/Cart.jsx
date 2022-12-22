import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

const Cart = ({ cart, setCart }) => {
  const handleRemoveItem = (index) => {
    const temporary = [...cart];
    temporary.splice(index, 1);
    setCart(temporary);
  };

  // const getQuantity = (cart)

  return (
    <div style={{ width: "40%" }}>
      <h1 style={{ display: "flex", justifyContent: "left" }}>Shopping cart</h1>
      <ListGroup style={{ width: "18rem" }}>
        {cart.map((groceryInfo, index) => {
          return (
            <ListGroup.Item
              style={{ display: "flex", justifyContent: "left" }}
              action
              key={index}
              onClick={() => handleRemoveItem(index)}
            >
              <Badge bg="primary" pill>
                -
              </Badge>{" "}
              {groceryInfo.name}, Qty: {groceryInfo.quantity} - ($
              {groceryInfo.unitPrice} c/u) {groceryInfo.test}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Cart;
