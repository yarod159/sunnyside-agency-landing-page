
 let hamburger = document.getElementById("hamburger");

 let menu = document.querySelector(".item-nav-responsive-movil");


 hamburger.addEventListener("click", function() {

   if (menu.style.display === "none") {

     menu.style.display = "block";
    
   } else {

     menu.style.display = "none";
    
   }
 });