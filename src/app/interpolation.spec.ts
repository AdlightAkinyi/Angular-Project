import { Component,OnInit } from '@angular/core';
// import { Interpolation } from './interpolation'


@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

cars=['Toyota','Subaru','Jeep'];
person={name:"Laveen",occupation:"student",age:20}


noOfCars=()=>{
  return this.cars.length;
}
}

// describe('Interpolation', () => {
//   it('should create an instance', () => {
//     expect(new Interpolation()).toBeTruthy();
//   });
// });
