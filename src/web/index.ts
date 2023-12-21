
interface Contato {
  nome: string
}

class ServiceSalvaContato {

  save(contato: Contato) {
    //...
  }
}

interface Conta {
  nome: string
}

class RepositorioContasMysql implements RepositorioDeContasInterface {
  getContas(): Conta[] {
    console.log("Contas do Mysql")
    return []
  }
}

class RepositorioContasAPI implements RepositorioDeContasInterface {
  getContas(): Conta[] {
    console.log("Contas da API")
    return []
  }
}

interface RepositorioDeContasInterface {
  getContas(): Conta[]
}

class Controller {
  public repositorioDeContas: RepositorioDeContasInterface;

  constructor(implementacaoRepositorioDeContas: RepositorioDeContasInterface) {
    this.repositorioDeContas = implementacaoRepositorioDeContas;
  }

  onSaveClick() {
    const contato: Contato = {
      nome: 'Daiane'
    }
    //obsoleto com inversão de dependências
    // const repositorioDeContas = new RepositorioContas(); //Classe concreta!
    const service = new ServiceSalvaContato()
    const contas = this.repositorioDeContas.getContas();
    service.save(contato)
  }
}

const meuController = new Controller(new RepositorioContasMysql());
meuController.onSaveClick()