import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

const Cart = ({ cart, setCart, total, setTotal }) => {
  const handleRemoveItem = (groceryInfo, index) => {
    setTotal(total - groceryInfo.unitPrice);

    if (groceryInfo.quantity === 1) {
      const temporary = [...cart];
      temporary.splice(index, 1);
      setCart(temporary);
    } else {
      groceryInfo.quantity -= 1;
      const newCart = [...cart];
      setCart(newCart);
    }
  };

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
              onClick={() => handleRemoveItem(groceryInfo, index)}
            >
              <Badge bg="primary" pill>
                -
              </Badge>{" "}
              {groceryInfo.name}, Qty: {groceryInfo.quantity} - ($
              {groceryInfo.unitPrice} c/u)
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <h3 style={{ display: "flex", justifyContent: "left" }}>
        Total : {total}
      </h3>
    </div>
  );
};

export default Cart;
