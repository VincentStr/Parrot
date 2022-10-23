import { Component, Input, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() value = 0
  color = "primary"
  mode: ProgressSpinnerMode = 'determinate';
  @Input() text = ""
}
