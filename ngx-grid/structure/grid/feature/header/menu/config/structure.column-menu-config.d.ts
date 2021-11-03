import { ColumnMenuConfig } from '../../../../core/api/column-menu-config';
export declare class StructureColumnMenuConfig {
    private enabled;
    private sort;
    private filter;
    private columnsManager;
    static default(): StructureColumnMenuConfig;
    static fromConfig(config: ColumnMenuConfig): StructureColumnMenuConfig;
    private mainMenu;
    private filterMenu;
    private columnsMenu;
    constructor(enabled?: boolean, sort?: boolean, filter?: boolean, columnsManager?: boolean);
    isEnabled(): boolean;
    isMainEnabled(): boolean;
    isSortingEnabled(): boolean;
    isFilteringEnabled(): boolean;
    isColumnManagerEnabled(): boolean;
    getMenus(): Array<string>;
    getActiveMenu(): string;
    getMainMenu(): string;
    getFilterMenu(): string;
    getColumnMenu(): string;
    setMainMenu(mainMenu: string): void;
    setFilterMenu(filterMenu: string): void;
    setColumnsMenu(columnsMenu: string): void;
}
