import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  // external styling
  styleUrls: ['./app.component.css']

  //inline styles
//   styles: [`
//   h3{
//     color:red;
//   }`
// ]
})
export class AppComponent {
  showSecret = false;
  log: any[] = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
