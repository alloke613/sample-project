import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/layouts/sidenav/sidenav.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  openSidenav: Boolean = false
  fixedViewPort: Boolean = true
  fixedTopGap: Number = 60
  fixedBottomGap: Number = 35

  constructor(
    private sidenavService: SidenavService,
  ) { }

  ngOnInit(): void {
    this.sidenavService.sidenavSubject.subscribe(status => {
      this.openSidenav = status
    })
  }
}