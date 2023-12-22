import { NgModule } from "@angular/core";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { BitForgeRoutingModule } from "./bitforgeblog-routing.module";
import { CommonModule } from "@angular/common";
import { MessagePageComponent } from "./pages/message-page/message-page.component";
import { StatisticPageComponent } from "./pages/statistic-page/statistic-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";

@NgModule({
    declarations:[
      LayoutPageComponent,
      BlogPageComponent,
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