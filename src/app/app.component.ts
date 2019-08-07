import { Component, Output } from '@angular/core';
import { WebcallService } from './webcall.service';
import { Observable, observable } from 'rxjs';
import { getRandomString } from 'selenium-webdriver/safari';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Another';
  @Output() feedback = [];
  constructor(private webService: WebcallService) {

  }

  hide(){
    document.getElementById('carousal').style.display = 'hide';
  }

  display(i: number){
    document.getElementById('carousal').innerHTML = '<img src=' + this.feedback[i].images[0].href + '>';
    console.log(i);
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.webService.getData().subscribe(data =>
      {this.feedback = data.groups;
       console.log(this.feedback);
    }
    );


  }
}

