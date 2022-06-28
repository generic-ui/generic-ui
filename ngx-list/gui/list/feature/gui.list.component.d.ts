import { GuiListGateway } from './gui.list.gateway';
import * as i0 from "@angular/core";
export declare class GuiListComponent extends GuiListGateway {
    private platformId;
    constructor(platformId: any);
    onPageChange(page: number): void;
    onPageSizeChange(pageSize: number): void;
    onSearchPhraseChange(phrase: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GuiListComponent, "gui-list", never, {}, {}, never, never, false>;
}
