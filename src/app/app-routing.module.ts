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
import { JpDashboardComponent } from './frontend/jp-dashboard/jp-dashboard.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { FrontLayoutJpComponent } from './front-layout-jp/front-layout-jp.component';
import { ProductComponent } from './admin/product/product.component';
import { TechnologyComponent } from './frontend/technology/technology.component';
import { AboutComponent } from './frontend/about/about.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { HumanresourceComponent } from './frontend/humanresource/humanresource.component';
import { FrontProductComponent } from './frontend/front-product/front-product.component';
import { FrontInnerLayoutComponent } from './front-inner-layout/front-inner-layout.component';
import { FrontinnerInnerLayoutJpComponent } from './frontinner-inner-layout-jp/frontinner-inner-layout-jp.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { TechnologyListComponent } from './admin/technology-list/technology-list.component';
import { TechnologyEquipmentComponent } from './admin/technology-equipment/technology-equipment.component';
import { TechnologyManufacturingComponent } from './admin/technology-manufacturing/technology-manufacturing.component';
import { TechnologyAddComponent } from './admin/technology-add/technology-add.component';
import { TechnologyEditComponent } from './admin/technology-edit/technology-edit.component';


import { EquipmentAddComponent } from './admin/equipment-add/equipment-add.component';

import { EquipmentEditComponent } from './admin/equipment-edit/equipment-edit.component';

import { ManufactureingAddComponent } from './admin/manufactureing-add/manufactureing-add.component';

import { AdminEventComponent } from './admin/admin-event/admin-event.component';
import { AdminEventAddComponent } from './admin/admin-event-add/admin-event-add.component';
import { AdminEventEditComponent } from './admin/admin-event-edit/admin-event-edit.component';

import { AdminAboutusComponent } from './admin/admin-aboutus/admin-aboutus.component';
import { HomecontentComponent } from './admin/homecontent/homecontent.component';
import { AdminCodeofconductComponent } from './admin/admin-codeofconduct/admin-codeofconduct.component';
import { AdminCompanyoverviewComponent } from './admin/admin-companyoverview/admin-companyoverview.component';
import { AdminCompanyhistoryComponent } from './admin/admin-companyhistory/admin-companyhistory.component';
import { AdminAboutOtherinfoComponent } from './admin/admin-about-otherinfo/admin-about-otherinfo.component';

import { AdminCompanyhistoryAddComponent } from './admin/admin-companyhistory-add/admin-companyhistory-add.component';
import { AdminCompanyhistoryEditComponent } from './admin/admin-companyhistory-edit/admin-companyhistory-edit.component';

import { GlobalPresenceComponent } from './admin/global-presence/global-presence.component';
import { GlobalPresenceAddComponent } from './admin/global-presence-add/global-presence-add.component';

import { GlobalPresenceEditComponent } from './admin/global-presence-edit/global-presence-edit.component';

import { AchievmentComponent } from './admin/achievment/achievment.component';
import { AchievmentAddComponent } from './admin/achievment-add/achievment-add.component';


import { CerttificationComponent } from './admin/certtification/certtification.component';
import { CerttificationAddComponent } from './admin/certtification-add/certtification-add.component';

import { CustomerComponent } from './admin/customer/customer.component';
import { CustomerAddComponent } from './admin/customer-add/customer-add.component';

import { EditorContentComponent } from './admin/editor-content/editor-content.component';
import { EditorContentAddComponent } from './admin/editor-content-add/editor-content-add.component';




import { JpAboutComponent } from './frontend/jp-about/jp-about.component';
import { JpContactComponent } from './frontend/jp-contact/jp-contact.component';
import { JpProductComponent } from './frontend/jp-product/jp-product.component';
import { JpTechnologyComponent } from './frontend/jp-technology/jp-technology.component';
import { JpHumanresourceComponent } from './frontend/jp-humanresource/jp-humanresource.component';


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
        component: FrontLayoutJpComponent,
        children: [
          { path: 'jp/home', component: JpDashboardComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
         { path: 'admin/all_product', component: AllProductComponent }
          
        ]
 },
  { 
        path: '', 
        component: FrontInnerLayoutComponent,
        children: [
          { path: 'about', component: AboutComponent }
          
        ]
 },
 { 
        path: '', 
        component: FrontinnerInnerLayoutJpComponent,
        children: [
          { path: 'jp/about', component: JpAboutComponent }
          
        ]
 },
  { 
        path: '', 
        component: FrontInnerLayoutComponent,
        children: [
          { path: 'products', component: FrontProductComponent }
          
        ]
 },
  { 
        path: '', 
        component: FrontinnerInnerLayoutJpComponent,
        children: [
          { path: 'jp/products', component: JpProductComponent }
          
        ]
 },
  { 
        path: '', 
        component: FrontInnerLayoutComponent,
        children: [
          { path: 'technology', component: TechnologyComponent }
          
        ]
 },
  { 
        path: '', 
        component: FrontinnerInnerLayoutJpComponent,
        children: [
          { path: 'jp/technology', component: JpTechnologyComponent }
          
        ]
 },
  { 
        path: '', 
        component: FrontInnerLayoutComponent,
        children: [
          { path: 'careers', component: HumanresourceComponent }
          
        ]
 },
  { 
        path: '', 
        component: FrontinnerInnerLayoutJpComponent,
        children: [
          { path: 'jp/careers', component: JpHumanresourceComponent }
          
        ]
 },
 { 
        path: '', 
        component: FrontInnerLayoutComponent,
        children: [
          { path: 'contact', component: ContactComponent }
		  //{ path: 'contact',  loadChildren: './frontend/contact/contact.module#ContactModule'}
          
        ]
 },
 { 
        path: '', 
        component: FrontinnerInnerLayoutJpComponent,
        children: [
          { path: 'jp/contact', component: JpContactComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/product_edit/:id', component: ProductEditComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology', component: TechnologyListComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology/equipment', component: TechnologyEquipmentComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology/manufacturing', component: TechnologyManufacturingComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology/add', component: TechnologyAddComponent }
          
        ]
 },
   { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology/edit/:id', component: TechnologyEditComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology/equipment/add', component: EquipmentAddComponent }
          
        ]
 },
   { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology/equipment/edit/:id', component: EquipmentEditComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/technology/manufacturing/add', component: ManufactureingAddComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/event', component: AdminEventComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/event/add', component: AdminEventAddComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/event/edit/:id', component: AdminEventEditComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/about', component: AdminAboutusComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/homecontent', component: HomecontentComponent }
          
        ]
 },
 
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/codeofconduct', component: AdminCodeofconductComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/overview', component: AdminCompanyoverviewComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/history', component: AdminCompanyhistoryComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/info', component: AdminAboutOtherinfoComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/history/add', component: AdminCompanyhistoryAddComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/history/edit/:id', component: AdminCompanyhistoryEditComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/globalpresence', component: GlobalPresenceComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/globalpresence/add', component: GlobalPresenceAddComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/globalpresence/edit/:id', component: GlobalPresenceEditComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/achivement', component: AchievmentComponent }
          
        ]
 },
  { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/achivement/add', component: AchievmentAddComponent }
          
        ]
 }, { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/certificate', component: CerttificationComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/certificate/add', component: CerttificationAddComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/editor', component: EditorContentComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/editor/add', component: EditorContentAddComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/customer', component: CustomerComponent }
          
        ]
 },
 { 
        path: '', 
        component: AdminHomeLayoutComponent,
        children: [
          { path: 'admin/customer/add', component: CustomerAddComponent }
          
        ]
 },
 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
