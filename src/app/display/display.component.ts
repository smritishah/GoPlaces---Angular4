import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute,RouterModule,Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  public Query: string;
  private observerRef: any;

  constructor(private http: Http, 
              private route: ActivatedRoute,
              private router: Router) { 
        this.observerRef = route.params.subscribe(params => {
          this.Query = params['query'];
        });
        
              }

  staticURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
  api_key = 'AIzaSyADEU0jk0lwewzBjLDNpL_74oM_nC5Hr_I';
  url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospital%20koramangla&key=AIzaSyADEU0jk0lwewzBjLDNpL_74oM_nC5Hr_I'
  data=[];  

  ngOnInit() {
    this.url = this.staticURL + this.Query + '&key=' + this.api_key;
    this.http.get(this.url)
    .subscribe((res: Response) => {
      this.data = res.json().results;
      console.log(this.data);
    });
  }

  showMore(id:string) { 
    
    console.log("Get to detail",id);
    let link = ['/detail', id];
    this.router.navigate(link);
  }
  
}
