import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-model',
  templateUrl: './list-model.component.html',
  styleUrls: ['./list-model.component.css']
})
export class ListModelComponent implements OnInit {
theDate = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
