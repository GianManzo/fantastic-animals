export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const btcPreco = document.querySelector(target)
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4) // valor equivalente a R$1000
    })
    .catch(erro => {
      console.log(Error(erro))
    })
}
