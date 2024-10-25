export default function fetchJSON(url, options) {
  return fetch(url, options)
    .then((res) => res.json())
    .catch((err) => err);
}
