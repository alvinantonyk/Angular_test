import { Injectable } from '@angular/core';


export class BookSummaryService {

  constructor() { }
   allBooks = [
    {
      bookname: "abc",
      summary: "Test abc.",
    },
    {
      bookname: "Harry Potter and the Chamber of Secrets",
      summary: "Summary for the second Harry Potter book.",
    },
    {
      bookname: "Harry Potter and the Prisoner of Azkaban",
      summary: "Summary for the third Harry Potter book.",
    },
    {
      bookname: "A Game of Thrones",
      summary: "Summary for the first book in A Song of Ice and Fire series.",
    },
    {
      bookname: "A Clash of Kings",
      summary: "Summary for the second book in A Song of Ice and Fire series.",
    },
    {
      bookname: "A Storm of Swords",
      summary: "Summary for the third book in A Song of Ice and Fire series.",
    },
    {
      bookname: "To Kill a Mockingbird",
      summary: "Summary for the classic novel To Kill a Mockingbird.",
    },
  ];

  public BookSummary(bookname:string):string{
    let summary :string="";
    var found=this.allBooks.find(book=>book.bookname.toLowerCase()==bookname.toLowerCase())?.summary.split(' ');
    found?.forEach(element => {
      
      var a= element.charAt(0).toUpperCase() + element.slice(1);
      summary+=a+" ";
    });
    
    

  if(summary!="")
    return summary

  return "Book not found";
 

  }



}
