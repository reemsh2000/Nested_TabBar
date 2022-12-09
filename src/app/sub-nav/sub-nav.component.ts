import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],

})
export class SubNavComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    this.items = [
      {label: 'Update', icon: 'pi pi-refresh'},
      {label: 'Delete', icon: 'pi pi-times'},
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
   }

  ngOnInit(): void {
  }

}
