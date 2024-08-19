import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private listService : ListService,
    private router: Router,
    private customerService: CustomerService
  ) { }

  lists:any;
  cliente:any;

  ngOnInit(): void {
    this.getList();
    this.cliente = JSON.parse(localStorage.getItem('cliente')|| '{}');
    console.log(this.cliente.id)
  }

  getList(){
    this.listService.get().subscribe(data =>
     this.lists = data.response );
 }

 updateFondo(fondo:any){
 this.listService.update(fondo).subscribe(data => location.reload());
 }

 updateCliente(monto:number){
  this.cliente.saldo = this.cliente.saldo + monto;
  this.customerService.update(this.cliente).subscribe(data => location.reload());
 }

 navegar(){
  this.router.navigate(['']);
 }

}
