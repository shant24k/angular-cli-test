import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime: string;
  title = 'Current Time';
  constructor() {
    let now = moment(); 
    console.log('hello world', now.format());
    this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    Observable.interval(1000).subscribe(x => {
      this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    });
    
  }
  ngOnInit() {
    $(document).ready(function(){
        $("button").click(function(){
            var div = $("div");  
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '5em'}, "slow");
        });
    });
  }

}
