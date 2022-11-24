import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flight';


  constructor(private datePipe:DatePipe,){

  }

  status: any[]= [
    {
      flightNumber: "DL1798",
      departureCity: "Vizag",
      arrivalCity: "Chennai",
      departureDate: "2021-09-21",
      arrivalDate: "2021-09-21"
    },
    {
      flightNumber: "DL1416",
      departureCity: "Chennai",
      arrivalCity: "Mumbai",
      departureDate: "2021-09-23",
      arrivalDate: "2021-09-23"
    },
    {
      flightNumber: "DL2519",
      departureCity: "Bangalore",
      arrivalCity: "Hyderabad",
      departureDate: "2021-09-28",
      arrivalDate: "2021-09-28"
    },
    {
      flightNumber: "DL2558",
      departureCity: "Bangalore",
      arrivalCity: "Pune",
      departureDate: "2021-09-29",
      arrivalDate: "2021-09-29"
    },

    {
      flightNumber: "DL1754",
      departureCity: "Hubli",
      arrivalCity: "Cochin",
      departureDate: "2021-09-30",
      arrivalDate: "2021-09-30"
    },
    {
      flightNumber: "DL2639",
      departureCity: "Cochin",
      arrivalCity: "Bangalore",
      departureDate: "2021-10-04",
      arrivalDate: "2021-10-04"
    },
    {
      flightNumber: "DL1239",
      departureCity: "Mumbai",
      arrivalCity: "Delhi",
      departureDate: "2021-10-07",
      arrivalDate: "2021-10-07"
    }
  ];
  statusList: any;


  ddMMyyyy:any = this.datePipe.transform(new Date(),"yyyy-MM-dd");
  today = new Date(this.ddMMyyyy).getTime();


  displayedColumns: string[] = ['flightNumber', 'departureCity', 'arrivalCity', 'departureDate', 'arrivalDate'];
  dataSource = this.status;
  schedule:any={};

  ngOnInit(): void {
    this.dataSource = this.status.filter(
      (book) => new Date(book.departureDate).getTime() ===this.today
    );
  }

  onDateselect(date: any): void {
    this.dataSource=[];
        this.dataSource = this.status.filter(
      (book) => new Date(book.departureDate).getTime() === new Date(date).getTime()
    );
  }
  onDate(event: any): void {
    this.dataSource = this.status.filter(
      (book) => new Date(book.departureDate).getTime() === new Date(this.schedule.date).getTime()
    );
  }
  radioChange(event: any) {
    if (event === "current") {
      this.dataSource = this.status.filter(
        (book) => new Date(book.departureDate).getTime() ===this.today
      );
      console.log(this.dataSource);
    } else if (event === "past") {
      this.dataSource = this.status.filter(
        (book) => new Date(book.departureDate).getTime() < this.today
      );
    } else {
      this.dataSource = this.status.filter(
        (book) => new Date(book.departureDate).getTime() > this.today
      );
    }
  }

}
