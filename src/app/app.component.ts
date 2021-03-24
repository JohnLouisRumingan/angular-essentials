import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-essentials';
  rootName = 'John-Louis';
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName: any){
    this.rootName = newName;
  }

  onCartAddition(newItem: any){
    console.log(newItem);
    console.log("Item Added!");
    this.rootItems.push(newItem);
    console.log(this.rootItems);

    // new item is pushed into the array
    // however, app-cart is not being updated with updated array. Will be done with directives
  }
}
