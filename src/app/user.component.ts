import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})


export class UserComponent{
  @Input() rootName: any; //because string, TS implicitly attaches name: string to this property
  // property is setable from app.component due to @Input() decorator
  @Output() nameChanged = new EventEmitter<string>();


  onUserInput(event: any){
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value); //event.target.value should be a string passed into this object
  }
}
