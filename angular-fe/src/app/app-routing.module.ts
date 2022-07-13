import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PaymentsComponent } from './pages/payments/payments.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  data: {
    title: 'Dashboard',
    icon: 'description',
    displaySidenav: true
  }
}, {
  path: 'orders',
  component: OrdersComponent,
  data: {
    title: 'Orders',
    icon: 'description',
    displaySidenav: true
  }
}, {
  path: 'payments',
  component: PaymentsComponent,
  data: {
    title: 'Payments',
    icon: 'description',
    displaySidenav: true
  }
  // }, {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login',
  //     icon: null,
  //     displaySidenav: false
  // }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabled'
  }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [RouterModule],
  declarations: [
    DashboardComponent,
    OrdersComponent,
    PaymentsComponent
  ]
})
export class AppRoutingModule { }