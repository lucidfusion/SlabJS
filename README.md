# SlabJS

SlabJS is a web framework that allows you to build dynamic web applications and compile them into standalone, optimized, static HTML.

## Features

The following features are included with this version:

+ jQuery
+ Modernizr
+ Bootstrap 3.3
+ Handlebars (other template engines to come at a later date)
+ Template Data for Handlebars
+ libSass
+ Compass Mixins (via libSass)
+ Font Awesome 4.3
+ SVG Icon Font generation
+ Browserify (with map generation)
+ BrowserSync
+ Google Analytics Injection
+ Google Fonts Injection
+ Optimal PageSpeed scores!

## Table of Contents

[Installation](https://github.com/lucidfusion/SlabJS#installation)

[Making Your Project](https://github.com/lucidfusion/SlabJS#make-your-project)

[Project Configuration](https://github.com/lucidfusion/SlabJS#project-configuration)

[Generators](https://github.com/lucidfusion/SlabJS#generators)

[Coming in Next Releases](https://github.com/lucidfusion/SlabJS#coming-soon)

## Installation

**With [node installed](http://nodejs.org):**
```sh
# Get the latest stable release of SlabJS
$ npm install lucidfusion/SlabJS -g
```

## Make Your Project

#### Create the app:
```sh
# Create your app
$ slab create app
```

#### Launch the app and get working:
```sh
# cd into your new app
$ cd app

# launch the server
$ slab launch
```

#### Compile for production

By passing production into the environment option, you will be making the following optimizations:

+ Minify CSS
+ Minify JS
+ Generate gzip for your JS files (it's up to you how you enable them)
```sh
# launch the server with production code
$ slab launch --env production
```

## Project Configuration

You can add project specific information to inject into your HTML by adding it to a file at ./config/project.js

#### Inject Google Font stylesheets into your head
```sh
# ./config/project.js

# copy the value directly after the family parameter 
# provided by the Google Fonts link tag:
# <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
google_fonts: {
	families: [
		'Open+Sans',
		'Lobster',
		'Raleway:400,200,700'
	]
},
```

#### Inject Google Analytics scripts to your footer
```sh
# ./config/project.js

# you can add multiple scripts. Keep in mind only one 
# legacy script can be added(ga.js)
google_analytics: {
	ua_codes: [
		{
			type: 'universal', //universal or legacy
			ua_code: 'UA-XXXXXXXX-X'
		},
		{
			type: 'universal',
			ua_code: 'UA-YYYYYYYY-Y'
		},
		{
			type: 'legacy',
			ua_code: 'UA-ZZZZZZZZ-Z'
		}
	]

}
```

#### Template Data for Handlebars
```sh
# ./config/project.js
template_data: {
	title: 'Example title'	
}
```

```sh
# ./src/views/partials/head.hbs
<title>{{title}}</title>
```

```sh
# ./build/index.html
<title>Example title</title>
```

## Generators

Sometimes, live updating will not always work for you. This is where generators come in. 

#### Regenerate your SVG font.
```sh
# Make more font characters
$ slab generate icons
```

#### Fetch the latest Font Awesome library
```sh
# Get the latest Font Awesome
$ slab generate fontawesome
```

More to come...

## Coming Soon

+ Bower & Bower support for Browserify
+ Handlebars Layouts
+ Controllers for your views (to replace Tempalate Data)
+ GIT Deployments

## Known Issues

+ There is a minor issue on first launch where the virtual server doens't catch up with the generated files. A small refresh seems to fix it. This will be fixed in the next release.