var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
/*
function destructivelyAppendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
 */
