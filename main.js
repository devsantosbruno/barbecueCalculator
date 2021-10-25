// receive HTML
let adults = document.getElementById('adults')
let kids = document.getElementById('kids')
let time = document.getElementById('time')

// portion per person
let beef = 400
let beer = 1200
let soda = 1000
let water = 1000

function send() {
  // not to accumulate results
  document.getElementById('result').innerHTML = ''

  // change values ​​if it exceeds 6 hours
  if (time.value >= 6) {
    beef = 650
    beer = 2000
    soda = 1500
    water = 1500
  }

  // calculate for adults
  if (adults.value > 0) {
    var abeef = beef * parseInt(adults.value)
    var abeer = beer * parseInt(adults.value)
    var asoda = soda * parseInt(adults.value)
    var awater = water * parseInt(adults.value)
  } else {
    abeef = 0
    abeer = 0
    asoda = 0
    awater = 0
  }

  // calculate for kids
  if (kids.value > 0) {
    var cbeef = (beef * parseInt(kids.value)) / 2
    var csoda = (soda * parseInt(kids.value)) / 2
    var cwater = (water * parseInt(kids.value)) / 2
  } else {
    cbeef = 0
    csoda = 0
    cwater = 0
  }

  // generate result if fields were filled
  if ((adults.value > 0) | (kids.value > 0)) {
    var h1 = document.createElement('h1')
    h1.textContent = 'Quantidade total:'
    var cx = document.getElementById('result')
    cx.appendChild(h1)

    var pbeef = document.createElement('h2')
    pbeef.textContent = abeef + cbeef + 'g de carne'
    cx.appendChild(pbeef)

    var pbeer = document.createElement('h2')
    pbeer.textContent = abeer + 'ml de cerveja'
    cx.appendChild(pbeer)

    var psoda = document.createElement('h2')
    psoda.textContent = asoda + csoda + 'ml de refrigerante'
    cx.appendChild(psoda)

    var pwater = document.createElement('h2')
    pwater.textContent = awater + cwater + 'ml de água'
    cx.appendChild(pwater)

    var lembrete = document.createElement('h3')
    lembrete.textContent = 'Bebida só para maiores de 18 anos!'
    cx.appendChild(lembrete)
  }
}
