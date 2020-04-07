import { FormationCommandService } from '../../../ui-api/formation/formation-command.service';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../domain/formation/formation.dispatcher';
export declare class LocalFormationCommandDispatcher extends FormationCommandService {
    private structureId;
    constructor(structureId: StructureId, formationDispatcher: FormationDispatcher);
    setDefault(): void;
    toggleSelectedRow(selectedRow: string): void;
}
