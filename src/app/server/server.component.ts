import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName: string;
  printServerInfo: string;
  max = 50;
  serverOnline: boolean;
  toggleButton:boolean = true;
  buttonIsClicked:boolean = false;
  theServerName = ['TCServer1','TCServer2','TCServer3','TCServer4','TCServer5'];  
  constructor() { }

  ngOnInit() {
  }

  createServer() {
    let random = Math.random()*100;
    console.log(random);
    this.printServerInfo = "Server was created.Server name is :"+this.serverName;
    this.serverOnline =  random > this.max;
    this.buttonIsClicked = true;
  }

  

}
