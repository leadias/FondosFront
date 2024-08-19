import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../services/list.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  item: any;
  monto_minimo= 0;
  nombre = "";
  categoria = "";
  monto= 0;
  cliente: any = "";

  constructor(
    private router: Router,
    private listService: ListService,
    private customerService: CustomerService
  ) { }
  
  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente')|| '{}');
  }

  createFondo() {

    switch(this.nombre){
      case 'FPV_BTG_PACTUAL_RECAUDADORA':{
        this.categoria = 'FPV';
        this.monto_minimo = 75000;
        break;
      }

      case 'FPV_BTG_PACTUAL_ECOPETROL':{
        this.categoria = 'FPV';
        this.monto_minimo = 125000;
        break;
      }

      case 'DEUDAPRIVADA':{
        this.categoria = 'FIC';
        this.monto_minimo = 50000;
        break;
      }

      case 'FDO-ACCIONES':{
        this.categoria = 'FIC';
        this.monto_minimo = 250000;
        break;
      }

      case 'FPV_BTG_PACTUAL_DINAMICA':{
        this.categoria = 'FPV';
        this.monto_minimo = 100000;
        break;
      }
    }
    if (this.cliente.saldo < this.monto_minimo) {
      window.alert('No tiene saldo disponible para vincularse al fondo ' + this.nombre);
    }else{
      if (this.monto < this.monto_minimo) {
        window.alert('El monto minimo de apertura es ' + this.monto_minimo);
      }else{

        this.item ={
          clienteId:this.cliente.id,
          nombre: this.nombre,
          monto: this.monto,
          categoria: this.categoria
       }
  
       this.listService.createItem(this.item).subscribe();
       this.cliente.saldo = this.cliente.saldo - this.monto;
       this.customerService.update(this.cliente).subscribe(data => location.reload());

      }
      
    }

  }

  navegar(){
    this.router.navigate(['']);
   }



}
