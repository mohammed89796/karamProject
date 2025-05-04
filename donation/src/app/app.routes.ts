import { AlnasFormComponent } from './pages/alnas-form/alnas-form.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';

import { DonationsComponent } from './pages/donations/donations.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HistoryComponent } from './pages/history/history.component';
import { AhlmasrFormComponent } from './pages/ahlmasr-form/ahlmasr-form.component';
import { BaheyaComponent } from './pages/baheya-form/baheya.component';
import { ZakatSadkatFormComponent } from './pages/zakat-sadkat-form/zakat-sadkat-form.component';
import { CancerIFormComponent } from './pages/cancer-i-form/cancer-i-form.component';
import { FoodbankFormComponent } from './pages/foodbank-form/foodbank-form.component';
import { MagdyYacoubComponent } from './pages/magdy-yacoub/magdy-yacoub.component';
import { AlormanComponent } from './pages/alorman/alorman.component';
import { HayahkaremaFormComponent } from './pages/hayahkarema-form/hayahkarema-form.component';

export const routes: Routes = [

    {path:"home",component:HomeComponent,title:"Home"},
    {path:"about",component:AboutComponent,title:"About"},
    {path:"donations",component:DonationsComponent,title:"Donations"},
    {path:"ahlmasr",component:AhlmasrFormComponent,title:"AhlMasr"},
    {path:"alnas",component:AlnasFormComponent,title:"Alnas"},
    {path:"baheya",component:BaheyaComponent,title:"Baheya"},
    {path:"zakat-sadkat",component:ZakatSadkatFormComponent,title:"Biat Zakat and Sadkat"},
    {path:"cancerI",component:CancerIFormComponent,title:"Cancer Institude"},
    {path:"foodbank",component:FoodbankFormComponent,title:"Food Bank"},
    {path:"magdy-yacoub",component:MagdyYacoubComponent,title:"Magdy Yacoub"},
    {path:"alorman",component:AlormanComponent,title:"Alorman "},
    {path:"hayahkarema",component:HayahkaremaFormComponent,title:"Hayah Karema"},







    {path:"history",component:HistoryComponent,title:"history"},

    {path:"contact",component:ContactComponent,title:"contact"},


    { path: 'auth', component: AuthComponent,title:"auth" },


    {path:"nabar",component:NavbarComponent},
    {path:"footer",component:FooterComponent},
    {path:"**",redirectTo:"home",pathMatch:"full"},
    {path:"notfound",component:NotfoundComponent,title:"Not Found"},












];
