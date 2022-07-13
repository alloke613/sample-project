import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isOpened: Boolean = false
  private routerConfig: any = {}
  public sidenavSubject: BehaviorSubject<any> = new BehaviorSubject(this.isOpened)
  public menuItems: BehaviorSubject<any> = new BehaviorSubject(this.routerConfig)

  constructor(private router: Router) { }

  public setSidenav() {
    return this.sidenavSubject.next(this.isOpened)
  }

  public open() {
    return this.sidenavSubject.next(true)
  }

  public close() {
    return this.sidenavSubject.next(false)
  }

  public toggle(): void {
    this.isOpened = !this.isOpened
    return this.sidenavSubject.next(this.isOpened)
  }

  public getRoutes(): Observable<any> {
    this.menuItems.next(this.router.config)
    return this.menuItems.asObservable()
  }

  public setRoutes(): void {
    this.menuItems.next(this.router.config)
  }
}