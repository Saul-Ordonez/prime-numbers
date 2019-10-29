$(document).ready(function() {
  $('form#group').submit(function(event) {
    event.preventDefault();
    var arrayList = [];
    var arrayMaxValue = parseInt($('#number').val());

    function arrayMaker(arrayMaxValue) {
      for (i = 2; i < arrayMaxValue; i++) {
        arrayList.push(i);
      }
    };

    function primeFinder() {
      arrayList.forEach(function(number1) {
        arrayList.forEach(function(number2) {
          // console.log(number1, number2);
          if (number2 % number1 === 0 && number2 !== number1) {

            for (i = 0; i < arrayList.length; i++) {
              if (arrayList[i] === number2) {
                arrayList.splice(i, 1);

              };
            };
          };
        });
      });
      return arrayList;
    };


    arrayMaker(arrayMaxValue);
    $("span").append(" " + primeFinder());
  });
});
