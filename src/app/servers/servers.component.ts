import { Component, OnInit } from '@angular/core';


// -> we can have inline templates and external template files
// totally depends on us
@Component({
  //as element
  selector: 'app-servers',
  
  //as attribute
  //selector: '[app-servers]',
  
  //as by class
  //selector: '.app-servers',
  
  //external template
  //templateUrl: './servers.component.html',

//-> inline template
// template: `
// <app-server></app-server>
// <app-server></app-server>
// `
templateUrl: './servers.component.html'
,
styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TESTSERVER';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];


  constructor() {
    
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
   }


  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(event);
  }
}
