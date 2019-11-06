import { GridComponent } from '../grid.component';
export declare class GridRegister {
    private readonly gridMap;
    register(gridId: string, component: GridComponent, structureId: any): void;
    unregister(gridId: string): void;
    getValues(gridId: string): any;
}
