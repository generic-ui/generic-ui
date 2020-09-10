import { FormationCommandInvoker } from '../../../../source/domain-api/formation/formation.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../../source/domain/formation/formation.dispatcher';
import { RowSelectToggleType } from '../../../../source/domain/formation/core/row-select-toggle-type';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class LocalFormationCommandDispatcher extends FormationCommandInvoker {
    private structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, formationDispatcher: FormationDispatcher);
    setDefault(): void;
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType): void;
}
