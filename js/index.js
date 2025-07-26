console.log("JS is running")

let navbar = document.getElementById("navbar");



window.addEventListener("scroll", function() 
{
   if(window.scrollY > 0)
   {
        navbar.style.backgroundColor = "rgb(34, 34,34)";
   }
   else
   {
        navbar.style.backgroundColor = "transparent"; 
   }
});