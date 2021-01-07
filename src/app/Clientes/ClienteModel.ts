export class Cliente {
    constructor( _Id = "", name = "", sobrenome = "", cpf = 0, email ="", celular = "", endereco ="") {
     // this.Id = Id;
      this.name = name;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.email = email;
      this.celular = celular;
      this.endereco = endereco; 
    }
  
 
    _Id!: string;
    name: string;
    sobrenome: string;
    cpf: number;
    email: string;
    celular: string;
    endereco: string;
  }