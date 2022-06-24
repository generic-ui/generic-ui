import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../feature/gui.list.component";
import * as i2 from "../../feature/item/gui.list-item.component";
import * as i3 from "../../feature/card/gui.list-card.component";
import * as i4 from "@angular/common";
import * as i5 from "../../../../feature-view/list-view/list-view.feature-module";
import * as i6 from "../../../../feature-view/grid-view/grid-view.feature-module";
export declare class GuiListModule {
    static forRoot(): ModuleWithProviders<GuiListModule>;
    static forChild(): ModuleWithProviders<GuiListModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiListModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GuiListModule, [typeof i1.GuiListComponent, typeof i2.GuiListItemComponent, typeof i3.GuiListCardComponent], [typeof i4.CommonModule, typeof i5.ListViewFeatureModule, typeof i6.GridViewFeatureModule], [typeof i1.GuiListComponent, typeof i2.GuiListItemComponent, typeof i3.GuiListCardComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GuiListModule>;
}
