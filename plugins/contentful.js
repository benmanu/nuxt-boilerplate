// ./plugins/contentful.js

import { createClient } from 'contentful';

require('dotenv').config(); // eslint-disable-line

export default function client() {
  return createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CD_ACCESS_TOKEN,
  });
}
