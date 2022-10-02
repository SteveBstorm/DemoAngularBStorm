import { FakeauthService } from './fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  isConnected! : boolean
  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this.service.isConnected
  }

  login() {
    this.service.login()
    this.isConnected = this.service.isConnected

  }

  logout() {
    this.service.logout()
    this.isConnected = this.service.isConnected

  }

  getall() {
    this.service.getall()
  }
}
