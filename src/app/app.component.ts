import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.data = this.getData();
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
  }

  data = [];
  displayColumns: string[] = ['movie', 'year', 'director', 'role', 'notes'];

  private getData(): any {
    return [
      { year: 1991, movie: 'Critters 3', role: 'Josh', director: 'Kristine Peterson', notes: 'Direct-to-video', },
      { year: 1992, movie: 'Poison Ivy', role: 'Guy', director: 'Katt Shea', notes: 'Credited as Leonardo Di Caprio', },
      { year: 1993, movie: 'This Boy\'s Life', role: 'Tobias Toby Wolff', director: 'Michael Caton-Jones', },
      { year: 1993, movie: 'What\'s Eating Gilbert Grape', role: 'Arnie Grape', director: 'Lasse Hallström', },
      { year: 1995, movie: 'The Basketball Diaries', role: 'Jim Carroll', director: 'Scott Kalvert', },
      { year: 1995, movie: 'The Quick and the Dead', role: 'Fee The Kid Herod', director: 'Sam Raimi', },
      { year: 1995, movie: 'Total Eclipse', role: 'Arthur Rimbaud', director: 'Agnieszka Holland', },
      { year: 1996, movie: 'Romeo + Juliet', role: 'Romeo Montague', director: 'Baz Luhrmann', },
      { year: 1996, movie: 'Marvin\'s Room', role: 'Hank', director: 'Jerry Zaks', },
      { year: 1997, movie: 'Titanic', role: 'Jack Dawson', director: 'James Cameron', },
      { year: 1998, movie: 'The Man in the Iron Mask', role: 'King Louis XIV / Philippe', director: 'Randall Wallace', },
      { year: 1998, movie: 'Celebrity', role: 'Brandon Darrow', director: 'Woody Allen', },
      { year: 2000, movie: 'The Beach', role: 'Richard', director: 'Danny Boyle', },
      { year: 2002, movie: 'Catch Me If You Can', role: 'Frank Abagnale Jr.', director: 'Steven Spielberg', },
      { year: 2002, movie: 'Gangs of New York', role: 'Amsterdam Vallon', director: 'Martin Scorsese', },
      { year: 2004, movie: 'The Aviator', role: 'Howard Hughes', director: 'Martin Scorsese', },
      { year: 2006, movie: 'The Departed', role: 'William Billy Costigan', director: 'Martin Scorsese', },
      { year: 2006, movie: 'Blood Diamond', role: 'Danny Archer', director: 'Edward Zwick', },
      { year: 2007, movie: 'The 11th Hour', role: 'Narrator', director: 'NA', notes: 'Documentary', },
      { year: 2008, movie: 'Body of Lies', role: 'Roger Ferris', director: 'Ridley Scott', },
      { year: 2008, movie: 'Revolutionary Road', role: 'Frank Wheeler', director: 'Sam Mendes', },
      { year: 2010, movie: 'Shutter Island', role: 'Edward Teddy Daniels', director: 'Martin Scorsese', },
      { year: 2010, movie: 'Hubble', role: 'Narrator', director: 'NA', notes: 'Documentary', },
      { year: 2010, movie: 'Inception', role: 'Dom Cobb', director: 'Christopher Nolan', },
      { year: 2011, movie: 'J. Edgar', role: 'J. Edgar Hoover', director: 'Clint Eastwood', },
      { year: 2012, movie: 'Django Unchained', role: 'Calvin J. Candie', director: 'Quentin Tarantino', },
      { year: 2013, movie: 'The Great Gatsby', role: 'Jay Gatsby', director: 'Baz Luhrmann', },
      { year: 2013, movie: 'The Wolf of Wall Street', role: 'Jordan Belfort', director: 'Martin Scorsese', },
      { year: 2015, movie: 'The Audition', role: 'Himself', director: 'NA', notes: 'Short film', },
      { year: 2015, movie: 'The Revenant', role: 'Hugh Glass', director: 'Alejandro G. I񡲲itu', },
      { year: 2016, movie: 'Before the Flood', role: 'Himself', director: 'NA', notes: 'Documentary', },
      { year: 2019, movie: 'Ice on Fire', role: 'Narrator', director: 'NA', notes: 'Documentary', },
      { year: 2019, movie: 'Once Upon a Time in Hollywood', role: 'Rick Dalton', director: 'Quentin Tarantino', },

    ];
  }

  sortData($event) {
    const sortId = $event.active;
    const sortDirection = $event.direction;
    if ('asc' == sortDirection) {
      this.dataSource.data = this.data.slice().sort(
        (a, b) => a[sortId] > b[sortId] ? -1 : a[sortId] < b[sortId] ? 1 : 0
      );
    } else {
      this.dataSource.data = this.data.slice().sort(
        (a, b) => a[sortId] < b[sortId] ? -1 : a[sortId] > b[sortId] ? 1 : 0
      );
    }
  }

  openFilter(col: string) {
    document.getElementById(col + '-filter').removeAttribute('hidden');
  }

  closeFilter(col: string) {
    document.getElementById(col + '-filter').setAttribute('hidden', 'true');
  }

  filterData(col: string, filtertext: string) {
    if (filtertext.trim() != '') {
      this.dataSource.data = this.data.slice().filter(
        (element) => JSON.stringify(element[col]).indexOf(filtertext) > -1
      );
    }
  }

  reorderColumns($event) {
    const fromIndex:number = this.displayColumns.indexOf($event.previousContainer.id);
    const toIndex:number = this.displayColumns.indexOf($event.container.id);
    moveItemInArray(this.displayColumns, fromIndex, toIndex);
  }
  
}
