# image-api-smashin

####  gets images from multiple rest apis, shuffles then displays images and a random wallpaper.


#### Check out the [demo](https://image-api-smashin.herokuapp.com/)

```
git clone https://github.com/jasenmichael/image-api-smashin.git

cd express-gallery-server/public

live-server
```

![screenshot](.png)


#### todo & scope
* create http client app that
  * returns data from multiple apis
  * combines data from apis inside page.

* scope - create a search function for each api that takes a search term
  * searched each api
  * return data for each api search
  * combine data from each api result into array
  * shuffle array
  * populate page with array
