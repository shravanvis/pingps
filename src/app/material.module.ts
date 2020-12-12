import { NgModule } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const modules = [
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule
]

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule{}