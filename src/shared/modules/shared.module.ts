import { CommonModule } from './common.module';
import { SpinnerComponent } from 'src/shared/components/spinner/spinner.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        SpinnerComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SpinnerComponent
    ]
})

export class SharedModule {}