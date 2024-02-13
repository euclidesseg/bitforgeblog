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
    { label: 'Inicio', class: 'bi bi-house-door-fill', route: './blogs' },
    { label: 'Mensajes', class: 'bi bi-chat-left-dots-fill messages', route: './messages' },
    { label: 'Estadisticas', class: 'bi bi-bar-chart-fill graphic', route: './statistics' },
    { label: 'Configuración', class: 'bi bi-gear-fill', route: './settings' },
  ];
}
