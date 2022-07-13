import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  itemForm = this.newItemForm()

  ordersForm = new FormGroup({
    itemsFormArray: new FormArray([this.newItemForm()]),
    totalAmount: new FormControl(0, [Validators.required])
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  newItemForm() {
    return new FormGroup({
      itemName: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      unitPrice: new FormControl('', [Validators.required]),
      totalPrice: new FormControl('', [Validators.required])
    })
  }

  get itemsFormArray(): FormArray {
    return this.ordersForm.get('itemsFormArray') as FormArray;
  }

  addItemForm() {
    this.itemsFormArray.push(this.newItemForm())
  }

  removeItemForm(index: number) {
    if (this.itemsFormArray.length !== 1) {
      this.itemsFormArray.removeAt(index)
    }
    console.log(this.itemsFormArray.length)
  }

  submitForm() {
    // let formValue = this.ordersForm.value || { itemsFormArray: [] }
    let totalAmount = 0
    let orderItems: any[] = []
    let requestData = { orderItems, orderTotalAmount: 0 }

    for (let i = 0; i < this.itemsFormArray.length; i++) {
      const itemValue = this.itemsFormArray.at(i).value;
      const totalPrice = itemValue.unit * itemValue.unitPrice
      this.itemsFormArray.at(i).value.totalPrice = totalPrice
      totalAmount += totalPrice
      const itemData: any = {
        "item": itemValue.itemName,
        "unit": itemValue.unit,
        "unitPrice": itemValue.unitPrice,
        "totalPrice": itemValue.totalPrice,
      }
      requestData.orderItems.push(itemData)
    }

    this.ordersForm.value.totalAmount = totalAmount
    requestData.orderTotalAmount = totalAmount

    console.log(this.ordersForm.value)
    this.http.post('http://localhost:3040/orders', requestData).subscribe(res => {
      console.log('Success', res)
    })
  }

}
