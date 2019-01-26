/* La idea de este archivo es concentrar el manejo de las "utilerias" de material design en un solo lugar para que sea mas manejable */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule,
    MatSelectModule, MatRadioModule, MatCardModule, MatNativeDateModule, MatTabsModule, MatMenuModule,
    MatTableModule, MatProgressBarModule, MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
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
        MatMenuModule,
        MatTableModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
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
        MatMenuModule,
        MatTableModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
})
export class CustomMaterialModule { }
