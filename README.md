# nuxt-boilerplate

> My remarkable Nuxt.js project

TODO:
- Look at integrating Storybook.
- Hook into a test API for local development.
- Contentful published/draft content states.
- Different Contentful environments.
- Integrate [Jest Snapshot](https://jestjs.io/docs/en/snapshot-testing) tests.

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

# lint the code base
$ yarn run lint

# run the unit test suite
$ yarn run test
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

- [Cotentful docs](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/)
- [Contentful with VueX](https://chrisboakes.com/serverless-with-nuxtjs-vue-contentful-netlify/)

## Contentful - Space

This is for if the site does not have a space associated with it yet.

``` bash
# progromatically create a space
$ contentful space create --name 'New Space'
```

## Contentful - API keys

Create a `.env` file in the root directory. Copy the configuration from the `.env.copy` file, filling in the blanks.

## Unit Tests

- [Jest](https://jestjs.io/docs/en/getting-started)
- [Guide](https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-jest.html)
