let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

for(let item of order){
  let{itemName,quantity,unitPricePence}=item
  let totalPence=quantity*unitPricePence
  let totalPenceString=totalPence.toString()
  let pence=totalPenceString.slice(-2)
  let pounds=totalPenceString.slice(0,-2)
  let total=`${pounds}.${pence}`
  console.log(total);
  
}