import { Component } from "@angular/core";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})

export class LoadingComponent{
  loadState = "loading";

  onLoadingClick(event: any){
    this.loadState = "finished";
  }

}

