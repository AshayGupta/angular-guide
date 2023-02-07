import { MaterialModule } from 'src/shared/modules/material-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

@NgModule({
    exports: [
        BrowserModule,
        MaterialModule
    ]
})

export class CommonModule {}