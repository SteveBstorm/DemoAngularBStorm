import { FakeauthService } from './../demo/demo6/fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isConnected! : boolean
  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this.service.isConnected
  }

}
