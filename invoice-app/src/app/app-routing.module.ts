// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';

const routes: Routes = [
  { path: 'invoice-form', component: InvoiceFormComponent },
  { path: 'invoice-summary', component: InvoiceSummaryComponent }, 
  { path: '', redirectTo: '/invoice-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
