import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
//import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroesComponent } from './heroes/heroes.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
//import { MessagesComponent } from './messages/messages.component';
//import { MessageService } from './message.service';
import { CreatePostComponent } from './admin/create-post/create-post.component';

import { HttpClientModule } from '@angular/common/http';
import { AllPostComponent } from './admin/all-post/all-post.component';
import { LoginComponent } from './admin/login/login.component';
//import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginLayoutComponent } from './admin-login-layout/admin-login-layout.component';
import { AdminHomeLayoutComponent } from './admin-home-layout/admin-home-layout.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FrontDashboardComponent } from './frontend/front-dashboard/front-dashboard.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { FrontHeaderComponent } from './front-header/front-header.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
import { ProductComponent } from './admin/product/product.component';
import { AllProductComponent } from './admin/all-product/all-product.component';
import { AboutComponent } from './frontend/about/about.component';
import { TechnologyComponent } from './frontend/technology/technology.component';
import { HumanresourceComponent } from './frontend/humanresource/humanresource.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { FrontInnerLayoutComponent } from './front-inner-layout/front-inner-layout.component';
import { FrontinnerHeaderComponent } from './frontinner-header/frontinner-header.component';
import { FrontProductComponent } from './frontend/front-product/front-product.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { TechnologyListComponent } from './admin/technology-list/technology-list.component';
import { TechnologyEquipmentComponent } from './admin/technology-equipment/technology-equipment.component';
import { TechnologyManufacturingComponent } from './admin/technology-manufacturing/technology-manufacturing.component';
import { TechnologyAddComponent } from './admin/technology-add/technology-add.component';
import { TechnologyEditComponent } from './admin/technology-edit/technology-edit.component';
import { EquipmentEditComponent } from './admin/equipment-edit/equipment-edit.component';
import { EquipmentAddComponent } from './admin/equipment-add/equipment-add.component';
import { ManufactureingAddComponent } from './admin/manufactureing-add/manufactureing-add.component';
import { ManufactureingEditComponent } from './admin/manufactureing-edit/manufactureing-edit.component';
import { AdminEventComponent } from './admin/admin-event/admin-event.component';
import { AdminEventAddComponent } from './admin/admin-event-add/admin-event-add.component';
import { AdminEventEditComponent } from './admin/admin-event-edit/admin-event-edit.component';
import { AdminAboutusComponent } from './admin/admin-aboutus/admin-aboutus.component';
import { AdminCodeofconductComponent } from './admin/admin-codeofconduct/admin-codeofconduct.component';
import { AdminAboutusEditComponent } from './admin/admin-aboutus-edit/admin-aboutus-edit.component';
import { AdminCodeofconductEditComponent } from './admin/admin-codeofconduct-edit/admin-codeofconduct-edit.component';
import { AdminAboutOtherinfoComponent } from './admin/admin-about-otherinfo/admin-about-otherinfo.component';
import { AdminAboutOtherinfoAddComponent } from './admin/admin-about-otherinfo-add/admin-about-otherinfo-add.component';
import { AdminAboutOtherinfoEditComponent } from './admin/admin-about-otherinfo-edit/admin-about-otherinfo-edit.component';
import { AdminCompanyoverviewComponent } from './admin/admin-companyoverview/admin-companyoverview.component';
import { AdminCompanyoverviewAddComponent } from './admin/admin-companyoverview-add/admin-companyoverview-add.component';
import { AdminCompanyoverviewEditComponent } from './admin/admin-companyoverview-edit/admin-companyoverview-edit.component';
import { AdminCompanyhistoryComponent } from './admin/admin-companyhistory/admin-companyhistory.component';
import { AdminCompanyhistoryAddComponent } from './admin/admin-companyhistory-add/admin-companyhistory-add.component';
import { AdminCompanyhistoryEditComponent } from './admin/admin-companyhistory-edit/admin-companyhistory-edit.component';
import { FrontLayoutJpComponent } from './front-layout-jp/front-layout-jp.component';
import { FrontFooterJpComponent } from './front-footer-jp/front-footer-jp.component';
import { FrontHeaderJpComponent } from './front-header-jp/front-header-jp.component';
import { JpDashboardComponent } from './frontend/jp-dashboard/jp-dashboard.component';
import { JpAboutComponent } from './frontend/jp-about/jp-about.component';
import { JpProductComponent } from './frontend/jp-product/jp-product.component';
import { JpHumanresourceComponent } from './frontend/jp-humanresource/jp-humanresource.component';
import { JpTechnologyComponent } from './frontend/jp-technology/jp-technology.component';
import { JpContactComponent } from './frontend/jp-contact/jp-contact.component';
import { FrontinnerHeaderJpComponent } from './frontinner-header-jp/frontinner-header-jp.component';
import { FrontinnerInnerLayoutJpComponent } from './frontinner-inner-layout-jp/frontinner-inner-layout-jp.component';
import { GlobalPresenceComponent } from './admin/global-presence/global-presence.component';
import { GlobalPresenceAddComponent } from './admin/global-presence-add/global-presence-add.component';
import { CerttificationComponent } from './admin/certtification/certtification.component';
import { AchievmentComponent } from './admin/achievment/achievment.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { CustomerAddComponent } from './admin/customer-add/customer-add.component';
import { AchievmentAddComponent } from './admin/achievment-add/achievment-add.component';
import { CerttificationAddComponent } from './admin/certtification-add/certtification-add.component';
import { GlobalPresenceEditComponent } from './admin/global-presence-edit/global-presence-edit.component';
import { HomecontentComponent } from './admin/homecontent/homecontent.component';
import { EditorContentComponent } from './admin/editor-content/editor-content.component';
import { EditorContentAddComponent } from './admin/editor-content-add/editor-content-add.component';
//import { BookCreateComponent } from './book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
   // DashboardComponent,
  //  HeroesComponent,
 //   HeroDetailComponent,
  //  MessagesComponent,
    CreatePostComponent,
    AllPostComponent,
    LoginComponent,
    //AdminDashboardComponent,
    AdminLoginLayoutComponent,
    AdminHomeLayoutComponent,
    AdminFooterComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    SidebarComponent,
    FrontDashboardComponent,
    FrontLayoutComponent,
    FrontHeaderComponent,
    FrontFooterComponent,
    ProductComponent,
    AllProductComponent,
    AboutComponent,
    TechnologyComponent,
    HumanresourceComponent,
    ContactComponent,
    FrontInnerLayoutComponent,
    FrontinnerHeaderComponent,
    FrontProductComponent,
    ProductEditComponent,
    TechnologyListComponent,
    TechnologyEquipmentComponent,
    TechnologyManufacturingComponent,
    TechnologyAddComponent,
    TechnologyEditComponent,
    EquipmentEditComponent,
    EquipmentAddComponent,
    ManufactureingAddComponent,
    ManufactureingEditComponent,
    AdminEventComponent,
    AdminEventAddComponent,
    AdminEventEditComponent,
    AdminAboutusComponent,
    AdminCodeofconductComponent,
    AdminAboutusEditComponent,
    AdminCodeofconductEditComponent,
    AdminAboutOtherinfoComponent,
    AdminAboutOtherinfoAddComponent,
    AdminAboutOtherinfoEditComponent,
    AdminCompanyoverviewComponent,
    AdminCompanyoverviewAddComponent,
    AdminCompanyoverviewEditComponent,
    AdminCompanyhistoryComponent,
    AdminCompanyhistoryAddComponent,
    AdminCompanyhistoryEditComponent,
    FrontLayoutJpComponent,
    FrontFooterJpComponent,
    FrontHeaderJpComponent,
    JpDashboardComponent,
    JpAboutComponent,
    JpProductComponent,
    JpHumanresourceComponent,
    JpTechnologyComponent,
    JpContactComponent,
    FrontinnerHeaderJpComponent,
    FrontinnerInnerLayoutJpComponent,
    GlobalPresenceComponent,
    GlobalPresenceAddComponent,
    CerttificationComponent,
    AchievmentComponent,
    CustomerComponent,
    CustomerAddComponent,
    AchievmentAddComponent,
    CerttificationAddComponent,
    GlobalPresenceEditComponent,
    HomecontentComponent,
    EditorContentComponent,
    EditorContentAddComponent,
  //  BookCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  HttpClientModule
  ],
 // providers: [HeroService, MessageService],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
