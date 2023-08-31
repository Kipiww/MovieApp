//DOM VARIABLES
const input = document.getElementById('inputField');
const searchBtn = document.getElementById('search');
const result = document.querySelector('.resultField');

searchBtn.addEventListener('click',() => {
    
    const movieName = input.value;
    const apiKey = `713fbff6`;  
    const apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;
   

    //if moviename  has no value
    if (movieName.length <= 0 || !movieName) {
        alert(`Please type a Movie`)
    } else {
        result.innerHTML = '<p>Searching...</p>';
       fetch(apiUrl).then(respo => respo.json()).then(data => {

             result.innerHTML =  `<div class="resultField">
             <div class="info">
               <img src=${data.Poster} class="imgDef">
               <div class="title">
                   <h1>${data.Title}</h1>
                   <div class="ratings">
                       <i class="fa-solid fa-star"></i>
                       <p>${data.imdbRating}</p>
                   </div>
                       <div class="date">
                           <p>${data.Rated}</p>
                           <p>${data.Year}</p>
                           <p>${data.Runtime}</p>
                       </div>
                       <div class="genre">
                           <p>${data.Genre.split(",").join("</p><p>")}</p>
                       </div>
                   </div>
               </div> 
   
             <div class="moreInfo">
               <div class="plot">
                   <h3>Plot:</h3>
                   <p>${data.Plot}</p>
               </div>
               <div class="cast">
                   <h3>Cast:</h3>
                   <p>${data.Actors}</p>
               </div>
           </div>`
       
       })
    }
})

