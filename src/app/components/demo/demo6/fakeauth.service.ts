import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  private url : string = environment.url
  private _isConnected! : boolean

  get isConnected() : boolean {
    if(localStorage.getItem('token') != '' && localStorage.getItem('token')) return true
    return false
  }
  //stateSubject : Subject<boolean> = new Subject<boolean>()
  stateSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected)

  constructor(
    private client : HttpClient
  ) { }

  notifySubscribed() {
    this.stateSubject.next(this.isConnected)
  }

  login() {
    this.client.post<User>(this.url+'auth', {email : 'admin@test.com', password : 'admin1234='}).subscribe({
      next : (data : User) => {
        console.log(data)
        localStorage.setItem('token', data.token)
      },
      error : (error) => console.log(error)
  })

    this.notifySubscribed()
  }

  logout() {
    localStorage.removeItem('token')
    this.notifySubscribed()
  }

  getall() {
    // let header = new HttpHeaders({
    //   'authorization' : 'bearer '+ localStorage.getItem('token')
    // })
    this.client.get<any>(this.url+'auth').subscribe({
      next : (data : any) => console.log(data),
      error : (error) => console.log(error.status),
      complete : () => console.log('jai fini connard')
    })
  }
}

export interface User {
  id: number;
  email: string;
  nickName: string;
  role: string;
  token: string;
}
