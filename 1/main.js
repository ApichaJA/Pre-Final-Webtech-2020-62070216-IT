let requestURL = "https://dd-wtlab2020.netlify.app/pre-final/ezquiz.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    dataReportStatus(JSON.parse(request.responseText));
  }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
    var parent = document.querySelector('.song-container')
    console.log(data.tracks.items[0])
    data.tracks.items.forEach(element => {
        var mainBox = document.createElement("div");
        mainBox.setAttribute("class", "song-box");
        mainBox.innerHTML = `
        <div class="box-playlist-song">
        <div class="box-image">
        <img src="${element.album.images[0].url}">
        </div>
        <div class="box-content">
        <span>${element.album.name}</span>
        <span>Artist: ${element.artists[0].name}</span>
        <span>Release date: ${element.album.release_date}</span>
        <span>Available: ${element.available_markets.length}</span>
        </div>
        `
        parent.appendChild(mainBox)
    });
}
