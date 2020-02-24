import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() feature: object;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detail(id) {
    this.router.navigate(['detail/' + id]);
  }
}
