import { CommonModule } from './../../shared/modules/common.module';
import { NgModule } from "@angular/core";
import { GuideListComponent } from "./guide-list.component";

@NgModule({
    declarations: [
        GuideListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: []
})

export class GuideListModule {}