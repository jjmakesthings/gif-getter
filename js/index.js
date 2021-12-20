const APIKey = "xCKzllZ3eys3eJ1mkcdr1Cf2YNgIe8z9";

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
      displayImage(
        "https://media4.giphy.com/media/25RIHlF7bXOFhJOhfn/giphy.gif?cid=399005b5efce6c7c91d859e023a57fb5a8cb2e3a9105c3ec&rid=giphy.gif&ct=g"
      );
    });
};

// handle form submission
const form = document.getElementById("search");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = form.elements[0].value;
  if (typeof searchTerm == "string") {
    getImage(searchTerm);
  }
});

const copyToClipBoard = function () {
  let text = imageInput.src;
  navigator.clipboard.writeText(text);
};
document.getElementById("copy").addEventListener("click", copyToClipBoard);

getImage("search");
