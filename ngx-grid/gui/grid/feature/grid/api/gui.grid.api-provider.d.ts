import { GuiRowColoring, GuiSelectedRow, GuiTheme } from '../../../core/api/gui.grid.public-api';
import { FormationCommandInvoker } from '../../../../../structure/source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../../structure/core/api/structure.id';
import { SourceCommandInvoker } from '../../../../../structure/source/core/api/source.command-invoker';
import { FormationWarehouse } from '../../../../../structure/source/core/api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../../structure/search/core/api/search.command-invoker';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { GuiGridThemeCommandInvoker } from '../theme/gui.grid.theme.command-invoker';
import { StructureCommandInvoker } from '../../../../../structure/core/api/structure.command-invoker';
import { PagingConfig } from '../../../../../structure/paging/core/api/paging-config';
import { PagingCommandInvoker } from '../../../../../structure/paging/core/api/paging.command-invoker';
import { SearchConfig } from '../../../../../structure/search/core/api/search-config';
import { SummariesCommandInvoker } from '../../../../../structure/summaries/core/api/summaries.command-invoker';
import { SortingCommandInvoker } from '../../../../../structure/sorting/core/api/sorting.command-invoker';
import { SortingConfig } from '../../../../../structure/sorting/core/api/sorting-config';
export interface GuiGridApi {
    setSource(source: Array<any>): void;
    showLoading(): void;
    hideLoading(): void;
    getSelectedRows(): Array<GuiSelectedRow>;
    selectAll(): void;
    unselectAll(): void;
    deleteSelectedRows(): void;
    deleteRow(row: GuiSelectedRow): void;
    deleteRows(rows: Array<GuiSelectedRow>): void;
    /**
     * Paging
     */
    enablePaging(): void;
    disablePaging(): void;
    nextPage(): void;
    prevPage(): void;
    changePageSize(pageSize: number): void;
    setPagingConfig(config: PagingConfig): void;
    /**
     * Searching
     */
    setSearchingConfig(config: SearchConfig): void;
    search(phrase: string): void;
    clearSearchPhrase(): void;
    /**
     * View port
     */
    scrollToTop(): void;
    scrollToBottom(): void;
    scrollToRowByIndex(index: number): void;
    /**
     * Visual - Schema
     */
    setTheme(theme: string | GuiTheme): void;
    setVerticalGrid(enabled: boolean): void;
    setHorizontalGrid(enabled: boolean): void;
    setRowColoring(rowColoring: string | GuiRowColoring): void;
    /**
     * Virtual scroll
     */
    enableVirtualScroll(): void;
    disableVirtualScroll(): void;
    /**
     * Summaries
     */
    enableSummaries(): void;
    disableSummaries(): void;
    /**
     * Sorting
     */
    setSortConfig(config: SortingConfig): void;
}
export declare class GuiGridApiProvider {
    private readonly structureId;
    private readonly schemaId;
    private readonly formationCommandInvoker;
    private readonly formationWarehouse;
    private readonly sourceCommandInvoker;
    private readonly searchCommandInvoker;
    private readonly gridThemeCommandInvoker;
    private readonly structureCommandInvoker;
    private readonly summariesCommandInvoker;
    private readonly sortingCommandInvoker;
    private readonly pagingCommandInvoker;
    constructor(structureId: StructureId, schemaId: SchemaReadModelRootId, formationCommandDispatcher: FormationCommandInvoker, formationWarehouse: FormationWarehouse, sourceCommandInvoker: SourceCommandInvoker, searchCommandInvoker: SearchCommandInvoker, gridThemeCommandInvoker: GuiGridThemeCommandInvoker, structureCommandInvoker: StructureCommandInvoker, summariesCommandInvoker: SummariesCommandInvoker, sortingCommandInvoker: SortingCommandInvoker, pagingCommandInvoker: PagingCommandInvoker);
    provide(): GuiGridApi;
}
//# sourceMappingURL=gui.grid.api-provider.d.ts.map