async function getStar() {
const res = await fetch('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/1/');
 console.log(res);
}