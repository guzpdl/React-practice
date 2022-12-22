import React from "react";
import groceries from "../data/groceries";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

const Products = ({ cart, setCart, total, setTotal }) => {
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
                const itemInCart = cart.filter((item) => {
                  return item.name === groceryInfo.name;
                });
                if (itemInCart.length > 0) {
                  groceryInfo.quantity += 1;
                  const newCart = [...cart];
                  setCart(newCart);
                  setTotal(total + groceryInfo.unitPrice);
                } else {
                  groceryInfo.quantity = 1;
                  setCart([...cart, groceryInfo]);
                  setTotal(total + groceryInfo.unitPrice);
                }
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
