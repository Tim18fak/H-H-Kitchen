let min = 5
let second = 60

setInterval(() => {
  if (second > 0) {
    second--
    console.log(second, min)
  } else if (second === 0) {
    second = 60
    min--
  }
  if (min === 0) {
  }
}, 1000)
