import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})


export class UserComponent{
  name = 'John-Louis'; //because string, TS implicitly attaches name: string to this property

  onUserInput(event: any){
    this.name = event.target.value;
  }
}
