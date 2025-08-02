console.log("JS is running")
const baseUrl = "https://image.tmdb.org/t/p/original/"
let movies= document.querySelectorAll(".movie-item")
let titles = document.querySelectorAll(".title")
let navbar = document.getElementById("navbar")
let maintTitle = document.getElementById("main-title")
let des = document.getElementById("des")
let backGroundImg = document.getElementById("back-ground-img")
let poster = document.getElementById("font-img")
let trendingMovies = document.querySelectorAll(".movie-item")
let movieImg;
let title;





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




fetch('https://api.themoviedb.org/3/movie/popular',
     {
          method: "GET",
          headers:
          {
               "Content-Type": "application/json",
               "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFlZmM5NzE5MjQ2ZjQ3ODg2MWI4YzNmMzc2NjU3OSIsIm5iZiI6MTczOTEwMDk5NS45NjMsInN1YiI6IjY3YTg5MzQzMWMwZjNhYmY4N2UwOGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPtqB-mNOCqkolqbDgdoIW1GmD0XqhwoC1CG2oargus"
          }

     })
.then(respone=> respone.json())
.then(data=>{
     console.log(data.results[0])
     maintTitle.innerText=data.results[0].original_title
     des.innerText = data.results[0].overview
     backGroundImg.src= baseUrl + data.results[0].backdrop_path
     poster.src = baseUrl + data.results[0].poster_path
     console.log(data.results[0].backdrop_path)

     trendingMovies.forEach((movie, index)=>
     {
          movieImg= movie.getElementsByTagName("img")
          movieImg[0].src= baseUrl + data.results[index].poster_path
          title = movie.getElementsByTagName("p")
          title[0].innerText = data.results[index].original_title
     });

})
.catch(error=>console.log("Lỗi rồi"))



const swiper = new Swiper('.swiper', {
  
  spaceBetween : 40,
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  autoplay:
  {
    delay:2500,
    disableOnInteration:true,
  },
  speed : 1000,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


movies.forEach((movie)=>
{
     movie.addEventListener("click",()=>
     {
          window.location.href = "info.html"
     });
});