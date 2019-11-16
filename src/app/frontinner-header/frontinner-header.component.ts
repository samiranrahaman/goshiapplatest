import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-frontinner-header',
  templateUrl: './frontinner-header.component.html',
  styleUrls: ['./frontinner-header.component.css']
})
export class FrontinnerHeaderComponent implements OnInit {
  route: string;
    constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'home'
      }
    });
  }

  ngOnInit() {
  }

}
