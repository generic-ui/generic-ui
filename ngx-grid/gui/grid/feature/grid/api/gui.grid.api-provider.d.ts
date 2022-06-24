import { GuiRowColoring, GuiSelectedRow, GuiTheme } from '../../../core/api/gui.grid.public-api';
import { FormationPublisher } from '../../../../../core/structure/formation/api/formation.publisher';
import { StructureId } from '../../../../../core/structure/core/api/global/structure.id';
import { SourcePublisher } from '../../../../../core/structure/source/api/source.publisher';
import { FormationWarehouse } from '../../../../../core/structure/formation/api/formation.warehouse';
import { SearchPublisher } from '../../../../../core/structure/search/api/search.publisher';
import { SchemaReadModelRootId } from '../../../../../core/schema/api/global/schema.read-model-root-id';
import { GuiGridThemeCommandInvoker } from '../theme/gui.grid.theme.command-invoker';
import { StructurePublisher } from '../../../../../core/structure/core/api/structure.publisher';
import { PagingConfig } from '../../../../../core/structure/paging/api/config/paging-config';
import { PagingPublisher } from '../../../../../core/structure/paging/api/paging.publisher';
import { SearchConfig } from '../../../../../core/structure/search/api/config/search-config';
import { SummariesPublisher } from '../../../../../core/structure/summaries/api/summaries.publisher';
import { SortingPublisher } from '../../../../../core/structure/sorting/api/sorting.publisher';
import { SortingConfig } from '../../../../../core/structure/sorting/api/config/sorting-config';
import { CompositionWarehouse } from '../../../../../core/composition/api/composition.warehouse';
import { CompositionPublisher } from '../../../../../core/composition/api/composition.publisher';
import { CompositionId } from '../../../../../core/composition/api/global/composition.id';
import { FilterIntegration } from '../../../../../core/structure/filter/api-integration/filter.integration';
import { GuiFilter, GuiFilterCollection } from './filter/gui.filter';
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
     * Columns
     */
    getColumns(): Array<any>;
    /**
     * Filtering
     */
    getFilters(): GuiFilterCollection;
    getFiltersForColumn(columnName: string): Array<GuiFilter>;
    getFilterTypes(): Array<string>;
    getFilterTypesForColumn(columnName: string): Array<string>;
    removeAll(): void;
    removeFilter(filterId: string): void;
    removeFiltersFromColumn(columnName: string): void;
    filter(columnName: string, filterType: string, value: any): void;
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
    private readonly compositionId;
    private readonly schemaId;
    private readonly formationCommandInvoker;
    private readonly formationWarehouse;
    private readonly compositionCommandInvoker;
    private readonly compositionWarehouse;
    private readonly filterIntegration;
    private readonly sourceCommandInvoker;
    private readonly searchCommandInvoker;
    private readonly gridThemeCommandInvoker;
    private readonly structureCommandInvoker;
    private readonly summariesCommandInvoker;
    private readonly sortingCommandInvoker;
    private readonly pagingCommandInvoker;
    constructor(structureId: StructureId, compositionId: CompositionId, schemaId: SchemaReadModelRootId, formationCommandDispatcher: FormationPublisher, formationWarehouse: FormationWarehouse, compositionCommandInvoker: CompositionPublisher, compositionWarehouse: CompositionWarehouse, filterIntegration: FilterIntegration, sourceCommandInvoker: SourcePublisher, searchCommandInvoker: SearchPublisher, gridThemeCommandInvoker: GuiGridThemeCommandInvoker, structureCommandInvoker: StructurePublisher, summariesCommandInvoker: SummariesPublisher, sortingCommandInvoker: SortingPublisher, pagingCommandInvoker: PagingPublisher);
    provide(): GuiGridApi;
}
