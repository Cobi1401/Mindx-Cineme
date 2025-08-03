const baseUrl = "https://image.tmdb.org/t/p/original/"


//movie information
let movieId=localStorage.getItem("choose")
let title = document.getElementById("title")
let backGroundImg = document.getElementById("back-ground-img")
let poster = document.getElementById("font-img")
let des = document.getElementById("des")
let date = document.getElementById("date")
console.log(movieId)

fetch(`https://api.themoviedb.org/3/movie/${movieId}`,
{
    method : 'GET',
    headers:
    {
       "Content-Type": "application/json",
       "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFlZmM5NzE5MjQ2ZjQ3ODg2MWI4YzNmMzc2NjU3OSIsIm5iZiI6MTczOTEwMDk5NS45NjMsInN1YiI6IjY3YTg5MzQzMWMwZjNhYmY4N2UwOGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPtqB-mNOCqkolqbDgdoIW1GmD0XqhwoC1CG2oargus"
    }
})
.then(respone=>respone.json())
.then(data=>
{
    console.log(data)


    //Load information
    backGroundImg.src = baseUrl + data.backdrop_path
    poster.src = baseUrl + data.poster_path
    title.innerText = data.original_title
    des.innerText = data.overview
    date.innerText += data.release_date

})