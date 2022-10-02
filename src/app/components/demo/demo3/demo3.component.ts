import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  texte : string = "SaLut lEs PigNOUFs"
  nbr : number = 10.4352
  date : Date = new Date()

  marcel : any = {nom : "Hubert", age : 42}
  constructor() { }

  ngOnInit(): void {
  }

}
