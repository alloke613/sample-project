import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'items', 'total', 'status', 'action'];
  ordersData: any = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3040/orders').subscribe((orders) => {
      this.ordersData = orders;
    })
  }

  ngOnInit(): void {
  }

  payNow(order: any) {
    const orderId = order._id
    const orderTotalAmount = order.orderTotalAmount
    this.http.get(`http://localhost:3040/orders/${orderId}`).subscribe(order => {
      if (order) {
        console.log('order', order)
        const updateOrder = {
          ...order,
          orderStatus: 'paid'
        }
        this.http.put(`http://localhost:3040/orders/${orderId}`, updateOrder).subscribe(updatedOrder => {
          console.log('updateOrder', updatedOrder)
          const newPayment = {
            orderId: orderId,
            paymentAmount: orderTotalAmount,
            paymentStatus: 'paid'
          }
          this.http.post('http://localhost:3030/payments', newPayment).subscribe(newPayment => {
            window.location.reload()
            console.log('newPayment', newPayment)
          })
        })
      }
    })
  }
}
