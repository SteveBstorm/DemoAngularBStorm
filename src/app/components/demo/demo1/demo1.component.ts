import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  personne : any = {nom : "toto", age : 42}
  mafunc : any = (x : string) => {console.log(x)}

  montexte! : string
  nbr  = 0
  maboule : boolean = false
  naiss : Date = new Date()
  timer! : object

  private _machin! : string
  get machin() : string {
    return this._machin
  }
  set machin(value : string) {
    this._machin = value
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.machin)
    this.mafunc("truc")
    // this.timer = setInterval(this.afficherTemp(), 1000)
    console.log(typeof(this.afficherTemp))
  }

  afficherTemp() : number {
    console.log()
    return 0;
  }

}
