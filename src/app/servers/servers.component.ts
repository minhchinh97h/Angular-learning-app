import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allow_new_server: boolean = false;
  server_creation_status = "No Server was created";
  server_name = "Test server";
  server_created = false;

  servers = ["Testserver", "Testserver 2"];

  constructor() {
    setTimeout(() => {
      this.allow_new_server = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.server_created = true;
    this.servers.push(this.server_name);
    this.server_creation_status =
      "Server was created! Name is " + this.server_name;
  }

  onUpdateServerName(event: Event) {
    this.server_name = (<HTMLInputElement>event.target).value;
  }
}
