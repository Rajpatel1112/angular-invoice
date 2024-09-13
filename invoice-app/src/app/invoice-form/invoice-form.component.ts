import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
  customer = { name: '', email: '', contact: '', address: '' };
  orders = [{ product: '', price: 0, quantity: 1 }];
  products = [
    { name: 'Shirt' },
    { name: 'Pants' },
    { name: 'Jacket' }
  ];

  constructor(private router: Router) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/invoice-summary'], {
        state: { formData: { customer: this.customer, orders: this.orders } }
      });
    } else {
      this.markAllAsTouched(form);
    }
  }

  markAllAsTouched(form: NgForm) {
    Object.keys(form.controls).forEach(key => {
      form.controls[key].markAsTouched();
    });
  }

  addOrder() {
    this.orders.push({ product: '', price: 0, quantity: 1 });
  }

  removeOrder(index: number) {
    this.orders.splice(index, 1);
  }

  calculateTotalAmount() {
    return this.orders.reduce((total, order) => total + (order.price * order.quantity), 0);
  }

  isValidQuantity(quantity: number): boolean {
    return quantity !== null && quantity !== undefined && !isNaN(quantity) && quantity > 0;
  }
}
