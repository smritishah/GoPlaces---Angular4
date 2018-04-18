import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from './../data.service';
import { details } from './../details';
import 'rxjs/Rx';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private http: Http, private detailService: DataService, private route: ActivatedRoute) {
  }
  
  // details:Array<Object>= [];
  details: details;

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.detailService.getDetailsById(params.get('id')))
    .subscribe(details => { 
      this.details = details.results[0];
      console.log("in detail component");
      console.log(this.details);
    });
  }

}
