import { NgModule } from "@angular/core";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { BlogsPageComponent } from "./pages/blogs-page/blogs-page.component";
import { BitForgeRoutingModule } from "./bitforgeblog-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
      LayoutPageComponent,
      BlogsPageComponent
    ],
    imports:[
      BitForgeRoutingModule,
      CommonModule
    ],
    exports:[

    ]
})
export class BitForgeModule{}