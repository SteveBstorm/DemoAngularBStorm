import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  fromParent : string = "Gavin t'es chiant"
  fromChildren! : string
  constructor() { }

  ngOnInit(): void {
  }

  declencheeParEnfant(value : string) {
    this.fromChildren = value
  }

}
