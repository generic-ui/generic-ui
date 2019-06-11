import { StructureId } from 'structure/domain/structure-id';
import { FormationDispatcher } from 'structure/domain/formation/command/formation.dispatcher';
export declare class FormationCommandService {
    private formationDispatcher;
    constructor(formationDispatcher: FormationDispatcher);
    setDefaultFormation(structureId?: StructureId): void;
    toggleSelectedRow(selectedRow: string, structureId?: StructureId): void;
}
