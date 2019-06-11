import { StructureId } from 'structure/domain/structure-id';
import { FormationCommandService } from 'structure/app/formation/formation-command.service';
import { FormationDispatcher } from 'structure/domain/formation/command/formation.dispatcher';
export declare class LocalFormationCommandService extends FormationCommandService {
    private structureId;
    constructor(structureId: StructureId, formationDispatcher: FormationDispatcher);
    setDefault(): void;
    toggleSelectedRow(selectedRow: string): void;
}
