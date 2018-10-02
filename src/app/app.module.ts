import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { CarsComponent } from './properties/cars/cars.component';
import { BikesComponent } from './properties/bikes/bikes.component';
import { MobilesComponent } from './properties/mobiles/mobiles.component';
import { ElectronicsComponent } from './properties/electronics/electronics.component';
import { FashionComponent } from './properties/fashion/fashion.component';
import { FurnitureComponent } from './properties/furniture/furniture.component';
import { JobsComponent } from './properties/jobs/jobs.component';
import { CategoriesComponent } from './properties/categories/categories.component';
import { BooksComponent } from './properties/books/books.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PetsComponent } from './properties/pets/pets.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CarSaleComponent } from './properties/car-sale/car-sale.component';
import { ServicesComponent } from './properties/services/services.component';
import { PropertiesComponent } from './properties/properties/properties.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarsComponent,
    BikesComponent,
    MobilesComponent,
    ElectronicsComponent,
    FashionComponent,
    FurnitureComponent,
    JobsComponent,
    CategoriesComponent,
    BooksComponent,
    PetsComponent,
    LoginComponent,
    RegisterComponent,
    CarSaleComponent,
    ServicesComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }