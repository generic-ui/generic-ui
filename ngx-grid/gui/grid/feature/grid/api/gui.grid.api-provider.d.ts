import { GuiSelectedRow } from '../../../domain-api/gui.grid.public-api';
import { FormationCommandDispatcher } from '../../../../../structure/source/domain-api/formation/formation.command-dispatcher';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { SourceCommandDispatcher } from '../../../../../structure/source/domain-api/source.command-dispatcher';
import { FormationWarehouse } from '../../../../../structure/source/domain-api/formation/formation.warehouse';
export interface GuiGridApi {
    getSelectedRows(): Array<GuiSelectedRow>;
    selectAll(): void;
    unselectAll(): void;
    deleteSelectedRows(): void;
    deleteRow(row: GuiSelectedRow): void;
    deleteRows(rows: Array<GuiSelectedRow>): void;
}
export declare class GuiGridApiProvider {
    private readonly structureId;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    private readonly sourceCommandDispatcher;
    constructor(structureId: StructureId, formationCommandDispatcher: FormationCommandDispatcher, formationWarehouse: FormationWarehouse, sourceCommandDispatcher: SourceCommandDispatcher);
    provide(): GuiGridApi;
}
