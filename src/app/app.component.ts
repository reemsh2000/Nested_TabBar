import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../app/home-nav/home-nav.component.scss'],
})
export class AppComponent {
  title = 'tab_';
  selectedTab: any = 'Clearance Alerts';
  index: number = 0;

  docItems: MenuItem[] = [
    { label: 'Clearance Alerts', command: () => (this.index = 0) },
    { label: 'Certifications', command: () => (this.index = 1) },
    { label: 'Bank Details', command: () => (this.index = 2) },
    { label: 'Legal Docs', command: () => (this.index = 3) },
    { label: 'Other Docs', command: () => (this.index = 4) },
  ];
  ngOnInit() {
  }
}
