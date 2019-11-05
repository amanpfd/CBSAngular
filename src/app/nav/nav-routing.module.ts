import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransitDriverComponent } from '../transit-driver/transit-driver.component';
import { PaymentComponent } from '../payment/payment.component';
import { TransitUserComponent } from '../transit-user/transit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/transit', pathMatch: 'full' },
  { path: 'transit', component: TransitDriverComponent },
  { path: 'user', component: TransitUserComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', redirectTo: '/transit', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
