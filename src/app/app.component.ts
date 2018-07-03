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
  toggleFlag: boolean = true;
  currentTime: string;
  title = 'Current Time';
  name = 'slideToggle';
  id = 'materialSlideToggle';
  checked = false;
  disabled = false;
  label = 'Toggle On/Off';
  labelledby = 'Some Other Text';
  constructor() {
    this.toggleFlag = true;
    let now = moment(); 
    console.log('hello world', now.format());
    this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    Observable.interval(1000).subscribe(x => {
      this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    });
    
  }
  ngOnInit() {
    // Button click handling with jquery
    $(document).ready(() => {
      $(".my-btn").click(() => {
        var div = $("div");
        if(this.toggleFlag) { 
          div.animate({left: '100px'}, "slow");
          div.animate({fontSize: '3em'}, "slow");
          this.toggleFlag = false;
        } else {
          div.animate({left: '8px'}, "slow");
          div.animate({fontSize: '1em'}, "slow");
          this.toggleFlag = true;
        }
      });
    });
  }

  animate() {
    //Button click handling with angular but using jq features inside method
    var div = $("div");
    if(this.toggleFlag) { 
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '3em'}, "slow");
      this.toggleFlag = false;
    } else {
      div.animate({left: '8px'}, "slow");
      div.animate({fontSize: '1em'}, "slow");
      this.toggleFlag = true;
    }
      
    
  }

  toggleButtonClick() {
    this.animate();
  }

}
