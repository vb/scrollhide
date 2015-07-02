# jQuery Scrollhide [![Build Status](https://travis-ci.org/viktorbergehall/scrollhide.svg?branch=master)](https://travis-ci.org/viktorbergehall/scrollhide) ![Bower Version](https://badge.fury.io/bo/jquery-scrollhide.svg)

### Hide element when scrolling down, show when scrolling up

Design pattern from Google Chrome and Safari mobile browsers.
[Demo for mobile device](http://viktorbergehall.github.io/scrollhide/)

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.scrollhide.min.js"></script>
	```

3. Style the element/elements:

    ```html
    <nav style="position: fixed; top: 0; width: 100%; height: 50px;"></nav>
    ```

4. Call the plugin:

	```javascript
	$("nav").scrollhide();
	```

## Structure

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.scrollhide.js
│   └── jquery.scrollhide.min.js
├── src/
│   └── jquery.scrollhide.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

## Contributing

Check [CONTRIBUTING.md](https://github.com/viktorbergehall/scrollhide/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/viktorbergehall/scrollhide/releases) for detailed changelog.

## License

[MIT License](http://viktorbergehall.mit-license.org) © Viktor Bergehall
