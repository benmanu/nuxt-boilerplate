# nuxt-boilerplate

> My remarkable Nuxt.js project

## Create

``` bash
# Create the boilerplate
$ yarn create nuxt-app <my-project>
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Contentful - Setup

``` bash
# install contentful globally
$ yarn global add contentful-cli

# authorise contentful
$ contentful login

# revoke authorisation
$ contentful logout
```

[Cotentful docs](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/)
[Contentful with VueX](https://chrisboakes.com/serverless-with-nuxtjs-vue-contentful-netlify/)

## Contentful - Space

This is for if the site does not have a space associated with it yet.

``` bash
# progromatically create a space
$ contentful space create --name 'New Space'
```