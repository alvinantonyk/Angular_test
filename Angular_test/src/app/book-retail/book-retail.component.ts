import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookHelperService } from '../book-helper.service';
import { BookSummaryService } from '../book-summary.service';

@Component({
  selector: 'app-book-retail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './book-retail.component.html',
  styleUrl: './book-retail.component.scss'
})
export class BookRetailComponent  implements OnInit{
  
  constructor(private bookhelp:BookHelperService,private booksummary:BookSummaryService) {}
  book: any[] = [];

  summary : string="";

  ngOnInit(): void {
      
  this.book=[
    {
      author: "J.K. Rowling",
      books: ["abc", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"]
      ,showBooks:false
    },
    {
      author: "George R.R. Martin",
      books: ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords"]
      ,showBooks:false
    },
    {
      author: "Harper Lee",
      books: ["To Kill a Mockingbird"]
      ,showbooks:false
    },
  ]
  }
  showbook(author :any) {
    author.showBooks = !author.showBooks;
    author.books=  this.bookhelp.uppercaseBooks(author.books)
  }

  showSummary(bookName:string){
    
    this.summary=this.booksummary.BookSummary(bookName);
  }
}
