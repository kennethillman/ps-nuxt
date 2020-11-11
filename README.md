# purspot-nuxt

## Build Setup

```bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Styling

custom setup with style-resource ...

### Mode

Mode Default, Dark or Light is set in vuex "store/index.js". 

```javascript
appMode: "default"

```

A class is accordingly added to the .purspot div tag in "layouts/default.vue" to set global mode styling.




## SVG Icons

https://github.com/nuxt-community/svg-sprite-module
Put your svg icons in "assets/icons".		
The class "ps-icon" is added to icon.

```javascript
// Usage

<svg-icon name="search"/>

// nuxt.config.js

buildModules: [
 '@nuxtjs/svg-sprite'
],

svgSprite: {
	input: '~/assets/icons/',
	elementClass: 'ps-icon'
},

```

## VUEX

State...