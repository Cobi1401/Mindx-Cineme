const baseUrl = "https://image.tmdb.org/t/p/original/"

//page name
let pageName = document.getElementById("pagename")


//movie information
let movieId=localStorage.getItem("choose")
let title = document.getElementById("title")
let backGroundImg = document.getElementById("back-ground-img")
let poster = document.getElementById("font-img")
let des = document.getElementById("des")
let date = document.getElementById("date")
let type = document.getElementById("type")
//console.log(movieId)

//cast information
let row = document.getElementById("row")
let casts = document.querySelectorAll(".actor")
console.log(casts)
let castImg 
let castName
let castRole 

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


    //Load film information
    pageName.innerText = data.original_title
    backGroundImg.src = baseUrl + data.backdrop_path
    poster.src = baseUrl + data.poster_path
    title.innerText = data.original_title
    des.innerText = data.overview
    date.innerText += data.release_date
    for(let i=0 ; i < data.genres.length ; ++i)
    {
        //console.log(data.genres[i])
        let child =document.createElement("span")
        child.innerText = data.genres[i].name;
        type.appendChild(child)
    }
    
   
})



fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`,
{
    headers:
    {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFlZmM5NzE5MjQ2ZjQ3ODg2MWI4YzNmMzc2NjU3OSIsIm5iZiI6MTczOTEwMDk5NS45NjMsInN1YiI6IjY3YTg5MzQzMWMwZjNhYmY4N2UwOGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wPtqB-mNOCqkolqbDgdoIW1GmD0XqhwoC1CG2oargus"
    }
})
.then(respone=>respone.json())
.then(data=>
{
    console.log(data)
    //Load cast information
    for(let i=0 ; i<=9 ; ++i)
    {
        let actor = document.createElement("div")
        actor.className = "actor"
        castImg = document.createElement("img")
        castName = document.createElement("p")
        castName.className = "cast-name"
        castRole = document.createElement("p")
        castRole.className = "cast-role"

        castImg.src = baseUrl + data.cast[i].profile_path
        castName.innerText = data.cast[i].name
        castRole.innerText = data.cast[i].character
        actor.appendChild(castImg)
        actor.appendChild(castName)
        actor.appendChild(castRole)
        row.appendChild(actor)
    }
})