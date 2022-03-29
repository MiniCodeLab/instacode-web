export const sayHello = () => {
  return 'hello';
};

const TOKEN_NAME = 'api-token';

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem(TOKEN_NAME, token);
};
