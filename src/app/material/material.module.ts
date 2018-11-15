/* La idea de este archivo es concentrar el manejo de las "utilerias" de material design en un solo lugar para que sea mas manejable */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule,
    MatSelectModule, MatRadioModule, MatCardModule, MatNativeDateModule, MatTabsModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatNativeDateModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatTabsModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatNativeDateModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatTabsModule,
        MatMenuModule
    ],
})
export class CustomMaterialModule { }
