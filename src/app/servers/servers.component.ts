import { Component, OnInit, Input } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Input('child-printServerInfo') printServerInfo : "";
  @Input('child-is-server-online')serverOnline : "";
  @Input()buttonIsClicked:boolean;
  constructor() { }

  ngOnInit() {
  }

}
