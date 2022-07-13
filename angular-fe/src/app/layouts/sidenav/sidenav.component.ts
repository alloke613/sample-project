import { Component, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public menuItems: any

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.getRoutes().subscribe((menuItems) => {
      this.menuItems = menuItems
    })
    // this.menuItems = this.sidenavService.getRoutes()
  }

  ngOnInit(): void { }
}
