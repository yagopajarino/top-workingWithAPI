const img = document.querySelector("img");

let searchTerm = "messi"
let msg = document.querySelector("#loadingMsg")
let api = process.env.api

function refreshGIF(term) {
    img.src = "./loading.gif"
    img.style.height = "100px"
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api}&s=${term}`, {mode:"cors"})
    .then(function (response){
        return response.json()
    })
    .then(function(response) {
        img.src = response.data.images.original.url
        img.style.height = "500px"
    });
}

let refBtn = document.querySelector("#refreshButton")
refBtn.addEventListener("click", function(){
    let input = document.querySelector("#searchTerm").value
    if (input !== "") {
        refreshGIF(input)
    }
    else {refreshGIF(searchTerm)}
})

window.onload = (()=> {refreshGIF(searchTerm)})


