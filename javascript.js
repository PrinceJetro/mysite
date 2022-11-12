  function display(){
    document.querySelector(".hidden").style.cssText = `
    display: flex; 
    flex-direction: column;
  `
    
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }