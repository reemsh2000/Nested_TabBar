import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../app/home-nav/home-nav.component.scss'],
})
export class AppComponent {
  title = 'tab_';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Profile',
      },
      {
        label: 'Dependents',
      },
      {
        label: 'Remarks',
      },
      {
        label: 'Profile',
        items: [
          { label: 'Clearance Alerts' },
          { label: 'Certifications' },
          { label: 'Bank Details' },
          { label: 'Legal Docs' },
          { label: 'Other Docs' },
        ],
      },
    ];
  }
}
