var item1={
  name: "pineapple",
  price: 7.49,
};

var item2={
  name: "pen",
  price: 4.99
};

var item3={
  name: "pineapple-shaped pen",
  price: 12.99,
}

var shoppingList=[item1, item2, item3];

var total=0;

//PRINTED SHOPPING LIST
/*
shoppingList.forEach(function(itemDetails){
  console.log(itemDetails.name+", $"+itemDetails.price);
});
*/

//TOTAL SUM
/*
var total=0;

shoppingList.forEach(function(totalPrice){
  total+=totalPrice.price;
})
*/

/*
FOR LOOP

for (var i=0; i<shoppingList.length; i++) {
    total+=shoppingList[i].price;
}
*/

//EVERYTHING TOGETHER!
shoppingList.forEach(function(itemDetails){
  console.log(itemDetails.name+", $"+itemDetails.price);
  total+=itemDetails.price;
})

console.log("Your total is: $" +total);
