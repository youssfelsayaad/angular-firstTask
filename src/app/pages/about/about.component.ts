import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  inputType = 'password'
  inputValue: any = ""
  userNameInputValue = ""

  handleInputType() {
    this.inputType = 'text'

  }
  handleInput(event: any) {
    console.log(event)
    // console.log(event.target.value)
    // this.inputValue = event.target.value
    this.inputValue = event.value
  }

}
