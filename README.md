# fcc-URL-Shortener
##### User stories:

<ul>
<li>I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

<li>If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

<li>When I visit that shortened URL, it will redirect me to my original link.
</ul>

###### Example creation usage:
```
https://smaller.herokuapp.com/new/https://www.google.com 
https://smaller.herokuapp.com/new/http://freecodecamp.com/news
```

###### Example creation output:
```
{ "original_url": "http://freecodecamp.com/news", "short_url": "https://smaller.herokuapp.com/4" }
```

#### Demo
Demo project hosted at Heroku. [Click here to redirect to it.](http://smaller.herokuapp.com)

## License

MIT License. [Click here for more information.](LICENSE.md)
