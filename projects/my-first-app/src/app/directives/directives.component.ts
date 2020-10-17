import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  toggleDeets = false;
  clickCount = 0;
  clickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowDeets(): void {
    //this.clickLog.push(this.clickCount++);
    this.clickLog.push(new Date());
    this.toggleDeets = !this.toggleDeets;
  }

  getColor(clickCount): string {
    if (clickCount > 4){
      return 'blue';
    }
  }
}
