import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HeroesComponent }      from './heroes/heroes.component';
//import { HeroDetailComponent }      from './hero-detail/hero-detail.component';
//import { DashboardComponent }   from './dashboard/dashboard.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { AllPostComponent } from './admin/all-post/all-post.component';
import { AllProductComponent } from './admin/all-product/all-product.component';

import { LoginComponent } from './admin/login/login.component';
//import { BookCreateComponent } from './book-create/book-create.component';
//import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginLayoutComponent } from './admin-login-layout/admin-login-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeLayoutComponent } from './admin-home-layout/admin-home-layout.component';
import { FrontDashboardComponent } from './frontend/front-dashboard/front-dashboard.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { ProductComponent } from './admin/product/product.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
        path: '', 
        component: AdminLoginLayoutComponent,
        children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
		  { path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'admin/login', component: LoginComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          //{ path: '', component: LoginComponent, pathMatch: 'full'},
		  //{ path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: 'admin/dashboard', component: AdminDashboardComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
           { path: 'admin/create_post', component: CreatePostComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
         { path: 'admin/all_post', component: AllPostComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
         { path: 'admin/product', component: ProductComponent }
          
        ]
 },
 //Front End
 { 
        path: '', 
        component: FrontLayoutComponent,
        children: [
          { path: 'home', component: FrontDashboardComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
         { path: 'admin/all_product', component: AllProductComponent }
          
        ]
 },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


