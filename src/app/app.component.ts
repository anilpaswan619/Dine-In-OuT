import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dine-in-out';
  loadedFeature = 'recipes';

  onNavigate(featureSelected:string){
     this.loadedFeature = featureSelected;
  }
}
