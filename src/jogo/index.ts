class Personagem {
  public nome: string;
  public habilidades: Array<Habilidade>;
  constructor(nome: string) {
    this.nome = nome;
    this.habilidades = new Array<Habilidade>();
  }
  lutar() {
    console.log(`${this.nome} Lutando...`)
  }

  adicionarUmaHabilidade(habilidade: Habilidade) {
    this.habilidades.push(habilidade);
  }

  exibirTodasAsHabilidades() {
    console.log(`\nHabilidades do personagem ${this.nome}`)
    //Abstração e Polimorfismo
    for (const habilidade of this.habilidades) {
      habilidade.descricao()
    }
  }
}

interface Habilidade {
  descricao(): void
  executar(): void
}

class Voar implements Habilidade {
  descricao(): void {
    console.log("Esta habilidade permite o personagem voar..")
  }
  executar(): void {
    console.log("O personagem está voando...")
  }
}

class Defender implements Habilidade {

  descricao(): void {
    console.log("Esta habilidade permite o personagem se defender..")
  }
  executar(): void {
    console.log("O personagem está se defender...")
  }
}

class Mutar implements Habilidade {

  descricao(): void {
    console.log("Esta habilidade permite o personagem sofrer mutações..")
  }
  executar(): void {
    console.log("O personagem está mutando...")
  }

}

interface PersonagemQueConsegueNadar {
  Nadar(): void
}

interface PersonagemQueConsegueVoar {
  Voar(): void
}

class Lutador implements PersonagemQueConsegueNadar, PersonagemQueConsegueVoar {

  Nadar(): void {
    console.log("Lutador consegue nadar")
  }

  Voar(): void {
    console.log("Lutador consegue voar")
  }
}

class Guerreiro implements PersonagemQueConsegueVoar {
  Voar(): void {
    console.log("Guerreiro consegue voar")
  }
}

class Viking implements PersonagemQueConsegueNadar {
  Nadar(): void {
    console.log("Viking consegue nadar")
  }
}

class CampoDeBatalha {

  Batalhar(p1: Personagem, p2: Personagem) {
    console.log("Batalha...")
    p1.lutar()
    p2.lutar()
  }

  BatalhaNoCeu(p1: PersonagemQueConsegueVoar, p2: PersonagemQueConsegueVoar) {
    console.log("\nBatalha no céu..")
    p1.Voar()
    p2.Voar()
  }

  BatalhaNaAgua(p1: PersonagemQueConsegueNadar, p2: PersonagemQueConsegueNadar) {
    console.log("\nBatalha na água..")
    p1.Nadar()
    p2.Nadar()
  }
}

// const personagem1 = new Personagem("João");
// personagem1.lutar()
// personagem1.exibirTodasAsHabilidades()

// const personagem2 = new Personagem("Maria");
// personagem2.lutar()
// personagem1.exibirTodasAsHabilidades()

// personagem1.adicionarUmaHabilidade(new Voar())
// personagem1.adicionarUmaHabilidade(new Defender())
// personagem1.adicionarUmaHabilidade(new Mutar())

// personagem2.adicionarUmaHabilidade(new Defender())
// personagem1.exibirTodasAsHabilidades()
// personagem2.exibirTodasAsHabilidades()

const campo = new CampoDeBatalha()
//Exemplo 1
// campo.Batalhar(personagem1, personagem2)

//Exemplo 2
const p1 = new Lutador()
const p2 = new Guerreiro()
const p3 = new Viking()

campo.BatalhaNoCeu(p1, p2)
campo.BatalhaNaAgua(p1, p3)


interface Render {
  render(): void
}

class Box implements Render {
  render(): void {
    console.log("Boxs está sendo renderizado")
  }
}

class State {

}