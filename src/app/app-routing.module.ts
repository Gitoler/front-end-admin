import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminPartnerComponent } from './components/admin-partner/admin-partner.component';
import { AdminStoreComponent } from './components/admin-store/admin-store.component';
import { AdminPasswordComponent } from './components/admin-password/admin-password.component';
const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'manage/admin',
    component: AdminComponent,
    children: [
      { path: 'profile', component: AdminProfileComponent },
      { path: 'partner', component: AdminPartnerComponent },
      { path: 'store', component: AdminStoreComponent },
      { path: 'password', component: AdminPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
