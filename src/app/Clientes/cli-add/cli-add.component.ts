import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/Service/cliente.service';
import { Cliente } from '../ClienteModel';

@Component({
  selector: 'app-cli-add',
  templateUrl: './cli-add.component.html',
  styleUrls: ['./cli-add.component.css']
})
export class CliAddComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }



  ngOnInit(): void {
    this. getCliente();
  }

  addCliente(form: NgForm){
    if ( form.value._id) {
      this.clienteService.putCliente(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getCliente();
      });
    } else {
      this.clienteService.postCliente(form.value).subscribe((res) => {
        this.getCliente();
        this.resetForm(form);
      });
    }
  }

  getCliente() {
    this.clienteService.getCliente().subscribe((res) => {
      this.clienteService.clientes = res;
    });
  }

  editCliente(cliente: Cliente) {
    this.clienteService.selectedCliente = cliente;
  }

  deleteCliente(_id: string, form: NgForm) {
    if (confirm("Tem certeza que deseja deletar?")) {
      this.clienteService.deleteCliente(_id).subscribe((res) => {
        this.getCliente();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clienteService.selectedCliente = new Cliente();
    }
  }
}
