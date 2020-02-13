import { Component } from "@angular/core";

@Component({
  selector: "app-assign3",
  templateUrl: "./assign3.component.html",
  styleUrls: ["./assign3.component.css"]
})
export class Assign3Component {
  log = [];
  show_paragraphs = false;

  onDisplayDetails = () => {
    this.show_paragraphs = true;
    this.log.push(Date.now());
  };
}
