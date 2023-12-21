import { NgModule } from "@angular/core";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { BlogsPageComponent } from "./pages/blogs-page/blogs-page.component";
import { BitForgeRoutingModule } from "./bitforgeblog-routing.module";
import { CommonModule } from "@angular/common";
import { MessagePageComponent } from "./pages/message-page/message-page.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { StatisticPageComponent } from "./pages/statistic-page/statistic-page.component";

@NgModule({
    declarations:[
      LayoutPageComponent,
      BlogsPageComponent,
      MessagePageComponent,
      StatisticPageComponent
    ],
    imports:[
      BitForgeRoutingModule,
      CommonModule,
    ],
    exports:[
    ]
})
export class BitForgeModule{}