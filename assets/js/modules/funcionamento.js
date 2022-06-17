export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento)
    this.activeClass = activeClass
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number) // colocando o number dentro de map ja transforma os numeros de string para numeros
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number)
  }

  dadosAtuais() {
    this.dataAgora = new Date()
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getUTCHours() - 3
  }

  localOpen() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1]
    return semanaAberto && horarioAberto
  }

  activeOpen() {
    if (this.localOpen()) this.funcionamento.classList.add(this.activeClass)
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento()
      this.dadosAtuais()
      this.activeOpen()
    }
    return this
  }
}
