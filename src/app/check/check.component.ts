import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  customer: any;

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) { 
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
     this.customerService.get().subscribe(data => this.customer = data.response[0]);

  }

  navegar() {
    localStorage.setItem('cliente',JSON.stringify(this.customer));
    this.router.navigate(['/pagina3']);
  }


}
