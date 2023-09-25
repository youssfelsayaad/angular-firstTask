import { Component } from '@angular/core';

//  decorator ==> metadata (additional information of class)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName :string = "Nouran"
  lastName: string = "Fayez"
  address = "nasr city"
  inputType = 'text'
  inputId: string = "UserName"
  placeholder = 'Enter UserName'
  paragraphText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, necessitatibus!"
  name : any
  disabled : boolean = false

  classText = "text-danger"


  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
