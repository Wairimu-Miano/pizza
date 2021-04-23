//ORDER DETAILS

//BACK END LOGIC
function Pizza(delivery){
  this.orders=[];
  this.delivery=delivery;
};
function Order(size,crust,flavor,toppings,quantity){
  this.size=size;
  this.crust=crust;
  this.flavor=flavor;
  this.toppings=toppings;
  this.quantity=quantity;
}
Order.prototype.fullOrder=function(){
  return this.size + ", " + this.crust + ", " + this.flavor + ", " + this.toppings + ", " + this.quantity;
}
var sizes={
  Small:500,
  Medium:800,
  Large:1000
};
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
//USER INTERFACE
$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    var choseDelivery=$("input:radio[name=delivery]:checked").val();
    var newPizza=new Pizza(choseDelivery)
    $(".new-pizza").each(function(){
      var inputtedSize=$("input:radio[name=size]:checked").val();
      var inputtedCrust=$(".crust-type").val();
      var inputtedFlavor=$(".flavor-type").val();
      var inputtedToppings=new Array();
      $("input[name=toppings]:checked").each(function(){
        inputtedToppings.push(this.value);
      });
      var inputtedQuantity=$("#number-pizzas").val();
      var newOrder=new Order(inputtedSize,inputtedCrust,inputtedFlavor,inputtedToppings,inputtedQuantity);
      newPizza.orders.push(newOrder);
      newPizza.orders.forEach(function(order){
        $("ul#order-details").append("<li>PIZZA SIZE: " +order.size+"<br>PIZZA CRUST: " + order.crust + "<br>PIZZA FLAVOR " + order.flavor + "<br>PIZZA TOPPINGS: " + order.toppings + "<br>NUMBER OF PIZZAS: " +order.quantity + "</li>" )
      });
    });
  })
})
