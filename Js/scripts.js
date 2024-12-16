console.log("Hello! Welcome to my Portfolio Site")

function menuToggle() {
}
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
  }
  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    x.className += ' responsive';
  }
  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
  
  $('#click_advance').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fas fa-bars fas fa-x");
  });