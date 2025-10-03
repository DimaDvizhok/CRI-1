// const username = 'Dmitriy';
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// const product = 'Repair droфаіафвфвпф';
// console.log(product[product.length - 1]);

// console.log(Number.parseInt('5df'));
// console.log(Math.random());

// console.log((0.1 + 0.2).toFixed(6) === (0.3).toFixed(6));
// function makeMessage(username) {
//   console.log(`Hello ${username}`);
// }

// const cviz = makeMessage('Jacob');
// console.log(cviz);

// const value = "I'm a global variable";
// function foo() {
//   console.log(value);
// }
// foo();
// console.log(value);

//задача №1
function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

//задача №2
function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));

//задача №3
function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2
  );
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
