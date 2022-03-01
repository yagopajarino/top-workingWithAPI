const img = document.querySelector('img');

const searchTerm = 'messi';
const api = "HZeSNQSr2VPJM5lLlQr7DqDtQr5Hs8yL"; // Beta API key

function refreshGIF(term) {
  img.src = loadingImg;
  img.style.height = '100px';
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api}&s=${term}`, {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
      img.style.height = '500px';
    });
}

const refBtn = document.querySelector('#refreshButton');
refBtn.addEventListener('click', () => {
  const input = document.querySelector('#searchTerm').value;
  if (input !== '') {
    refreshGIF(input);
  } else {
    refreshGIF(searchTerm);
  }
});

window.onload = () => {
  refreshGIF(searchTerm);
};
