const body = document.getElementsByTagName('body')[0];
const pre = document.createElement('pre');
const search = new URLSearchParams(window.location.search);
const json = JSON.stringify(Object.fromEntries(search));

pre.innerText = json;
body.appendChild(pre);
