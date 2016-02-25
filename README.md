# fcc-URL-Shortener
##### User stories:

I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

When I visit that shortened URL, it will redirect me to my original link.

###### Example creation usage:
```
https://shurli.herokuapp.com/new/https://www.google.com 
https://shurli.herokuapp.com/new/http://freecodecamp.com/news
```

###### Example creation output:
```
{ "original_url": "http://freecodecamp.com/news", "short_url": "https://shurli.herokuapp.com/4" }
```

#### Demo
Demo project hosted at Heroku. [Click here to redirect to it.](http://smaller.herokuapp.com)

## License

MIT License. [Click here for more information.](LICENSE.md)
