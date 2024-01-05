import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: [
    './layout-page.component.css',
    './layout-page.component-movile.css',
  ],
})
export class LayoutPageComponent {
  public routesItems = [
    { label: '', class: 'bi bi-house', route: './blogs' },
    { label: '', class: '', route: '' },
    { label: '', class: '', route: '' },
    { label: '', class: '', route: '' },
  ];
}
