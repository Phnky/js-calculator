//globals
var a;

//functions
function appendToDisplay(a){
  $("#calc-display").val(
    function(){
      return $("#calc-display").val()+a;
    }
  );
}

$("#button-1").click(
  function(){
    appendToDisplay(1);
  }
);
$("#button-2").click(
  function(){
    appendToDisplay(2);
  }
);
$("#button-3").click(
  function(){
    appendToDisplay(3);
  }
);
$("#button-4").click(
  function(){
    appendToDisplay(4);
  }
);
$("#button-5").click(
  function(){
    appendToDisplay(5);
  }
);
$("#button-6").click(
  function(){
    appendToDisplay(6);
  }
);
$("#button-7").click(
  function(){
    appendToDisplay(7);
  }
);
$("#button-8").click(
  function(){
    appendToDisplay(8);
  }
);
$("#button-9").click(
  function(){
    appendToDisplay(9);
  }
);
