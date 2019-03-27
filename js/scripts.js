// back-end logic

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (front-end) logic

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});

// var result1 = add(number1, number2);


// var result2 = subtract(number1, number2);
// alert(result2);
//
// var result3 = multiply(number1, number2);
// alert(result3);
//
// var result4 = divide(number1, number2);
// alert(result4);
