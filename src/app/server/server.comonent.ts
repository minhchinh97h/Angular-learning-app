import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  server_id: number = 10;
  server_status: string = "offline";

  constructor() {
    this.server_status = Math.random() > 0.5 ? "online" : "offline";
  }

  _getServerStatus = () => {
    return this.server_status;
  };

  getColor = () => {
    return this.server_status === "online" ? "green" : "red";
  };
}
