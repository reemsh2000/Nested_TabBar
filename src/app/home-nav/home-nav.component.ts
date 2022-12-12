import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeNavComponent implements OnInit {
  items = [
    { header: 'Profile', label: 'Update', icon: 'pi pi-refresh' },
    { header: 'Dependents', label: 'Delete', icon: 'pi pi-times' },
    {
      header: 'Remarks',
      label: 'Angular.io',
      icon: 'pi pi-info',
      url: 'http://angular.io',
    },
    //  {header:"Documents",label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
  constructor() {}

  ngOnInit(): void {}
}
