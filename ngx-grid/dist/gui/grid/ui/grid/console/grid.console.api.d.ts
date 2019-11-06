import { GridComponent } from '../grid.component';
export interface GridConsoleApi {
    changeColumnHeaderTop(enabled: boolean): void;
}
export declare class GridConsoleApiProvider {
    private readonly gridComponent;
    private readonly structureId;
    constructor(gridComponent: GridComponent, structureId: any);
    provide(): GridConsoleApi;
}
