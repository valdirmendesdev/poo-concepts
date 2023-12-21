/*
 * Versão 2 - Estamos preocupados em categorizar, nos 4 pilares da POO,
o código que escrevemos
 */

// Um relatório de notas fiscais que entrega os resultados em csv
function getNotasFiscais() {
  const notasFiscais = [{
    numeroDaNota: 1,
    dataEmissao: "18/12/2023",
    valorTotal: 100.00
  }, {
    numeroDaNota: 2,
    dataEmissao: "19/12/2023",
    valorTotal: 200.00
  }, {
    numeroDaNota: 3,
    dataEmissao: "20/12/2023",
    valorTotal: 300.00
  }]
  return notasFiscais
}

interface Nota {
  numeroDaNota: number
  dataEmissao: string
  valorTotal: number;
}

interface Relatorio {
  valorTotal: number,
  notas: Array<Nota>
}

function calculaRelatorioDeVendas(notasFiscais: Array<Nota>): Relatorio {

  const dadosDoRelatorio: Relatorio = {
    valorTotal: 0.0,
    notas: new Array<Nota>()
  }
  for (const nota of notasFiscais) {
    dadosDoRelatorio.valorTotal += nota.valorTotal
    dadosDoRelatorio.notas.push(nota)
  }
  return dadosDoRelatorio
}

function exportCsv(dadosDoRelatorio: Relatorio): void {
  console.log(`Número da nota, Data de emissão, Valor da nota`)
  for (const nota of dadosDoRelatorio.notas) {
    console.log(`${nota.numeroDaNota}, ${nota.dataEmissao}, ${nota.valorTotal}`)
  }
  console.log(`Total vendido: ${dadosDoRelatorio.valorTotal}`)
}

function fazTudo() {

  //1 - buscas informações
  //2 - Agregação da informação (somatórios, agrupamentos e construção de estrutura)
  //3 - resultado do relatório em si (CSV)!
  const notasFiscaisDoBanco = getNotasFiscais() //Encapsulado
  const dadosDoRelatorio = calculaRelatorioDeVendas(notasFiscaisDoBanco);
  exportCsv(dadosDoRelatorio)
}

fazTudo();