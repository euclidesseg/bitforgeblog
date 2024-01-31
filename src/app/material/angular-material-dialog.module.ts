import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations:[],
    exports:[
        CommonModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule
    ],
})
export class AngularMaterialModule{}