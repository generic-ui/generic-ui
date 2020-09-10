import { GuiRowColoring, GuiSelectedRow, GuiTheme } from '../../../domain-api/gui.grid.public-api';
import { FormationCommandInvoker } from '../../../../../structure/source/domain-api/formation/formation.command-invoker';
import { StructureId } from '../../../../../structure/core/domain/structure.id';
import { SourceCommandInvoker } from '../../../../../structure/source/domain-api/source.command-invoker';
import { FormationWarehouse } from '../../../../../structure/source/domain-api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../../structure/search/domain-api/search.command-invoker';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { GuiGridThemeCommandInvoker } from '../theme/gui.grid.theme.command-invoker';
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
    constructor(structureId: StructureId, schemaId: SchemaReadModelRootId, formationCommandDispatcher: FormationCommandInvoker, formationWarehouse: FormationWarehouse, sourceCommandInvoker: SourceCommandInvoker, searchCommandInvoker: SearchCommandInvoker, gridThemeCommandInvoker: GuiGridThemeCommandInvoker);
    provide(): GuiGridApi;
}
