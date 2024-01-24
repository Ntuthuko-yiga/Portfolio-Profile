$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle')
    });

});

let calcScrollValue = () => {
    let rocket = document.getElementById("rocket");
    let rocketValue = document.getElementById("rocket-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  
    if (pos > 100) {
      rocket.style.display = "grid";
    } else {
      rocket.style.display = "none";
    }
  
    rocket.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  
    let scrollValue = Math.round((pos * 100) / calcHeight);
    rocketValue.className = "";
    setTimeout(() => {
      rocketValue.className = "filled";
    }, 0);
  
    rocketValue.style.background = `conic-gradient(#48cae4 ${scrollValue}%, #ffffff ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  