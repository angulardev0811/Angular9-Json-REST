import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dsection',
  templateUrl: './dsection.component.html',
  styleUrls: ['./dsection.component.scss']
})
export class DsectionComponent implements OnInit {
  @Input() featuredata: object;
  @Input() offerdata: object;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  main() {
    this.router.navigate(['']);
  }
}
