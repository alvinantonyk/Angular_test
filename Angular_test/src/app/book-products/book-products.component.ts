import { Component } from '@angular/core';
import { BookHelperService } from '../book-helper.service';

@Component({
  selector: 'app-book-products',
  
  templateUrl: './book-products.component.html',
  styleUrl: './book-products.component.scss'
})
export class BookProductsComponent {
  public bookReview:string = 'welcome ';

}
