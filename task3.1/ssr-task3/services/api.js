/* global fetch */

export const getUser = (id) => fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/users/${id}`)
  .then((response) => response.json());

export const getToken = () => fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/token`)
  .then((response) => response.json());

export const setUser = (data, token) => fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/users`, {
  method: 'POST',
  body: data,
  headers: {
    Token: token, // get token with GET api/v1/token method
  },
}).then((response) => response.json());

export const getMoreUsers = (offset, startCount) => fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/users?&offset=${offset}&length=${startCount}&count=${startCount}`)
  .then((response) => response.json());

export const getPositions = () => fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/positions`);

export const getUsers = (initialCount) => fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/users?&offset=0&length=${initialCount}&count=${initialCount}`).then((response) => response.json());
