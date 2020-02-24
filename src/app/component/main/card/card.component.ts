import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardlist: object;

  constructor(private router: Router) { }
  ngOnInit() { }

  detail(id) {
    this.router.navigate(['detail/' + id]);
  }

}
