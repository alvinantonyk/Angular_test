import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookRetailComponent } from './book-retail/book-retail.component';
import { BookProductsComponent } from './book-products/book-products.component';
import { BookHelperService } from './book-helper.service';
import { BookSummaryService } from './book-summary.service';



@NgModule({
  declarations: [
    AppComponent,
    BookProductsComponent
  
  ],
  providers:[BookHelperService,BookSummaryService],
  imports: [
    CommonModule,
    BrowserModule,
    BookRetailComponent
   
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
