import { ChangeDetectionComponent, SimpleMessageComponent } from './change-detection/change-detection.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GadgetsModule } from './gadgets/gadgets.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductsModule } from './products/products.module';
import {RouterModule, Routes} from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { authReducer } from './ngrx-store/auth-reducer';
import { RegisterComponent } from './register/register.component';
import { AppShareModule } from './app-share/app-share.module';

//configure the routes
const routes: Routes = [
  
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "search", component: SearchComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "changed", component: ChangeDetectionComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: RouteNotFoundComponent}
] 



@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, 
    RouteNotFoundComponent, SearchComponent, LoginComponent, RegisterComponent,ChangeDetectionComponent, SimpleMessageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ProductsModule, 
    GadgetsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({auth: authReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppShareModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
