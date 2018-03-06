var safeSearch = false
var userWallpapers = {}
var imageList = ""
var wallpapers = []
var count = 5
var imageTemplate = ""
var userWallpapers = ""
const users = [
  "keithpitt",
  "cyric",
  "starhua628",
  "l1dge",
  "Kids1201",
  "Sebuhi"

]

loadPage()

function loadPage() {
  document.getElementById('main').innerHTML = ""
  getWallpapers(users, count)
}

function getWallpapers(users, count) {
  users.forEach((user, index) => {
    wallpapersAPI(user)
      .then(userWallpapers => {
        userWallpapers.forEach((wallpaper, index) => {
          if (count - 1 >= index) {
            wallpapers.push(wallpaper.image)
          }
        })
        loadImages(wallpapers)
      })
  })

}

// get wallpapers
function wallpapersAPI(user) {
  let apiURL = `https://api.desktoppr.co/1/users/${user}/wallpapers?safe_filter=${safeSearch}`
  return axios.get(apiURL)
    .then(response => {
      userWallpapers = response.data.response
      //console.log(response.data);
      removeDuplicates(userWallpapers)
      shuffle(userWallpapers)
      return userWallpapers
    })
    .catch(error => {
      console.log(error)
    })
}

// load wallpapers onto the page - images() called by wallpapersAPI(user)
function loadImages() {
  //console.log(wallpapers)
  imageList = ""
  document.getElementById('main').innerHTML =
    wallpapers.forEach((wallpaper, index) => {
      //console.log(wallpaper);
      imageTemplate = `
   <a id="${index}" href="${wallpaper.url}" data-src="${wallpaper.url}">
     <img src="${wallpaper.thumb.url}"/>
   </a>
   `
      // main.innerHTML += imageTemplate
      imageList += imageTemplate
    })
  document.getElementById('main').innerHTML = imageList
  $('.parallax').parallax()
  document.getElementById('h-banner').src = wallpapers[5].preview.url
  lightGallery(document.getElementById('main'), {
    mode: 'lg-fade',
    download: false
  })

}

function removeDuplicates(array) {
  array.reduce((acc, val) => {
    !acc.includes(val) ? acc.push(val) : null
    return acc;
  }, [])
}

function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter)
    // Decrease counter by 1
    counter--
    // And swap the last element with it
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array;
}

function toggleSafeSearch(event) {
  userWallpapers = {}
  imageList = ""
  wallpapers = []
  imageTemplate = ""
  userWallpapers = ""
  // if (!safeSearch) {
  //   safeSearch = "all"
  //   console.log("clicked-result ", safeSearch)
  // }
  // else {
  //   safeSearch = false
  //   console.log("clicked-result ", safeSearch)
  // }
  safeSearch = (safeSearch ? false : "all")
  loadPage()
}

$(document).ready(function() {
  // $('.parallax').parallax()

})
$(window).on("load", () => {

})
