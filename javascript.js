

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
 
$(document).ready(function(){
  hmm()
})
  let career=["Junior Full Stack Developer ","Senior Software Engineer"];
  let index =0;
  job=0
 
  function hmm(){
    
   
    document.getElementById("upcoming").innerHTML=`${career[job].slice(0 ,index)} `;
   
    index= index +1;
    if(index > career[job].length){
      job = job+1;
      index= 0;
      }
      if(job === career.length){
        job=0;
      }

    setTimeout(() => {
      hmm()
    }, 300);
    
}



