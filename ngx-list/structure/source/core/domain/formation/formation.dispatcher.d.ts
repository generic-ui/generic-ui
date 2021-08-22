import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowSelectToggleType } from './core/row-select-toggle-type';
export declare class FormationDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    toggleSelectedRow(structureId: StructureId, selectedRow: string, type: RowSelectToggleType): void;
}
