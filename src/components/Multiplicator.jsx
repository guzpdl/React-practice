import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Multiplicator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <h1>Multiplicator</h1>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setResult(number1 * number2);
        }}
      >
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Number 1 </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            type="number"
            value={number1}
            onChange={(event) => setNumber1(event.target.value)}
          />
        </InputGroup>
        <br />
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Number 2</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            type="number"
            value={number2}
            onChange={(event) => setNumber2(event.target.value)}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Multiply
        </Button>
      </Form>

      <p>El resultado es {result}</p>
    </>
  );
};

export default Multiplicator;
