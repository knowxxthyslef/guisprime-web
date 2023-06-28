import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  SummaryColoredCardModel } from './summary-colored-card.model';

@Component({
  selector: 'app-summary-colored-card',
  templateUrl: './summary-colored-card.component.html',
  styleUrls: ['./summary-colored-card.component.scss']
})
export class SummaryColoredCardComponent implements OnInit {

  @Input() button: SummaryColoredCardModel;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

}
