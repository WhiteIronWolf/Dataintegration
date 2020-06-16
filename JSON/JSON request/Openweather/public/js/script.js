const request = new XMLHttpRequest();
request.open('GET', 'movies.xml', true);
request.send();

request.onload = function () {
      if (request.status == 200) {
            let data = request.responseXML;
            console.log(data);
      } else {
            console.log("error");
      }
};