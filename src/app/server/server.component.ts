import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: green;
    }
    
    .offline {
      color: red;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  getServerStatus() {
    return this.serverStatus;
  }
  
  getColor() {
    // === will not do necessary type conversions
    return this.serverStatus === 'online' ? 'palegreen' : 'mistyrose';
  }
}