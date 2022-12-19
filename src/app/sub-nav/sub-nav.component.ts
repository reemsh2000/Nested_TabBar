import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements AfterViewInit {
  @Input() items: any[] = [];
  @ViewChild('btn') btn: any;
  index: number = 0;
  selectedTab: any = 'Clearance Alerts';
  docItems: MenuItem[] = [
    {
      label: 'Clearance Alerts',
      command: () => {
        this.index = 0;
        this.btn.nativeElement.click();
      },
    },
    {
      label: 'Certifications',
      command: () => {
        this.index = 1;
        this.btn.nativeElement.click();
      },
    },
    {
      label: 'Bank Details',
      command: () => {
        this.index = 2;
        this.btn.nativeElement.click();
      },
    },
    {
      label: 'Legal Docs',
      command: () => {
        this.index = 3;
        this.btn.nativeElement.click();
      },
    },
    {
      label: 'Other Docs',
      command: () => {
        this.index = 4;
        this.btn.nativeElement.click();
      },
    },
  ];

  constructor() {}
  ngAfterViewInit() {
    console.log("111",this.btn.nativeElement)
    //alert(this.opChi.nativeElement) // results in -> ElementRef {nativeElement: p}
    // this.opChi.onShow()
  }
}
