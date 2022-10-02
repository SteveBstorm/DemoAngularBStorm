import { FakeauthService } from './../../components/demo/demo6/fakeauth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  isConnected! : boolean
  serviceSub! : Subscription
  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    this.serviceSub = this.service.stateSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })
  }

  ngOnDestroy() : void  {
    this.serviceSub.unsubscribe()
  }

}
