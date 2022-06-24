import { GuiGridComponent } from '../gui.grid.component';
import * as i0 from "@angular/core";
export declare class GuiGridRegister {
    private readonly gridMap;
    register(gridId: string, component: GuiGridComponent, structureId: any): void;
    unregister(gridId: string): void;
    getValues(gridId: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiGridRegister, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GuiGridRegister>;
}
