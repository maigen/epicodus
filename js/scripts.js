var factorial = function(number) { 
  if (number === 0) {
    return 1;
  } else if (number < 0 || number % 1 != 0 || number === NaN) {
    return false; 
  } else {
    if (number > 0) {  
      return number * factorial(number - 1);
    };
  };
}; 

$(document).ready(function() {
  $("form#factorial-form").submit(function(event) {
    var inputNumber = $("input#number").val();

    var result = factorial(inputNumber);

    $(".factorial").text(result);
    this.reset();
    event.preventDefault();
  })
})


