
//BACK END LOGIC
function Pizza(size,crust,flavor,toppings,quantity,delivery){
  this.size=size;
  this.crust=crust;
  this.flavor=flavor;
  this.toppings=toppings;
  this.quantity=quantity
  this.delivery=delivery;
};
var sizes={
  Small:500,
  Medium:800,
  Large:1000
};
function Location(street,constituency,area){
  this.street=street;
  this.constituency=constituency;
  this.area=area;
}
// var toppingsCheap={
//   topping:["Onions","Diced Tomatoes","Black OLives"]
//   prices:50
// }
// var toppingsCheap={
//   name:['Onions','Diced Tomatoes',"Mixed Peppers","Black Olives","Pineapples"],
//   price:50
// }
// var toppingsExpensive={
//   name:["Extra Cheese","Fresh Mushrooms","Steak","Grilled Chicken","Italian Sausages","Beef","Beef Ham","Jalapeno Peppers","Beef Bacon","Pepperoni"],
//   price:100
// }
// var toppingsPrices={
//   name:toppings,
//   list:[toppingsCheap,toppingsExpensive]
// }
var toppingsPrices={
  "Onions":50,
  "Diced Tomatoes":50,
  "Mixed Peppers":50,
  "Black OLives":50,
  "Pineapples":50,
  "Extra Cheese":100,
  "Fresh Mushrooms":100,
  "Steak":100,
  "Grilled Chicken":100,
  "Italian Sausages":100,
  "Beef":100,
  "Beef Ham":100,
  "Jalapeno Peppers":100,
  "Beef Bacon":100,
  "Pepperoni":100,
}
var deliveryCost=100;
//USER INTERFACE
$(document).ready(function(){
  $("form.pizza-old").submit(function(event){

    event.preventDefault();

    $(".new-pizza").each(function(){
      var inputtedSize=$("input:radio[name=size]:checked").val();
      var inputtedCrust=$(".crust-type").val();
      var inputtedFlavor=$(".flavor-type").val();
      var inputtedToppings=[];
      $.each($("input[name='toppings']:checked"),function(){
        inputtedToppings.push($(this).val());
      })
      var inputtedQuantity=parseInt($("#number-pizzas").val());
      var choseDelivery=$("input:radio[name=delivery]:checked").val();
      var newPizza=new Pizza(inputtedSize,inputtedCrust,inputtedFlavor,inputtedToppings,inputtedQuantity,choseDelivery)
      var toppingsCost=0;
      inputtedToppings.forEach(function(inputtedTopping){
        toppingsCost+=parseInt(toppingsPrices.inputtedTopping)
      });

      if (choseDelivery==="delivery-yes"){
        var inputtedStreet=$("#street").val();
        var inputtedConstituency=$("#constituency").val();
        var inputtedArea=$("#area").val()
        var newLocation=new Location(inputtedStreet,inputtedConstituency,inputtedArea)
        $("span#delivery-location").text(newLocation.area)
        var pizzaCost= sizes.inputtedSize*inputtedQuantity + deliveryCost + toppingsCost*inputtedQuantity;

      } else {
        var pizzaCost= sizes.inputtedSize + toppingsCost;
      }
      $(".order-details").show();
      $("span#order-size").text(newPizza.size);
      $("span#order-crust").text(newPizza.crust);
      $("span#order-flavor").text(newPizza.flavor);
      $("span#order-toppings").text(newPizza.toppings);
      $("span#order-quantity").text(newPizza.quantity);
      $("#cost").text(pizzaCost);
    });

  })
})



// var sizes={
//   Small:500,
//   Medium:800,
//   Large:1000
// };


// for (var index=0;index<inputtedToppings.length;index+=1){
//   toppingsCost+=toppingsPrices["inputtedToppings"]
// }
// console.log(toppingsCost)
