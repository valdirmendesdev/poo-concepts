/*
 * Versão 1 - Estamos preocupados em entregar a funcionalidade
 */

// Um relatório de notas fiscais que entrega os resultados em csv
function fazTudo() {

  //1 - buscas informações
  //2 - Agregação da informação (somatórios, agrupamentos e construção de estrutura)
  //3 - resultado do relatório em si (CSV)!

  //Abrir conexão com o BD e buscar informações
  const dadosDoBanco = [{
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

  //Somatórios e agrupamentos do relatório
  let totalVendido = 0.0
  console.log(`Número da nota, Data de emissão, Valor da nota`)
  for (const nota of dadosDoBanco) {
    totalVendido += nota.valorTotal

    console.log(`${nota.numeroDaNota}, ${nota.dataEmissao}, ${nota.valorTotal}`)
  }
  console.log(`Total vendido: ${totalVendido}`)
}

fazTudo();