import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/layouts/sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // TODO: Set isAuthorised to get from Auth service
  isAuthorised: Boolean = true

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenavService.toggle()
  }
}