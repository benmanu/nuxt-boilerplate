// ./plugins/contentful.js

require('dotenv').config() // eslint-disable-line
const contentful = require('contentful')

export default function client() {
  return contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CD_ACCESS_TOKEN
  })
}
