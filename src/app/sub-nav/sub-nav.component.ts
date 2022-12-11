import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  @Input() items: any[] = [];
  docItems: any = [
    { label: 'Clearance Alerts' },
    { label: 'Certifications' },
    { label: 'Bank Details' },
    { label: 'Legal Docs' },
    { label: 'Other Docs' },
  ];
  constructor() {
    console.log({ it: this.items });
  }

  ngOnInit(): void {}
}
