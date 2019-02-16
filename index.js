var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var name = "Ralph"
  var newKittens = [...kittens, name]; {
    return newKittens;
  }
}
