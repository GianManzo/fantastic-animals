export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(json => {
      const btcPreco = document.querySelector('.btcPreco')
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4) // valor equivalente a R$1000
    })
    .catch(erro => {
      console.log(Error(erro))
    })
}

// https://blockchain.info/ticker
