const shibeApi = "https://dog.ceo/api/breeds/image/random";

function generateDog() {
  fetch(shibeApi)
    .then((res) => res.json())
    .then((data) => document.getElementById("dog-wrapper").setAttribute("src", data.message));
}
