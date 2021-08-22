import { GuiRowColoring, GuiSelectedRow, GuiTheme } from '../../../core/api/gui.grid.public-api';
import { FormationCommandInvoker } from '../../../../../structure/source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../../structure/core/domain/structure.id';
import { SourceCommandInvoker } from '../../../../../structure/source/core/api/source.command-invoker';
import { FormationWarehouse } from '../../../../../structure/source/core/api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../../structure/search/core/api/search.command-invoker';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { GuiGridThemeCommandInvoker } from '../theme/gui.grid.theme.command-invoker';
import { StructureCommandInvoker } from '../../../../../structure/core/api/structure.command-invoker';
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
    search(phrase: string): void;
    clearSearchPhrase(): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    scrollToRowByIndex(index: number): void;
    setTheme(theme: string | GuiTheme): void;
    setVerticalGrid(enabled: boolean): void;
    setHorizontalGrid(enabled: boolean): void;
    setRowColoring(rowColoring: string | GuiRowColoring): void;
}
export declare class GuiGridApiProvider {
    private readonly structureId;
    private readonly schemaId;
    private readonly formationCommandInvoker;
    private readonly formationWarehouse;
    private readonly sourceCommandInvoker;
    private readonly searchCommandInvoker;
    private readonly gridThemeCommandInvoker;
    private readonly structureCommandDispatcher;
    constructor(structureId: StructureId, schemaId: SchemaReadModelRootId, formationCommandDispatcher: FormationCommandInvoker, formationWarehouse: FormationWarehouse, sourceCommandInvoker: SourceCommandInvoker, searchCommandInvoker: SearchCommandInvoker, gridThemeCommandInvoker: GuiGridThemeCommandInvoker, structureCommandDispatcher: StructureCommandInvoker);
    provide(): GuiGridApi;
}
