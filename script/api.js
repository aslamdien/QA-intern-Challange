const base_URL = "http://www.omdbapi.com/?apikey=412c9e3&i=tt3501632";

function getThor(url) {
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
}

getThor(base_URL);