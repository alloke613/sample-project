import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'orderId', 'total', 'status'];
  paymentData: any = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3030/payments').subscribe((payments) => {
      this.paymentData = payments;
    })
  }

  ngOnInit(): void {
  }

}
