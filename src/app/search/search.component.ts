import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: Router) { }

  appear=true;
  disappear=false;

  ngOnInit() {
  }

  Jump(term:string) {
    this.route.navigate(['display',term]);
    this.appear=false;
  }

}
