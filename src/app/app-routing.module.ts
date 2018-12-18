import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from '../app/web/web.component';
import { MobileComponent} from '../app/mobile/mobile.component';

import { AppComponent } from './app.component';

import { ContactComponent } from '../app/contact/contact.component';

const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full'},

 { 

   path: 'app',
   redirectTo: '/app', pathMatch: 'full',

 },


 { 

  path: 'app',
  component: AppComponent,

},



 { 
   path: 'web',
   component: WebComponent,
 },

 {
   path: 'mobile',
   component: MobileComponent,
 },

 {
  path: 'contact',
  component: ContactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = { WebComponent, MobileComponent, AppComponent, ContactComponent}
