import { Injectable } from '@angular/core';


export class BookHelperService {

  constructor() { }

  public uppercaseBooks(books:Array<string>):Array<string>{
    return books.map(book=> book.toUpperCase());
  }
}
