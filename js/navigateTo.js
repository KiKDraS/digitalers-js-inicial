export const navigateTo = (url) => {
  history.pushState(null, null, url);
};
