const APIKey = "xCKzllZ3eys3eJ1mkcdr1Cf2YNgIe8z9";

const searchInput = document.getElementById("search__input");
const getSearchTerm = function () {
  return searchInput.value;
};

const imageInput = document.getElementById("returned-image");
const displayImage = function (imageSrc) {
  imageInput.src = imageSrc;
};

const getImage = function (searchTerm) {
  let url = `https://api.giphy.com/v1/gifs/translate?api_key=${APIKey}&s=${searchTerm}`;
  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      displayImage(response.data.images.original.url);
      return response.data.images.original.url;
    })
    .catch(function (err) {
      console.log(err);
    });
};

const findAndReturnGif = function (term) {
  getImage(term);
};

document.getElementById("search__submit").addEventListener("click", () => {
  let searchTerm = getSearchTerm();
  findAndReturnGif(searchTerm);
});

const copyToClipBoard = function () {
  let text = imageInput.src;
  navigator.clipboard.writeText(text);
};
document.getElementById("copy").addEventListener("click", copyToClipBoard);

findAndReturnGif("search");
