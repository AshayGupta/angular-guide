import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';

const components = [
    MatToolbarModule,
    MatIconModule
];

@NgModule({
    imports: components,
    exports: components
})

export class MaterialModule {}