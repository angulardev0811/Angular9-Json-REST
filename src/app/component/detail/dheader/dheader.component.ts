import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dheader',
  templateUrl: './dheader.component.html',
  styleUrls: ['./dheader.component.scss']
})
export class DheaderComponent implements OnInit {
  @Input() datalist: object;
  constructor() { }

  ngOnInit(): void {

  }

}
