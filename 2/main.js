let requestURL = "https://dd-wtlab2020.netlify.app/pre-final/ezquiz.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    dataReportStatus(JSON.parse(request.responseText));
  }
};
request.open("GET", requestURL, true);
request.send();

var song = []

function dataReportStatus(data) {
    var parent = document.querySelector('.song-container')
    console.log(data.tracks.items[0])
    data.tracks.items.forEach(element => {
      song.push(element)
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


document.querySelector('.find-song').addEventListener('click', function(){
  var nothing = 0
  var textSong = document.getElementById('searchsong').value
  var notfound = document.querySelector('.notfound')
  document.querySelector('.song-container').remove()
  var parent = document.createElement('div')
  parent.setAttribute('class', 'song-container')
  document.querySelector('.container-fluid').appendChild(parent)
    for (let index = 0; index < song.length; index++) {
      if(song[index].album.name === textSong){
      var mainBox = document.createElement("div");
      mainBox.setAttribute("class", "song-box");
      mainBox.innerHTML = `
      <div class="box-playlist-song">
      <div class="box-image">
      <img src="${song[index].album.images[0].url}">
      </div>
      <div class="box-content">
      <span>${song[index].album.name}</span>
      <span>Artist: ${song[index].artists[0].name}</span>
      <span>Release date: ${song[index].album.release_date}</span>
      <span>Available: ${song[index].available_markets.length}</span>
      </div>
      `
      parent.appendChild(mainBox)
    }
    else{
      nothing+=1
    }
    if(nothing === song.length)
      console.log(nothing)
      notfound.innerHTML = 'Not Found'
  }
})