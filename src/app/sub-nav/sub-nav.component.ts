import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  @Input() items: any[] = [];
  index: number = 0;
  selectedTab: any = 'Clearance Alerts';
  docItems: MenuItem[] = [
    { label: 'Clearance Alerts', command: () => (this.index = 0) },
    { label: 'Certifications', command: () => (this.index = 1) },
    { label: 'Bank Details', command: () => (this.index = 2) },
    { label: 'Legal Docs', command: () => (this.index = 3) },
    { label: 'Other Docs', command: () => (this.index = 4) },
  ];
  constructor() {}

  ngOnInit(): void {}

}
