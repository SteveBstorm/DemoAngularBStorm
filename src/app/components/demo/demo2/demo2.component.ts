import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  myprop : string = "salut"

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.myprop = "autre chose"
  }

}
