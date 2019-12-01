import { FormationCommandService } from '../../../app/formation/formation-command.service';
import { StructureId } from '../../../domain/structure-id';
import { FormationDispatcher } from '../../../domain/formation/command/formation.dispatcher';
export declare class LocalFormationCommandService extends FormationCommandService {
    private structureId;
    constructor(structureId: StructureId, formationDispatcher: FormationDispatcher);
    setDefault(): void;
    toggleSelectedRow(selectedRow: string): void;
}
