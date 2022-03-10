import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['title', 'owner', 'availability']
  isAvailable = false
  searchText = '';
  filteredLibraryBooks: Book[] = [];
  sampleLibraryBooks: Book[] = [
    {title: "Harry Potter", owner: "John Smith", available: true},
    {title: "Moby Dick", owner: "Andrea Solomon", available: false},
    {title: "A Christmas Carol", owner: "Harry Bond", available: true},
    {title: "The Bible", owner: "Angela Johnson", available: false},
    {title: "Tropic of Cancer", owner: "Fabio Laurentino", available: true}
  ]
  dataSource: Book[] = [];

  
  constructor() { }

  ngOnInit(): void {
    this.filterBooks();
  }

  filterBooks() {
    if (this.searchText === '') {
      this.filteredLibraryBooks = this.sampleLibraryBooks;
    } else {  
    this.filteredLibraryBooks = this.sampleLibraryBooks.filter(book => {
      return book.title.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
  this.dataSource = this.filteredLibraryBooks;
}

}
