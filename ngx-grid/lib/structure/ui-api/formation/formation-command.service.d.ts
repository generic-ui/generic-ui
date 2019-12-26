import { FormationDispatcher } from '../../domain/formation/command/formation.dispatcher';
import { StructureId } from '../../domain/structure-id';
export declare class FormationCommandService {
    private formationDispatcher;
    constructor(formationDispatcher: FormationDispatcher);
    setDefaultFormation(structureId?: StructureId): void;
    toggleSelectedRow(selectedRow: string, structureId?: StructureId): void;
}
