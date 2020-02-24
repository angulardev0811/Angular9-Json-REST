import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() cardlist: object;
  @Input() feature: object;
  id: any;
  constructor(private httpClient: HttpClient, private router: Router) { }
  ngOnInit() {
    this.httpClient.get('assets/main.json').subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.feature = data['featured'];
      // tslint:disable-next-line: no-string-literal
      this.cardlist = data['list'];
    });
  }

}
