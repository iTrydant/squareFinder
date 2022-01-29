"use strict";

const number = Number(
  prompt("Enter the number you want to find the square of: ")
);

switch (number) {
  default:
    document.write("Please enter an number!");
    break;
}

document.write(`The square of ${number} is ${number * number}`);
