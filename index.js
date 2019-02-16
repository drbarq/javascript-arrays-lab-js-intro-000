var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop;
}

/*
function destructivelyAppendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
 */
