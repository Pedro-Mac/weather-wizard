export const setItemLocal = (key: string, value: any) => {
  //value should be of type any
  window.localStorage.setItem(key, JSON.stringify(value));
};
