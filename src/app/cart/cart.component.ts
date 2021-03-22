import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: any;
  @Output() cartChanged = new EventEmitter<string>();

  newItem = '';

  onCartInput(event: any){
    this.newItem = event.target.value;
    // console.log(this.newItem);
  }

  onCartSubmit(newItem: any){
    console.log("onCartSubmit", newItem);
    this.cartChanged.emit(newItem);
  }

}
