import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path:'bitforge',
        loadChildren:() => import('./app/bitforgeblog/bitforgeblog.module').then((module) => module.BitForgeModule)
    },
    {
        path:'',
        redirectTo:'bitforge',
        pathMatch:'full'
    }

]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}