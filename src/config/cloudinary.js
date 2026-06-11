// src/config/cloudinary.js

const CLOUD_NAME = "ddjmvqgoc";

// export const cld = (path) =>
//   `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${path}`;

export const cld = (path) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${path}?v=${Date.now()}`;