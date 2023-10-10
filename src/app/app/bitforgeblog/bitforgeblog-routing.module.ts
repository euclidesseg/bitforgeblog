import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { BlogsPageComponent } from "./pages/blogs-page/blogs-page.component";


const routes:Routes = [
    {
        path:'',
        component: LayoutPageComponent,
        children:[
            {
                path:'blogs',
                component:BlogsPageComponent
            }
        ]
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[RouterModule]
}) 
export class BitForgeRoutingModule{}


