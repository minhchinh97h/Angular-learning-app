import { Component } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html"
})
export class UsernameComponent {
  username = "";
  allow_show_username = false;
  shown_username = "";

  allowShowUsername = () => {
    if (this.username.length > 0) {
      return true;
    }

    return false;
  };

  onChangeUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onShowUsername = (event: Event) => {
    this.shown_username = this.username;
    this.username = "";
  };
}
