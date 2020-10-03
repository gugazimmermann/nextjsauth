## Auth

Running URL: https://nextjsauth-dusky.vercel.app/ or https://nextjsauth-dusky.vercel.app/secret

Get by API the list of NY Times Best Sellers

created using:
- Typescript
- Next.js
- React
- Chakra UI
- Emotion
- Auth0
- Vercel

---

Create a `./.env` file with the content

```
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_ID=AUTH0_CLIENT_ID
AUTH0_SECRET=AUTH0_SECRET
SESSION_COOKIE_SECRET=GENERATE
```

To generate the Cookie Secret you can run `openssl rand -base64 32`

---

# AUTH0

In Auth0 page put inside **Allowed Logout URLs**:
`http://localhost:3000/api/callback,https://EXAMPE.COM/api/callback`

In Auth0 page put inside **Allowed Callback URLs**:
`http://localhost:3000/secret,https://EXAMPE.COM/secret`

Change **EXAMPE.COM** with your domain

Inside `./next.config.js` change **EXAMPE.COM** with your domain

Access `http://localhost:3000/secret` to see Auth0 running
