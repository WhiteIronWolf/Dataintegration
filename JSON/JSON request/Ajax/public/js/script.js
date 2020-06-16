const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
      let number = Math.floor(Math.random() * 151);
      console.log(number)
      const request = new XMLHttpRequest();
      request.open('GET', `https://pokeapi.co/api/v2/pokemon/${number}`, true);
      request.send();

      request.onload = function () {
            if (request.status == 200) {
                  let data = JSON.parse(request.responseText);
                  const pokemon = document.getElementById('pokemon');
                  pokemon.innerHTML = data.name
            } else {
                  console.log("error");
            }
      };
});