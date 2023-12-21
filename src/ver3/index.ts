/*
 * Versão 3 - Estamos preocupados em aplicar os conceitos de POO, substituindo
o código existente
 */

//Classe Mãe/Superclasse
abstract class FonteDeDadosDeNotasFiscais {
  public nomeDaFonteDeDados: string
  constructor(nomeDaFonte: string) {
    this.nomeDaFonteDeDados = nomeDaFonte
  }

  imprimeNomeDaFonteDeDados(): void {
    console.log("Fonte utilizada é:", this.nomeDaFonteDeDados)
  }

  abstract getDados(): Array<Nota>
  abstract atualizaDados(): void
}

//Toda classe filha TEM QUE SER totalmente do tipo da classe mãe!
// Tem que todos os métodos, tem que fazer uso de todas as propriedades/variáveis
// tem que implementar tudo que a classe mãe "obrigar"/possuir

//Classe filha/subclasse
class NotasFiscaisDoBancoDeDados extends FonteDeDadosDeNotasFiscais {
  atualizaDados(): void {
    throw new Error("Method not implemented.")
  }


  override getDados(): Nota[] {
    //Banco de dados
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

}

class NotasFiscaisDoArquivoTexto extends FonteDeDadosDeNotasFiscais {
  atualizaDados(): void {
    throw new Error("Method not implemented.")
  }
  override getDados(): Nota[] {
    const notasFiscais = [{
      numeroDaNota: 4,
      dataEmissao: "18/12/2023",
      valorTotal: 400.00
    }, {
      numeroDaNota: 5,
      dataEmissao: "19/12/2023",
      valorTotal: 500.00
    }, {
      numeroDaNota: 6,
      dataEmissao: "20/12/2023",
      valorTotal: 600.00
    }]
    return notasFiscais
  }
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

function defineAFonteDeDados(): FonteDeDadosDeNotasFiscais {
  const fonteDeDadosEscolhida: string = "arquivos"
  if (fonteDeDadosEscolhida == "BD") {
    return new NotasFiscaisDoBancoDeDados("BD")
  } else {
    return new NotasFiscaisDoArquivoTexto("TXT");
  }
}

interface SaidaDoRelatorio {
  gerarSaida(dadosDoRelatorio: Relatorio): void
}

class RelatorioCSV implements SaidaDoRelatorio {
  gerarSaida(dadosDoRelatorio: Relatorio): void {
    console.log(`Número da nota, Data de emissão, Valor da nota`)
    for (const nota of dadosDoRelatorio.notas) {
      console.log(`${nota.numeroDaNota}, ${nota.dataEmissao}, ${nota.valorTotal}`)
    }
    console.log(`Total vendido: ${dadosDoRelatorio.valorTotal}`)
  }
}

class RelatorioJSON implements SaidaDoRelatorio {
  gerarSaida(dadosDoRelatorio: Relatorio): void {
    console.log(dadosDoRelatorio)
  }
}

function defineSaidaDeRelatorioEscolhida() {
  const saidaEscolhida: string = "TXT"
  if (saidaEscolhida == "CSV") {
    return new RelatorioCSV()
  } else {
    return new RelatorioJSON()
  }
}

function fazTudo() {

  //1 - buscas informações (busca dados de arquivo texto ou banco de dados baseado no que o usuário escolher)
  //2 - Agregação da informação (somatórios, agrupamentos e construção de estrutura)
  //3 - resultado do relatório em si (CSV ou JSON)!
  let minhaFonteDeDadosEscolhida: FonteDeDadosDeNotasFiscais; //Polimorfismo
  minhaFonteDeDadosEscolhida = defineAFonteDeDados()

  minhaFonteDeDadosEscolhida.imprimeNomeDaFonteDeDados()
  let notasFiscaisDoBanco: Array<Nota> = minhaFonteDeDadosEscolhida.getDados()

  const dadosDoRelatorio = calculaRelatorioDeVendas(notasFiscaisDoBanco);
  let saidaDoRelatorioEscolhida: SaidaDoRelatorio = defineSaidaDeRelatorioEscolhida() //Polimorfismo
  saidaDoRelatorioEscolhida.gerarSaida(dadosDoRelatorio)

}

fazTudo()