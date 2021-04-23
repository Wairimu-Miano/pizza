//ORDER DETAILS

//BACK END LOGIC
function Pizza(size,crust,flavor,toppings,quantity){
  this.size=size;
  this.crust=crust;
  this.flavor=flavor;
  this.toppings=[];
  this.quantity=quantity;
}
var sizes={
  Small:500,
  Medium:800,
  Large:1000;
}
var toppings={
  topping1:50,
  topping2:50,
  topping3:50,
  topping4:50,
  topping5:50,
  topping6:100,
  topping7:100,
  topping8:100,
  topping9:100,
  topping10:100,
  topping11:100,
  topping12:100,
  topping13:100,
  topping14:100,
  topping15:100,
}
Pizza.prototype.fullOrderDetails=function(){
  return "PIZZA SIZE: " + this.size + "\n PIZZA CRUST: " + this.crust + "\n PIZZA FLAVOR: " + this.flavor + "\n PIZZA TOPPINGS: " + this.toppings + "\n NUMBER OF PIZZAS: " + this.quantity 
}
//USER INTERFACE
$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    var inputtedSize=$("input:radio[name=size]:checked").val();
    var inputtedCrust=$(".crust-type").val();
    var inputtedFlavor=$(".flavor-type").val();
    var inputtedToppings=$("input[type=checkbox]:checked").val();
    var inputtedQuantity=$("#number-pizzas").val();
    var newPizza=Pizza(inputtedSize,inputtedCrust,inputtedFlavor,inputtedToppings,inputtedQuantity);

  })
})
