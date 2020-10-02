/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    env: {
      REDIRECT_URI: isDev
        ? "http://localhost:3000/api/callback"
        : "https://nextjsauth-dusky.vercel.app/api/callback",
      POST_LOGOUT_REDIRECT_URI: isDev
        ? "http://localhost:3000/secret"
        : "https://nextjsauth-dusky.vercel.app/secret",
      AUTH0_SCOPE: "openid profile",
      SERVER_URL: isDev
        ? "http://localhost:3000"
        : "https://nextjsauth-dusky.vercel.app",
    },
  };
};
