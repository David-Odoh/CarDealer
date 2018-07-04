import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-make',
  templateUrl: './list-make.component.html',
  styleUrls: ['./list-make.component.css']
})
export class ListMakeComponent implements OnInit {
theDate = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
