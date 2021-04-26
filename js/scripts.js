
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
  small:450,
  medium:750,
  large:900
}
var crusts={
  crusty:50,
  stuffed:100,
  gluttenFree:150
}
function Location(street,constituency,area){
  this.street=street;
  this.constituency=constituency;
  this.area=area;
}
Location.prototype.fullLocation=function(){
  return this.street + ", " + this.area + ", " + this.constituency;
}
var toppingsCheap={
  name:['Onions','Diced Tomatoes','Mixed Peppers','Black Olives','Pineapples'],
  price:50
}
var toppingsExpensive={
  name:['Extra Cheese','Fresh Mushrooms','Steak','Grilled Chicken','Italian Sausages','Beef','Beef Ham','Jalapeno Peppers','Beef Bacon','Pepperoni'],
  price:100
}
var deliveryCost=100;



//USER INTERFACE
$(document).ready(function(){

  //Only show delivery location if user selects yes
  $("input[name=delivery]").change(function(){
    if ($("input:radio[name=delivery]:checked").val()==="delivery-yes"){
      $("#input-location").show();
      $('#street').attr('required', '')
      $('#constituency').attr('required', '')
      $('#area').attr('required', '')
    } else{
      $("#input-location").hide();
      $('#street').removeAttr('required')
      $('#constituency').removeAttr('required')
      $('#area').removeAttr('required')
    }
  });
  $("input[name=delivery]").trigger("change");

  //Actions when form is submitted
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
      //TOPPINGS COST
      var toppingsCost=0
      inputtedToppings.forEach(function(inputtedTopping){
        if (toppingsCheap['name'].includes(inputtedTopping)===true){
          var cost=toppingsCheap.price
          toppingsCost+=cost
        } else if (toppingsExpensive['name'].includes(inputtedTopping)===true){
          var cost=toppingsExpensive.price
          toppingsCost+=cost
        } else{
          var cost=0;
          toppingsCost+=cost
        }
      });

      if (choseDelivery==="delivery-yes"){
        var inputtedStreet=$("#street").val();
        var inputtedConstituency=$("#constituency").val();
        var inputtedArea=$("#area").val()
        var newLocation=new Location(inputtedStreet,inputtedConstituency,inputtedArea)
        $("span#delivery-location").text(newLocation.fullLocation())
        var pizzaCost= sizes[inputtedSize]*inputtedQuantity + deliveryCost + toppingsCost*inputtedQuantity + crusts[inputtedCrust]*inputtedQuantity;
        $("span#total-cost").text("KSH. " + pizzaCost);
        alert("Thank you for ordering with us, your pizza will be delivered to " + newLocation.fullLocation() + " shortly")
      } else {
        $("span#delivery-location").text("None_Pick-Up")
        var pizzaCost= sizes[inputtedSize]*inputtedQuantity + toppingsCost*inputtedQuantity + crusts[inputtedCrust]*inputtedQuantity;
        $("span#total-cost").text("KSH. " + pizzaCost);
        alert("Thank you for ordering with us, one of our attendants will contact you to collect your pizza")
      }
      $("#charges").slideDown();
      $(".order-details").show();
      $("span#order-size").text(newPizza.size);
      $("span#order-crust").text(newPizza.crust);
      $("span#order-flavor").text(newPizza.flavor);
      if (newPizza.toppings.length===0){
        $("span#order-toppings").text("None")
      } else{
        $("span#order-toppings").text(newPizza.toppings)
      }
      $("span#order-quantity").text(newPizza.quantity);
    });
    function  resetFields(){
      $("input:radio[name=size]:checked").val()
      $(".crust-type").val()
      $(".flavor-type").val()
      $("#number-pizzas").val()
      $("input[name='toppings']:checked").val()
      $("input:radio[name=delivery]:checked").val()
      $("#street").val()
      $("#constituency").val()
      $("#area").val()

    }
  });
});
