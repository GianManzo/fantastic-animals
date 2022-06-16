export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number) // colocando o number dentro de map ja transforma os numeros de string para numeros
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]
  if (horarioAberto && semanaAberto) funcionamento.classList.add('aberto')
}
