# jQuery Scrollhide [![Build Status](https://secure.travis-ci.org/jquery-boilerplate/jquery-boilerplate.svg?branch=master)](https://travis-ci.org/jquery-boilerplate/jquery-boilerplate) ![Bower Version](https://badge.fury.io/bo/jquery-boilerplate.svg)

### Hide element when scrolling down, show when scrolling up

Design pattern from Google Chrome and Safari mobile browsers.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.scrollhide.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").scrollhide();
	```

## Structure

The basic structure of the project is given in the following way:

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

## [demo/](https://github.com/jquery-scrollhide/scrollhide/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.


## Guides

#### How did we get here?

Have you got in this repo and still not sure about using this scrollhide?

Well, extending jQuery with plugins and methods is very powerful and can save you and your peers a lot of development time by abstracting your most clever functions into plugins.

[This awesome guide](https://github.com/jquery-scrollhide/scrollhide/wiki/How-did-we-get-here%3F), adapted from [jQuery Plugins/Authoring](http://docs.jquery.com/Plugins/Authoring), will outline the basics, best practices, and common pitfalls to watch out for as you begin writing your plugin.

#### How to publish plugins?

Also, check our guide on [How to publish a plugin in jQuery Plugin Registry](https://github.com/jquery-scrollhide/scrollhide/wiki/How-to-publish-a-plugin-in-jQuery-Plugin-Registry
)!

**Note:** The jQuery Plugin Registry is in read-only mode. New plugin releases will not be processed.
jQuery recommends moving to [npm](https://www.npmjs.com/), using ["jquery-plugin"](https://www.npmjs.com/browse/keyword/jquery-plugin) as the keyword in your package.json. See [how to publish into npm registry](https://gist.github.com/coolaj86/1318304).


## Contributing

Check [CONTRIBUTING.md](https://github.com/jquery-scrollhide/scrollhide/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/jquery-scrollhide/jquery-scrollhide/releases) for detailed changelog.

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
