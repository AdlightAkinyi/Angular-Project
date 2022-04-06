import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities:string[];
  constructor(){
    this.cities=['Nairobi','Mombasa','Kisumu']

  }
  //  title = 'cities';
  
}
