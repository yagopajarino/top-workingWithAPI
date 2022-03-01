const img = document.querySelector("img");

let searchTerm = "messi"
let msg = document.querySelector("#loadingMsg")

function refreshGIF(term) {
    img.src = "./loading.gif"
    img.style.height = "100px"
    console.log(`https://api.giphy.com/v1/gifs/translate?api_key=Z38AVoAh7cQrJfg7B6r4x8F5gZFoK8vm&s=${term}`)
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Z38AVoAh7cQrJfg7B6r4x8F5gZFoK8vm&s=${term}`, {mode:"cors"})
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


