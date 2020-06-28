import { FormationCommandDispatcher } from '../../../../../structure/source/domain-api/formation/formation.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../../../structure/source/domain/formation/formation.dispatcher';
import { RowSelectToggleType } from '../../../../../structure/source/domain/formation/core/row-select-toggle-type';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class LocalFormationCommandDispatcher extends FormationCommandDispatcher {
    private structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, formationDispatcher: FormationDispatcher);
    setDefault(): void;
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType): void;
}
