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
        result.innerHTML = '';
       fetch(apiUrl).then(respo => respo.json()).then(data => {
        console.log(data)
       
             result.innerHTML = ` <img src=${data.Poster}>    
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
                    <p>Crime</p>
                    <p>Drama</p>
                </div>
            </div>
           
        </div>
       `
       })
    }
    


})

