

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  $(document).ready(function(){
    $(".more_projects_button").click(function(){
      $(".hidden").fadeToggle();
      $(".hidden").css("display","flex");
      $(".hidden").css("flex-direction","column");
    })
 
  });