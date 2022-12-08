export let fetching = (url: any) => {
  return fetch(url).then((response) => response.json());
};
