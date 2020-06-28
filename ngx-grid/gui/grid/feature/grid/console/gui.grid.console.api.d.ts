import { GuiGridComponent } from '../gui.grid.component';
export interface GuiGridConsoleApi {
    changeColumnHeaderTop(enabled: boolean): void;
}
export declare class GridConsoleApiProvider {
    private readonly gridComponent;
    private readonly structureId;
    constructor(gridComponent: GuiGridComponent, structureId: any);
    provide(): GuiGridConsoleApi;
}
