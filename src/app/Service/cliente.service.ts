import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Clientes/ClienteModel';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  selectedCliente: Cliente;
  clientes!: Cliente[];
  readonly URL_API = "https://localhost:5001/api/cliente";

  constructor(private http: HttpClient) { 
    this.selectedCliente = new Cliente();
  }

  postCliente(cliente: Cliente) {
    return this.http.post(this.URL_API, cliente);
  }

  createCliente(cliente: Cliente){
    return this.http.post(this.URL_API, cliente);
  }

  getCliente() {
    return this.http.get<Cliente[]>(this.URL_API);
  }

  putCliente(cliente: Cliente) {
    return this.http.put(this.URL_API + `/${cliente._Id}`, cliente);
  }

  deleteCliente(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}