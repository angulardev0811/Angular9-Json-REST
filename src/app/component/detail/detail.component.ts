import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() datalist: object;
  @Input() featuredata: object;
  @Input() offerdata: object;
  id: any;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpClient.get('assets/details.json').subscribe( data => {
      // tslint:disable-next-line: prefer-for-of
        this.datalist = data;
        this.featuredata = data['features'];
        this.offerdata = data['offers'];
    });
  }

}
