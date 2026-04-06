const order = [
  { itemName: "Hot Cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

const allPrices = [];
for (const item of order) {
  const { itemName, quantity, unitPricePence } = item;
  const totalPence = quantity * unitPricePence;
  const totalPenceString = totalPence.toString();
  const pence = totalPenceString.slice(-2);
  const pounds = totalPenceString.slice(0, -2);
  const total = `${pounds}.${pence}`;
  allPrices.push(totalPence);
  const totalBill = allPrices.reduce((acc, curr) => acc + curr);
  console.log(totalBill);
}
