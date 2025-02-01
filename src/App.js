import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleOperation = (op) => {
    if (firstNumber === "0" && currentNumber !== "") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation(op);
    } else {
      let result;
      switch (operation) {
        case "+":
          result = handleSumNumbers();
          break;
        case "-":
          result = handleMinusNumbers();
          break;
        case "*":
          result = handleMultiplyNumbers();
          break;
        case "/":
          result = handleDivideNumbers();
          break;
        default:
          result = currentNumber;
          break;
      }
      setCurrentNumber(String(result));
      setOperation("");
    }
  };

  const handleSumNumbers = () => {
    return Number(firstNumber) + Number(currentNumber);
  };

  const handleMinusNumbers = () => {
    return Number(firstNumber) - Number(currentNumber);
  };

  const handleMultiplyNumbers = () => {
    return Number(firstNumber) * Number(currentNumber);
  };

  const handleDivideNumbers = () => {
    return Number(firstNumber) / Number(currentNumber);
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleOperation("+");
          break;
        case "-":
          handleOperation("-");
          break;
        case "*":
          handleOperation("*");
          break;
        case "/":
          handleOperation("/");
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={() => handleOperation("*")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
