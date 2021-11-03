import { GuiGridComponent } from '../gui.grid.component';
export declare class GuiGridRegister {
    private readonly gridMap;
    register(gridId: string, component: GuiGridComponent, structureId: any): void;
    unregister(gridId: string): void;
    getValues(gridId: string): any;
}
