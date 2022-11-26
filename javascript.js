

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
$(document).ready(function(){
  title()
})
const named=["Jephthah"];
name_index=0;
function title(){
  name_index = name_index+1;
  document.getElementById("jephthah").innerHTML=`${named[0].slice(0, name_index)} `;
  if(name_index == named[0].length){
    name_index = 0
  }

  setTimeout(() => {
    title()
  }, 400);
  
}
