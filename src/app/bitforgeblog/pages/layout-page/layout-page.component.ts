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
    { label: '', class: 'bi bi-chat-left-dots messages', route: './messages' },
    { label: '', class: 'bi bi-bar-chart graphic', route: './statistics' },
    { label: '', class: 'bi bi-gear', route: './settings' },
  ];
}
