import React, { useState } from "react";

export default function FizzBuzz() {
  const [number, setNumber] = useState(100);

  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const fizzBuzzItems = [];

  for (let i = 1; i <= number; i++) {
    let value = "";
    let id = "";

    if (i % 3 === 0 && i % 5 === 0) {
      value = "FizzBuzz";
      id = "fizzbuzz";
    } else if (i % 3 === 0) {
      value = "Fizz";
      id = "fizz";
    } else if (i % 5 === 0) {
      value = "Buzz";
      id = "buzz";
    } else {
      value = i;
      id = "number";
    }

    fizzBuzzItems.push(
      <li key={i} id={id}>
        {value}
      </li>
    );
  }

  return (
    <>
      <h1>Fizz Buzz</h1>
      <label>
        Jusqu'à combien ?{" "}
        <input type="number" value={number} onChange={handleChange} />
      </label>
      <div>
        <ul id="numbers-list">{fizzBuzzItems}</ul>
      </div>
    </>
  );
}
