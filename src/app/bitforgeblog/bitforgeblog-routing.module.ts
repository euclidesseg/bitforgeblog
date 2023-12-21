import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { BlogsPageComponent } from "./pages/blogs-page/blogs-page.component";
import { MessagePageComponent } from "./pages/message-page/message-page.component";
import { StatisticPageComponent } from "./pages/statistic-page/statistic-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { SettingPageComponent } from "./pages/setting-page/setting-page.component";


const routes:Routes = [
    {
        path:'',
        component: LayoutPageComponent,
        children:[
            {
                path:'blogs',
                component:BlogsPageComponent
            },
            {
                path:'messages',
                component:MessagePageComponent
            },
            {
                path:'statistics',
                component:StatisticPageComponent
            },
            {
                path:'profile',
                component:ProfilePageComponent
            },
            {
                path:'settings',
                component: SettingPageComponent
            },
            {
                path:'**',
                redirectTo: 'blogs'
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


