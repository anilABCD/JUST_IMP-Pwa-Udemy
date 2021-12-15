fetch("/data.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    console.log(html);
  });
