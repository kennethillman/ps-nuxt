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

## Whats left

This is bigger things. All functionality and flows need to be tested

## FUNCTIONALITY
* Language (Not touched) - Maybe -> https://i18n.nuxtjs.org/
* LocalStorage (Not touched) - Maybe -> https://www.npmjs.com/package/nuxt-vuex-localstorage 

### COOKIE
Yes/ No should be moved to local storage, now in vuex.

### POP UP
"Do you want a notofication..." ...etc
HTML done, not implemented in nuxt

### CONTENT

Strategy for your content pages is not done.  
I am avalible for discussion

* Konsumer (Not touched)
* Merchant (Not touched)
* Contact (Not touched)


### OTHER PAGES

* Payment History (Not touched)
* Feedback (Not touched)

### STARTPAGE

* "Tab" - Map (Design excist for the toggle tab but not the map itself) only ask for locastion tab is clicked. only load map thing if clicked, save kb.
* "Tab" - QR (Design excist for the toggle tab but n0t the QR code itself) only load QR things if clicked. save kb.
* A-Ö - Load more function, showing all now.
* "Groups" like A-Ö list different groups. 


### GROUPS

* Not completed
* Check static data


### MERCHANT

* Suggestion -> In only one "location" maybe redirect to loctaion directly
* Check static data 

### LOCATION

* Products serach (Not touched) -> startpage has a search working.
* Suggestion -> In only one "location" maybe redirect to loctaion directly
* Check static data 


#### CART
* FYI -> ardcoded values in cart to complete flow. 
* Cart - Static today 
* Cart - Add & Remove from basket should be done from VUEX. Inspiration -> http://www.voerro.com/en/tutorials/r/simple-persistent-shopping-cart-implementation-with-vuejs-2-and-vuex-in-laravel-5/2
* UX Suggetsion -> When cart is open, it should be possible to edits the products directly in that view , + - and remove.

### CHECKOUT

* (Stuck here, api call)
* Check static data 

### RECEIPT

* popup
* Check static data 






