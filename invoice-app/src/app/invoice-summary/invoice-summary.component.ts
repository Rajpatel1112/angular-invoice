import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent  implements OnInit {
  currentDate!: Date;
  formData: any;
  products: any[] = [
    { name: 'Shirt' },
    { name: 'Pants' },
    { name: 'Jacket' }
  ]; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.formData = history.state.formData;
    this.currentDate = new Date();
  }

  
  getProductName(productName: string): string {
    const product = this.products.find(p => p.name === productName);
    return product.name 
  }

  calculateTotalAmount(): number {
    if (this.formData && this.formData.orders) {
      return this.formData.orders.reduce((total: number, order: { price: number; quantity: number; }) =>
        total + (order.price * order.quantity), 0);
    }
    return 0;
  }
}
