import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  constructor() { }
  @Input() feedback;

  ngOnInit() {
    console.log(this.feedback);
  }

}
