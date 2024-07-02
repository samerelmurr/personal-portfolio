import {createClient} from 'contentful';

console.log(process.env.CONTENTFUL_SPACE_ID);

export const client = createClient({
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN ?? '',
  space: process.env.CONTENTFUL_SPACE_ID ?? ''
})


