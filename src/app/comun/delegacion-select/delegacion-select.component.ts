import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-delegacion-select',
  templateUrl: './delegacion-select.component.html',
  styleUrls: ['./delegacion-select.component.scss']
})
export class DelegacionSelectComponent implements OnInit {

  ooad = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
