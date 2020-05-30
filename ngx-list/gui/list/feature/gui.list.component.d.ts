import { GuiListGateway } from './gui.list.gateway';
export declare class GuiListComponent extends GuiListGateway {
    private platformId;
    constructor(platformId: any);
    onPageChange(page: number): void;
    onPageSizeChange(pageSize: number): void;
    onSearchPhraseChange(phrase: string): void;
}
