import { NgModule } from "@angular/core";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { BlogsPageComponent } from "./pages/blogs-page/blogs-page.component";
import { BitForgeRoutingModule } from "./bitforgeblog-routing.module";
import { CommonModule } from "@angular/common";
import { MessagesComponent } from "./components/messages/messages.component";
import { MessageComponent } from "./pages/message/message.component";

@NgModule({
    declarations:[
      LayoutPageComponent,
      BlogsPageComponent,
      MessageComponent
    ],
    imports:[
      BitForgeRoutingModule,
      CommonModule
    ],
    exports:[
    ]
})
export class BitForgeModule{}